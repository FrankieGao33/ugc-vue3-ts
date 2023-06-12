<template>
	<view class="edit-layout">
		<view class="input-label">
			<text class="save-btn" @click="saveInput">保存</text>
		</view>
		<view>
			<textarea type="text" v-model="introduce" placeholder="介绍喜好,个性或@你的好友" class="input-content"></textarea>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {ref} from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	const introduce = ref<string>();
	onLoad((params) => {
		introduce.value = params.introduce;
	});
	const saveInput = ()=> {
		//call api
		uni.navigateBack();
	}
</script>

<style lang="scss">
	.edit-layout {
		font-size: 24rpx;
	}
	.input-label {
		position: relative;
		border-bottom: #d6d6d6 solid 2rpx;
		height: 60rpx;
		.save-btn {
			color: #ff0004;
			padding-top: 15rpx;
			float: right;
			margin-right: 20rpx;
		}
	}
	.input-content {
		width: 100%;
		padding: 10rpx 20rpx;
		border-bottom: 2rpx solid #d6d6d6;
	}
</style>
