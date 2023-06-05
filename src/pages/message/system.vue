<template>
	<view class="body">
		<view class="list">
		<ul v-for="item in messageItems">
			<li class="container" :key="item.id">
				<view class="title">{{ item.title }}</view>
				<view class="datetime">{{ item.datetime }}</view>
				<view class="description">{{ item.description }}</view>
			</li>
		</ul>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ISystemMessageOption } from "../../common/interface";

	const messageItems : ISystemMessageOption[] = [
		{ id: '1', title: "抖音隐私政策修订通知", datetime: '2022-10-06', description: '你好，根据业务开展的实际情况，抖音近期更新了《"抖音"隐私政策》中的相关内容，你可以前往"我"-"设置"页面查看更新后的协议全文。' },
		{ id: '2', title: "社区自律公约修订通知", datetime: '2022-09-06', description: '你好，抖音近期更新了《抖音社区自律公约》中的相关内容，你可以前往"我"-"设置"-"抖音规则中心"-"社区公约"页面查看更新后的公约。' }
	]
</script>

<style lang="scss">
	.body {
		width: 100%;
		height: 100vh;
		background-color: rgb(241, 241, 241);
	}
	.list {
		width: 95%;
		height: 95%;
		background-color: #fff;
		margin: 20rpx;
	}
	.container {
		height: 250rpx;
		margin: 5rpx;
		padding: 5rpx;
		border-bottom: 1px solid gray;
		.title {
			font-size: 14px;
		}
		.datetime {
			font-size: 12px;
		}
		.description {
			font-size: 12px;
			margin-top: 20rpx;
		}
	}
</style>