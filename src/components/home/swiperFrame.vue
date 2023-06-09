<template>
  <swiper
    class="swiper"
    :current="current_index"
    autoplay="false"
    vertical="true"
    interval="9990000"
    @change="changeContent"
    :class="{ hideTabBar: !props.showTabBar }"
  >
    <swiper-item
      class="swiper-item"
      v-for="(item, index) in newSwiperItems"
      :key="item.id"
    >
      <slot name="usersLine" :contentInfo="item"></slot>
      <slot v-if="item.type === 'video'" name="video" :videoInfo="item"></slot>
      <slot v-else name="image" :imageInfo="item"></slot>
      <view class="content-description">
        <slot
          name="description"
          :description="item.description"
          :userName="item.userName"
        ></slot>
      </view>
      <view class="content-icon-group">
        <slot name="iconGroup" :contentInfo="item"></slot>
      </view>
    </swiper-item>
  </swiper>
  <view class="animationDom"></view>
</template>
<script setup lang="ts">
import { onMounted, ComponentInternalInstance, getCurrentInstance } from "vue";
import { IContentInfo } from "../../common/interface";
import { useSwiperList } from "./useSwiperList";
interface Props {
  contentList: IContentInfo[];
  currentContentId?: string;
  onSwiperContent: () => void;
  showTabBar?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  contentList: () => [],
  showTabBar: true,
});
const { newSwiperItems, current_index } = useSwiperList(props);
const instance = getCurrentInstance() as ComponentInternalInstance;
onMounted(() => {
  if (newSwiperItems[current_index.value]?.type === "video") {
    const video_id = newSwiperItems[current_index.value].id;
    const videoCtx = uni.createVideoContext(
      `video_${video_id}`,
      instance.proxy.$parent.$refs[video_id]
    );
    videoCtx.play();
  }
});

function videoPause() {
  const id = newSwiperItems[current_index.value].id;
  const videoCtx = uni.createVideoContext(
    `video_${id}`,
    instance.proxy.$parent.$refs[id]
  );
  videoCtx.pause();
}
function changeContent(e) {
  if (e.detail.current === current_index.value) {
    return;
  }
  // 暂停之前的视频
  if (newSwiperItems[current_index.value].type === "video") {
    videoPause();
  }
  // 播放现在的视频
  current_index.value = e.detail.current;
  if (newSwiperItems[current_index.value].type === "video") {
    const video_id = newSwiperItems[current_index.value].id;
    const videoCtx = uni.createVideoContext(
      `video_${video_id}`,
      instance.proxy.$parent.$refs[video_id]
    );
    if (instance.proxy.$parent.$refs[video_id].isShowPlayButton) {
      videoCtx.pause();
    } else {
      videoCtx.play();
    }
  }

  // 判断是否第一条或者最后一条
  if (e.detail.current == 0 || e.detail.current == newSwiperItems.length - 1) {
    return false;
  }
  if (!newSwiperItems[current_index.value].isWatch) {
    newSwiperItems[current_index.value].isWatch = true;
    props.onSwiperContent();
  }
}
</script>
<style lang="scss">
.swiper {
  width: 100vw;
  height: calc(100vh - 40px);
  position: fixed;
  top: 0;
  left: 0;

  .swiper-item {
    background-color: black;

    .content-video {
      position: absolute;
    }

    .content-description {
      position: absolute;
      color: white;
      top: 85%;
      padding: 0 30upx;
    }

    .content-icon-group {
      position: absolute;
      bottom: 150upx;
      right: 30upx;
      text-align: center;
    }
  }
}

.hideTabBar {
  height: 100vh;
}

.animationDom {
  z-index: -1;
  height: 0;
  width: 0;
  animation: change infinite 2s;
}

@keyframes change {
  from {
    width: 0;
  }

  to {
    width: 1rpx;
  }
}
</style>
