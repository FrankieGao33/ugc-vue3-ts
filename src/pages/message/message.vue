<template>
    <ul v-for="item in messageItems">
		<li class="container" @click="() => onClickMessage(item.type)" :key="item.id">
			<view class="left">
				<uni-icons class="icon" :type="item.icon" size="30" color="red"></uni-icons>
				<view class="middle">
					<view class="title" style="font-weight: bold;font-size: 13px;">{{ item.title }}</view>
					<view class="description">{{ item.description }}</view>
				</view>
			</view>
			<uni-icons v-if="item.isShowMore" class="more" type="forward" size="15"></uni-icons>
		</li>
    </ul>
</template>

<script setup lang="ts">
	import { MessageType } from "../../common/emun";
	import { IMessageOption } from "../../common/interface";

	const messageItems : IMessageOption[] = [
		{ id: '1', icon: 'phone', title: "互动消息", type: MessageType.Interaction, description: '糖糖纪实赞了你的评论', isShowMore: true },
		{ id: '2', icon: 'notification', title: "系统通知", type: MessageType.System, description: '抖音隐私政策修订通知.2023/6/1', isShowMore: false }
	]
	
	function onClickMessage(type: string) {
		switch (type) {
			case MessageType.Interaction:
				uni.navigateTo({
					url: "/pages/message/interaction"
				});
				break;
			case MessageType.System:
				uni.navigateTo({
					url: "/pages/message/system"
				})
				break;
			default:
				return;
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;
		height: 110rpx;
		margin: 10rpx;
	}
	.left {
		display: flex;
		.icon {
			margin: 0 12rpx;
		}
		.middle {
			display: flex;
			flex-direction: column;
			.title {
				font-size: 14px;
			}
			.description {
				font-size: 12px;
				color: gray;
			}
		}
	}
	.more {
		color: gray;
	}
</style>