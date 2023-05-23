import type { State } from "./index";

export const setCount1 = 'setCount1'
export const setCount2 = 'setCount2'

export const mutations = {
	[setCount1](state : State, count : number) : void {
		console.log("test for mutations1");
		state.count1 +=  + 1
		console.log(state.count1);
	},
	setCount2(state : State, count : number) : void {
		console.log("test for mutations2");
		state.count2 +=  2
		console.log(state.count2);
	},
}