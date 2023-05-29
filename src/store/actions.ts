
import type { State } from "./index";
import type { ActionTree } from "vuex";

export const setAsyncCount1 = 'setAsyncCount1'
export const GET_ACCOUNT_INFO = 'GET_ACCOUNT_INFO'

export const actions : ActionTree<State, State> = {
	[setAsyncCount1]({ commit }, info : State) {
		setTimeout(() => {
			commit('setCount1');
		}, 1000);

		console.log(info);//参数
	}
}
