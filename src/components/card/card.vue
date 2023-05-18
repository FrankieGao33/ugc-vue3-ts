<template>
    <view class="text-area">
	  <view class="title">{{ testA }}</view>
    </view>
	<view>
		<uni-icons type="location-filled" size="30"></uni-icons>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const testA = ref("This is a test cardcomponents data.");
</script>

<style>
.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
