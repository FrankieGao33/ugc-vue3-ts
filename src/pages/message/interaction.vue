<template>
	<view class="panel-view">
    <!-- <uni-nav-bar dark :fixed="true" shadow  status-bar left-icon="left" @clickLeft="back"> -->
	<uni-nav-bar :fixed="true" status-bar left-icon="left" @clickLeft="back" :border="false">
		<view @click="toggle('top')" class="navigation-bar">
			<text class="navigation-bar-text">{{ selectedMessageText }}</text>
            <uni-icons :class="isShow ? 'top' : 'bottom' " color="#000" :type="isShow ? 'top' : 'bottom'" size="20"></uni-icons>
		</view>
    </uni-nav-bar>
	</view>
	<view>
	    <uni-popup ref="popup" @change="change">
	        <view class="popup-content" style="height:180px;">
				<ul class="popup-ul">
					<li v-for="item in messageTypes" :key="item.value" @click="selectMessage(item)" class="popup-li">
						<view class="li-container-left">
							<uni-icons :type="item.icon" size="20" color="gray"></uni-icons>
							<view class="li-container-text">{{item.text}}</view>
						</view>
						<view style="margin-right: 20rpx;">
							<uni-icons v-if="item.value == selectedMessageType" color="red" type="checkmarkempty" size="20"></uni-icons>
						</view>
					</li>
				</ul>
            </view>
	    </uni-popup>
	</view>
	<view>
		<ul v-for="item in messageItems" class="list">
			<li class="container" :key="item.id">
				<view class="left">
					<image :src="item.avatar" class="message-left-image"></image>
					<view class="message-middle">
						<view class="title">{{ item.title }}</view>
						<view class="description" style="color:gray">{{ item.description }}</view>
					</view>
				</view>
				<image :src="item.image" class="message-right-image"></image>
			</li>
		</ul>
	</view>
</template>

<script>
	import { MessageType } from "../../common/emun";
	import { IAllMessageOption } from "../../common/interface";
	
	export default {
			data() {
				return {
                    isShow: false,
                    selectedMessageType: MessageType.All,
                    selectedMessageText: "全部消息",
					messageItems: this.allMessageItems,
                    messageTypes: [
						{ icon:"flag", value: MessageType.All, text: "全部消息" },
						{ icon:"cloud-upload-filled", value: MessageType.CommentIssued, text: "发出的评论" },
						{ icon:"cloud-download-filled", value: MessageType.CommentReceived, text: "收到的评论" },
						{ icon:"heart-filled", value: MessageType.LikeAndFavorite, text: "赞与收藏" }
                    ],
					allMessageItems: [
						{ id: '1', avatar: 'https://picsum.photos/seed/${Math.random()}/50', title: "用户 8514522283032", type: MessageType.LikeAndFavorite, description: '赞了你的视频 3天前', image: 'https://picsum.photos/50/50/?blur=7' },
						{ id: '2', avatar: 'https://picsum.photos/seed/${Math.random()}/50', title: "用户 8514522283032", type: MessageType.CommentIssued, description: '中国加油 2023-06-1', image: 'https://picsum.photos/50/50/?blur=6' },
						{ id: '3', avatar: 'https://picsum.photos/seed/${Math.random()}/50', title: "用户 8514522283032", type: MessageType.CommentReceived, description: '一切皆有可能 2023-05-10', image: 'https://picsum.photos/id/237/50' },
						{ id: '4', avatar: 'https://picsum.photos/seed/${Math.random()}/50', title: "用户 8514522283032", type: MessageType.LikeAndFavorite, description: '喜欢你的视频 2023-02-01', image: 'https://picsum.photos/seed/picsum/50' },
						{ id: '5', avatar: 'https://picsum.photos/50/50?grayscale', title: "用户 8514522284045", type: MessageType.LikeAndFavorite, description: '赞了你的视频 5天前', image: 'https://picsum.photos/50/50/?blur=5' },
						{ id: '6', avatar: 'https://picsum.photos/50/50?grayscale', title: "用户 8514522284045", type: MessageType.CommentIssued, description: 'Hello World 2023-05-1', image: 'https://picsum.photos/50/50/?blur=2' },
						{ id: '7', avatar: 'https://picsum.photos/50/50?grayscale', title: "用户 8514522284045", type: MessageType.CommentReceived, description: '坚持就是胜利 2023-03-10', image: 'https://picsum.photos/50/50/?blur=3' },
						{ id: '8', avatar: 'https://picsum.photos/50/50?grayscale', title: "用户 8514522284045", type: MessageType.LikeAndFavorite, description: '喜欢你的视频 2023-01-01', image: 'https://picsum.photos/50/50/?blur=4' }
					]
				}
			},
			onLoad: function() {
				this.messageItems = this.allMessageItems;
			},
			methods: {
                back() {
					uni.navigateBack();
                },
				change(e) {
					console.log('当前模式：' + e.type + ',状态：' + e.show);
				},
				toggle(type) {
                    if (!this.isShow) {
                        this.$refs.popup.open(type);
                    } else {
                        this.$refs.popup.close();
                    }
					this.isShow = !this.isShow;
				},
				dialogClose() {
					this.$refs.popup.close();
					this.isShow = false;
				},
                selectMessage(item) {
					this.selectedMessageType = item.value;
					this.selectedMessageText = item.text;
					console.log(item.value);
					if (item.value == MessageType.All) {
						this.messageItems = this.allMessageItems;
					} else {
						this.messageItems = this.allMessageItems.filter(v => v.type == item.value);
					}
					console.log(this.messageItems);
					this.dialogClose();
                }
			}
		}
</script>

<style lang="scss">
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
	.navigation-bar {
		padding-top:8px;
		padding-left:30px;
	}
	
	.navigation-bar-text {
		padding-right:5px;
		font-size: 14px;
		font-weight: bold;
	}
	
	.popup-ul {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 70px;
		font-size: 14px;
	}
	
	.popup-li {
		display: flex;
		justify-content: space-between;
		height: 35px;
	}
	
	.li-container-left {
		margin-left: 20rpx;
		display: flex;
	}
	
	.li-container-text {
		margin-left: 20rpx;
		font-weight: bold;
		font-size: 13px;
	}
	
	.message-left-image {
		width: 40px;
		height: 40px;
		border-radius: 20px;
	}
	
	.message-right-image {
		width: 40px;
		height: 40px;
	}
	
	.message-middle {
		margin-left: 10px;
		.title {
			font-size: 13px;
		}
	}
    @mixin flex {
		display: flex;
		flex-direction: row;
	}

	@mixin height {
		height: 100%;
		flex: 1;
	}

	.popup-content {
		@include flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
		height: 50px;
		background-color: #fff;
	}

	.popup-height {
		@include height;
		width: 200px;
	}

</style>