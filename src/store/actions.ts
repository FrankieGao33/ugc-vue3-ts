import type { State } from "./index";
import type { ActionTree } from "vuex";
import { IContentList } from "../common/interface";

export const setAsyncCount1 = "setAsyncCount1";
export const GET_ACCOUNT_INFO = "GET_ACCOUNT_INFO";
export const SET_CONTENT_LIST = "SET_CONTENT_LIST";
export const GET_CONTENT_LIST = "GET_CONTENT_LIST";

export const actions: ActionTree<State, any> = {
  [setAsyncCount1]({ commit }, info: State) {
    setTimeout(() => {
      commit("setCount1");
    }, 1000);

    console.log(info); //参数
  },
  [SET_CONTENT_LIST]({ commit }, contentList: IContentList) {
    commit("setContentList", contentList);
  },
  [GET_CONTENT_LIST]({ state }, key: string) {
    return state.list[key];
  },
};
