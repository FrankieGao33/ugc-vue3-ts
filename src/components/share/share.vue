<!-- 此组件用于点击content页面more icon后显示 -->
<template>
  <uni-popup ref="popup" type="bottom" safeArea backgroundColor="#fff">
    <view class="close-button__container" @click="close()">
      <uni-icons type="closeempty" size="24"></uni-icons>
    </view>
    <view class="share-button__container">
      <view class="share-button">
        <button
          class="shareBtn_hidden"
          type="default"
          open-type="share"
        ></button>
        <view class="button-swapper">
          <uni-icons type="weixin" size="40" color="#fff"></uni-icons>
        </view>
        <view class="icon-text">微信好友</view>
      </view>
      <view class="share-button">
        <view class="button-swapper">
          <uni-icons type="pyq" size="40" color="#fff"></uni-icons>
        </view>
        <view class="icon-text">朋友圈</view>
      </view>
      <view class="share-button" @click="emit('delete', OperationType.Delete)">
        <view class="button-swapper" style="background-color: #c1c1c1">
          <uni-icons type="trash-filled" size="40" color="#fff"></uni-icons>
        </view>
        <view class="icon-text">删除</view>
      </view>
    </view>
  </uni-popup>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ComponentPublicInstance } from "vue";
import { OperationType } from "../../common/emun";
import { onLoad } from "@dcloudio/uni-app";
const emit = defineEmits<{
  (e: "delete", type: OperationType): void;
}>();
const popup = ref<ComponentPublicInstance | null>(null);

function open() {
  popup.value?.open();
}
function close() {
  popup.value?.close();
}
onLoad(() => {
  wx.showShareMenu({
    withShareTicket: true,
  });
});
defineExpose({
  open,
  close,
});
</script>

<style lang="scss">
.close-button__container {
  text-align: right;
  padding-right: 20upx;
  margin: 20upx 0;
  uni-icons > text {
    background-color: #eee;
    border-radius: 50%;
  }
}
.share-button__container {
  display: flex;
  justify-content: space-around;
  margin: 40upx 0px;
  .share-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    .shareBtn_hidden {
      position: absolute;
      height: 120upx;
      width: 120upx;
      border-radius: 50%;
      opacity: 0;
    }
    .button-swapper {
      background-color: rgb(0, 172, 132);
      border-radius: 50%;
      height: 100upx;
      width: 100upx;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-text {
      margin-top: 20upx;
    }
  }
}
</style>
