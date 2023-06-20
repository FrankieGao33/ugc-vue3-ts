<template>
  <view class="creation-wrapper">
    <view class="creation-header">
      <uni-icons type="back" size="20"></uni-icons>
      <button size="mini" class="creation-publish">发表</button>
    </view>
    <view>
      <textarea placeholder="这一刻的想法..." class="creation-text"></textarea>
    </view>
    <selected-file-list />
  </view>
</template>

<script setup lang="ts">
import selectedFileList from "@/components/selectedFileList/selectedFileList.vue";
</script>

<style lang="scss">
.creation-wrapper {
  padding: 10px;
}
.creation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.creation-publish {
  margin-right: 0;
  background-color: limegreen;
  color: #fff;
}
.creation-text {
  height: 250rpx;
}
</style>
