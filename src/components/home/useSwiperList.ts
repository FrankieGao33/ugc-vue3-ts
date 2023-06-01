import { ref, watch, computed} from 'vue'
import { IContentInfo } from '../../common/interface'

export function useSwiperList(contentList: IContentInfo[]) {
	interface SwiperItem extends IContentInfo {
		isWatch: boolean
	}
	const getNewSwiperItems = ():SwiperItem[] => {
		const list = contentList.map(item => {
						return {
							...item,
							isWatch: false
						}
					})
		return list			
	}
	
	const newSwiperItems = ref<SwiperItem[]>(getNewSwiperItems())
	
	const contentListData = computed(() => {
		return JSON.parse(JSON.stringify(contentList))
	})
	watch(contentListData, (newValue, oldValue)=>{
		//数据长度发生变化，说明获取了新的数据
		if(newValue.length > oldValue?.length){
			const item = newValue[newValue.length -1]
			newSwiperItems.value.push({...item, isWatch: false})
		}
	}, {deep: true})
	return {newSwiperItems: newSwiperItems.value}
}