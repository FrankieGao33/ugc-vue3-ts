<template>
  <view class="browser">
    <ugc-content-swiper
      :content-list="list"
      :swiper-content="swiperContent"
      :must-login="false"
      :icon-group-click="onIconGroupClick"
      :currentContentId="curContentId"
      :showTabBar="false"
    />
    <share-modal ref="shareModal" @delete="onDelete" />
  </view>
</template>

<script setup lang="ts">
import ugcContentSwiper from "@/components/home/ugcContentSwiper.vue";
import ShareModal from "@/components/share/share.vue";
import { IContentInfo, IListInfo } from "../../common/interface";
import { OperationType } from "../../common/emun";
import { ref } from "vue";
import { store } from "../../store";
import { GET_CONTENT_LIST } from "../../store/actions";
import { onLoad, onShareAppMessage, onShareTimeline } from "@dcloudio/uni-app";

const list = ref<IContentInfo[]>([]);
const shareModal = ref<InstanceType<typeof ShareModal> | null>(null);

let tabType = "";
let curContentId = ref<string>("");
// let contentListByTabType: IListInfo = null;

onLoad((options?: any) => {
  console.log("onLoad function is triggered", options);
  tabType = options?.tabType;

  if (tabType) {
    store.dispatch(GET_CONTENT_LIST, tabType).then((data: IListInfo) => {
      list.value = data.list;
      curContentId.value = options?.contentId;
    });
  }
});

onShareAppMessage((options?: Page.ShareAppMessageOption) => {
  if (options.from === "button") {
    return {
      title: "UGC 小程序", //分享的名称
      path: "/pages/home/home", //页面的路径
    };
  }
});

onShareTimeline((options?: any) => {
  if (options === "button") {
    return {
      title: "UGC 小程序",
      type: 0,
      path: "/pages/home/home",
      imageUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    };
  }
});

function onIconGroupClick(type: OperationType, id: string) {
  console.log(type, id);
  if (type === OperationType.More) {
    shareModal.value.open();
  }
}

function onDelete(type: OperationType) {
  console.log(type);
}

function swiperContent() {
  if (tabType) {
    console.log("call swiper content for tabType");

    // if (!contentListByTabType?.isLastPage) {
    // call next page API to get nextPage data
    /*store.dispatch(SET_CONTENT_LIST, {list: [],pageNumber:2,isLastPage: true});*/
    // store.dispatch(GET_CONTENT_LIST, tabType);
    // }
    return;
  }

  console.log("请求了数据");
  /*
					const item: IContentInfo = {
					  ...mockList[1],
					  id: (Math.random() * 1e16).toFixed(),
					  userId: (Math.random() * 1e16).toFixed(),
					};
				  
					list.value.push(item);
					*/
}
</script>
<style lang="scss">
.browser {
  height: 100vh;
}
</style>
