<template>
  <view class="review">
    <view>
      <ugc-content-swiper
        :content-list="contentList"
        :swiper-content="onSwiperContent"
        :must-login="false"
        :icon-group-click="onIconGroupClick"
        :currentContentId="currentContentId"
      />
    </view>
    <view class="buttons" v-if="tabType === TabsType.Audit">
      <view class="buttons-container">
        <button @click="onReviewSuccess">通过</button>
        <button @click="onReviewFail">不通过</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import ugcContentSwiper from "@/components/home/ugcContentSwiper.vue";
import { IContentInfo, IListInfo } from "../../common/interface";
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { store } from "../../store";
import { GET_CONTENT_LIST } from "../../store/actions";
import { TabsType } from "../../common/emun";

const contentList = ref<IContentInfo[]>([]);
let tabType = ref<string>("");
let currentContentId = ref<string>("");

onLoad((options?: any) => {
  console.log(`url options`, JSON.stringify(options));
  tabType.value = options?.tabType;

  if (tabType.value) {
    store
      .dispatch(GET_CONTENT_LIST, options.tabType)
      .then((data: IListInfo) => {
        const selectedContentItem = (data?.list || []).find(
          (item: IContentInfo) => item.id === options.contentId
        );
        contentList.value = [{ ...selectedContentItem }];
        currentContentId.value = options?.contentId;
        console.log(`selectedContentItem`, contentList.value);
      });
  }
});

const onIconGroupClick = () => {
  return;
};

const onSwiperContent = () => {
  return;
};

const onReviewSuccess = () => {
  return;
};

const onReviewFail = () => {
  return;
};
</script>

<style lang="scss">
.buttons {
  position: absolute;
  top: 100rpx;
  width: 100%;
}

.buttons-container {
  display: flex;
  padding: 20rpx;
  justify-content: space-between;

  button {
    font-size: 25rpx;
    border-radius: 8rpx;
    min-width: 200rpx;
  }
}
</style>
