<template>
  <view class="line">
    <view
      v-for="item in contentList?.slice(0, 3)"
      class="container"
      hover-class="container-hover"
      :key="item.id"
    >
      <image
        :src="
          item.avatorUrl ||
          'https://avatars.githubusercontent.com/u/37901036?s=40&v=4'
        "
        class="img"
        mode="aspectFit"
        @click.stop="emit('clickUserIcon', item.userId)"
      >
      </image>
    </view>
  </view>
</template>

<script setup lang="ts">
import { IContentInfo } from "../../common/interface";
interface Props {
  contentList: IContentInfo[];
}
const props = withDefaults(defineProps<Props>(), {
  contentList: () => [],
});

const emit = defineEmits<{
  (e: "clickUserIcon", id: string): void;
}>();
</script>

<style lang="scss">
.line {
  display: flex;
  // justify-content: center;
  // align-items: center;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%);
  margin-top: 25rpx;
}
.container {
  width: 90rpx;
  height: 90rpx;
  margin: 0 12rpx;
}
.container-hover {
  transform: scale(1.2);
  image {
    border-color: $uni-bg-color-hover;
  }
}
.img {
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: #ffffff;
  width: 100%;
  height: 100%;
}
</style>
