import type { State } from "./index";
import { IContentList } from "../common/interface";

export const setCount1 = 'setCount1'
export const setCount2 = 'setCount2'

export const mutations = {
	[setCount1](state : State, count : number) : void {
		console.log("test for mutations1");
		state.count1 += + 1
		console.log(state.count1);
	},
	setCount2(state : State, count : number) : void {
		console.log("test for mutations2");
		state.count2 += 2
		console.log(state.count2);
	},
	setContentList(state : State, contentList : IContentList) : void {
		const { key, listInfo } = contentList;

		if (state.list[key]) {
			const oldListInfo = state.list[key];

			if (listInfo.pageNumber !== oldListInfo.pageNumber) {
				state.list[key] = {
					list: oldListInfo.list.concat(listInfo.list),
					pageNumber: listInfo.pageNumber,
					isLastPage: listInfo.isLastPage
				};
			}
		} else {
			state.list[key] = listInfo;
		}
	}
}