<template>
  <view class="tabs-panel" :style="{ height: `${props.height}px` }">
    <scroll-view
      class="tabs-panel-container"
      scroll-y="true"
      @scrolltolower="props?.scrollToLower"
    >
      <view
        class="panel-without-data-container"
        v-if="props.list?.length === 0"
      >
        <panelWithoutData :type="props.tabType" />
      </view>
      <view v-else>
        <uni-grid
          :showBorder="false"
          :column="props.column"
          :highlight="false"
          :square="false"
        >
          <uni-grid-item
            v-for="(item, index) in props.list"
            :index="index"
            :key="`post-${index}`"
          >
            <imageItem
              :item="item || {}"
              @on-click="onClickImage"
              width="240"
              height="300"
            ></imageItem>
          </uni-grid-item>
        </uni-grid>
        <view class="loading-more" v-if="props.isLoading">
          <text class="loading-more-text">{{ loadingText }}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { TabsType } from "../../../common/emun";
import { IContentInfo } from "../../../common/interface";
import panelWithoutData from "@/components/me/tabs/panelWithoutData.vue";
import imageItem from "@/components/me/tabs/imageItem.vue";

interface Props {
  type: TabsType;
  list?: IContentInfo[];
  height?: number;
  column: number;
  scrollToLower?: () => void;
  isLoading: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  tabType: TabsType.Posts,
  list: null,
  column: 3,
  height: 600,
  isLoading: false,
});

const loadingText = ref<string>("加载中...");

const onClickImage = (id: string) => {
  console.log("id:", id);
  if (props.tabType === TabsType.Audit || props.tabType === TabsType.Reviewed) {
    uni.navigateTo({
      url: `/pages/me/review?tabType=${props.tabType}&contentId=${id}`,
    });
  } else {
    uni.navigateTo({
      url: `/pages/home/home?tabType=${props.tabType}&contentId=${id}`,
    });
  }
};
</script>

<style lang="scss">
.tabs-panel {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 20rpx 0;
}

.tabs-panel-container {
  height: 100%;
  width: 100%;
}

.panel-without-data-container {
  position: absolute;
  width: 100%;
  top: 100rpx;
  text-align: center;
}

.uni-grid-item--border {
  border-bottom: none !important;
  border-right: none !important;
}

.loading-more {
  align-items: center;
  justify-content: center;
  padding-top: 14px;
  padding-bottom: 14px;
  text-align: center;
}

.loading-more-text {
  font-size: 28rpx;
  color: #999;
}
</style>
