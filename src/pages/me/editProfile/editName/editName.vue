<template>
	<view class="edit-layout">
		<view class="input-label">
			<text>我的名字</text>
			<text class="save-btn" @click="saveInput">保存</text>
		</view>
		<view class="input-layout">
			<input type="text" v-model="name" maxlength="20" placeholder="记得填写名字哦" class="input-content"/>
			<uni-icons type="clear" color="#8f8f8f" size="18" class="clear-btn" @click="clearChars"></uni-icons>
		</view>
		<view class="prompt-info">
			<text>名字30天内可修改4次</text>
			<text class="max-chars">{{typeLength}}/20</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {ref, watch, getCurrentInstance} from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	const name = ref<string>();
	const typeLength = ref<number>();
	
	const _this = getCurrentInstance().ctx;
	onLoad((params) => {
		name.value = params.name;
	});
	const clearChars = ()=>{
		name.value = '';
	}
	watch(name, (newName)=>{
		typeLength.value = newName.length;
	});
	const saveInput = ()=> {
		//call api
		const eventChannel = _this.getOpenerEventChannel();
		eventChannel.emit('getUpdateName', {name: name});
		uni.navigateBack();
	};
</script>

<style lang="scss">
	.edit-layout {
		font-size: 24rpx;
		margin-right: 20rpx;
		margin-left: 20rpx;
	}
	.input-layout {
		position: relative;
		.clear-btn {
			position: absolute;
			bottom: 30rpx;
			right: 0;
			z-index: 10;
		}
	}
	.input-label {
		position: relative;
		color: #a5a5a5;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		.save-btn {
			color: #ff0004;
			float: right;
		}
	}
	.input-content {
		padding-bottom: 30rpx;
		border-bottom: 2rpx solid #d6d6d6;
	}
	.prompt-info {
		color: #a5a5a5;
		margin-top: 10rpx;
	}
	.max-chars {
		float: right;
	}
</style>
