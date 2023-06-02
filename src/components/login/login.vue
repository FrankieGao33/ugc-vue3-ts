<template>
	<view class="container">
		<uni-icons class="image" type="auth-filled" size="100"/>
		<view class="title">你还没有登录</view>
		<view class="content">登录账号，查看你关注的精彩内容</view>
		<button class="login-button" type="default" @click="onLogin">登录</button>
	</view>
	<view class="bg"></view>
</template>

<script setup lang="ts">
	const emit = defineEmits<{
	  (e: 'login', value: boolean): void
	}>()
	
	function onLogin() {
		console.log('login...');
		uni.showLoading({
			title: '加载中...'
		});
		setTimeout(()=>{
			uni.hideLoading();
			emit('login', true);
		},1000);
		
	}
</script>

<style lang="scss">
	.bg {
		width: 100vw;
		height: 100vh;
		background-color: black;
	}
	.container {
		display: flex;
		flex-direction: column;
		border: $uni-border-color-red 10rpx solid;
		width: 70%;
		position: absolute;
		left: 50%;
		top:50%;
		transform: translate(-50%, -65%);
		.image {
			margin: 100rpx auto;
		}
		.title {
			color: white;
			font-size: 16px;
			margin: 16rpx auto;
		}
		.content {
			color: gray;
			font-size: 12px;
			margin: 16rpx auto;
		}
		.login-button {
			margin: 60rpx auto;
			width: 70%;
			font-size: 14px;
			background-color: $uni-button-color-red;
			color: white;
		}
	}
	
</style>