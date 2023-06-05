<template>
	<view class="panel-view">
		<!-- <view :style="`height: ${isStatusBarHeight}px;`" class="status-bar"></view> -->
		<uni-nav-bar>
			<uni-icons type="back" size="30" @click="onBack"></uni-icons>

			<!-- <view class="select-view"> -->
				<uni-data-select 
					v-model="value"
					:localdata="messageTypes"
					:clear="false"
					@change="change">
				</uni-data-select>
			<!-- </view> -->
			<!-- <uni-section title="无边框" subTitle="使用 border = false 取消边框" type="line">
				<view class="example-body">
					<uni-combox :border="false" :candidates="messageTypes" :placeholder="messageTypes[0].text"></uni-combox>
				</view>
			</uni-section> -->

		</uni-nav-bar>
		
		<ul v-for="item in allMessageItems" class="list">
			<li class="container" :key="item.id">
				<view class="left">
					<uni-icons type="staff" size="30"></uni-icons>
					<!-- <image src="https://picsum.photos/seed/${Math.random()}/50/50" /> -->
					<view>
						<view class="title">{{ item.title }}</view>
						<view class="description">{{ item.description }}</view>
					</view>
				</view>
				<uni-icons type="staff" size="30" class="right"></uni-icons>
			</li>
		</ul>
	</view>
</template>

<script setup lang="ts">
	import { MessageType } from "../../common/emun";
	import { IAllMessageOption } from "../../common/interface";
	
	let messageTypes = [
		{ value: MessageType.All, text: "全部消息" },
		{ value: MessageType.CommentIssued, text: "发出的评论" },
		{ value: MessageType.CommentReceived, text: "收到的评论" },
		{ value: MessageType.LikeAndFavorite, text: "赞与收藏" }
	];
	// const value = messageTypes[0]
	let value = MessageType.All;

	const allMessageItems : IAllMessageOption[] = [
		{ id: '1', avatar: '', title: "用户 8514522283032", type: MessageType.LikeAndFavorite, description: '赞了你的视频 3天前', image: '' },
		{ id: '2', avatar: '', title: "用户 8514522283032", type: MessageType.CommentIssued, description: '中国加油 2023-06-1', image: '' },
		{ id: '3', avatar: '', title: "用户 8514522283032", type: MessageType.CommentReceived, description: '一切皆有可能 2023-05-10', image: '' },
		{ id: '4', avatar: '', title: "用户 8514522283032", type: MessageType.LikeAndFavorite, description: '喜欢你的视频 2023-02-01', image: '' }
	]
	
	function onBack() {
		uni.navigateTo({
			url: "/pages/message/message"
		});
	}
	
	function change(e) {
      console.log("e:", e);
    }
	
</script>

<style lang="scss">
	.panel-view {
		// background-color: rgb(241, 241, 241);
	}
	.container {
		display: flex;
		justify-content: space-between;
		height: 120rpx;
		margin: 15rpx;
		border-bottom: 1px solid rgb(241, 241, 241);
		.left {
			display: flex;
		}
		.right {
			margin-right: 10rpx;
		}
		.title {
			font-size: 14px;
		}
		.description {
			font-size: 12px;
			margin-top: 20rpx;
		}
	}
</style>