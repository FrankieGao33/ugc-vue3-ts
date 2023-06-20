import {ref} from 'vue'
import { FileInfo } from "../../common/interface"

interface SelectedFileInfo {
	tempFiles:FileInfo[]
	type:string,
	[field:string]:unknown
}

export const useAction = (callBack)=>{
	const shoot = ()=>{
		uni.chooseMedia({
			sourceType:['camera'],
			success:(res:SelectedFileInfo)=>{
				console.log('res',res)
				callBack(res.tempFiles)
			}
		})
	}
	
	const select = ()=>{
		uni.chooseMedia({
			sourceType:['album'],
			success:(res:SelectedFileInfo)=>{
				console.log('res',res)
				callBack(res.tempFiles)
			}
		})
	}
	
	return {
		shoot,
		select
	}
}