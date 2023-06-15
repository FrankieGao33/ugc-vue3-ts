import { ref, watch, computed } from 'vue'
import { IContentInfo } from '../../common/interface'

export function useSwiperList(props:{contentList : IContentInfo[],currentContentId?: string}) {
	interface SwiperItem extends IContentInfo {
		isWatch : boolean
	}
	const getNewSwiperItems = () : SwiperItem[] => {
		const list = props.contentList.map(item => {
			return {
				...item,
				isWatch: false
			}
		})
		return list
	}
	const newSwiperItems = ref<SwiperItem[]>(getNewSwiperItems())
	
	const currentItemIndex = (element: IContentInfo) =>
	  element.id === (props.currentContentId || newSwiperItems.value[0].id);
	  
	const current_index = ref<number>(newSwiperItems.value.findIndex(currentItemIndex));
	
	const propsData = computed(() => {
		return JSON.parse(JSON.stringify(props))
	})

	watch(propsData, (newValue, oldValue) => {
		
		if (newValue.contentList.length > oldValue?.contentList.length) {
			const restValue = newValue.contentList.slice(oldValue?.contentList.length)
			if(restValue && restValue.length > 0){
				newSwiperItems.value.push(...restValue)
			}
		}
		if(newValue.currentContentId !== oldValue.currentContentId) {
			current_index.value = newValue.contentList.findIndex(currentItemIndex);
		}
	}, { deep: true })

	return { newSwiperItems: newSwiperItems.value, current_index}
}