import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'
import { IListInfo } from '../common/interface'


// 为 store state 声明类型
export interface State {
	count1 : number,
	count2 : number,
	list : Record<string, IListInfo>
}

// 定义 injection key
export const key : InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
	state() {
		return {
			// 就是公共的数据，所有的组件都可以直接使用
			count1: 100,
			count2: 200,
			list: {}
		}
	},
	mutations,
	actions,
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
	return baseUseStore(key)
}