<template>
	<view class="user-basic-info" :style="{ backgroundImage: `url(${backgroundImage})` }">
		<view class="menu-icon" @click="onMenuBar()">
			<uni-icons class="bars" color="#fff" type="bars" size="20"></uni-icons>
		</view>
		<avatar 
			class="avatar"
			:url="avatarUrl"
			:size="size"
			:isEditable="isEditable"
			@changeAvatar="changeAvatar"
		/>
		<view class="user-name">{{userName}}</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import avatar from '@/components/avatar/avatar.vue';
	
	interface Props {
		avatarUrl: string,
		iconSize: string,
		userName: string,
		isEditable: boolean,
		backgroundImage: string
	}
	
	const props = withDefaults(defineProps<Props>(), {
		isEditable: false
	});
	
	const url = ref<string>();
	const size = ref<string>();
	const isEditable = ref<boolean>();
	const backgroundImage = ref<string>();
	
	url.value = props.avatarUrl;
	size.value = props.iconSize;
	isEditable.value = props.isEditable;
	backgroundImage.value = props.backgroundImage;

	const menuBarPos = getMenuBarPos();
	
	const {menuBarPosRight, menuBarPosTop, menuBarHeight} = menuBarPos;
	
	function changeAvatar() {
		uni.showActionSheet({
			itemList: ['拍一张', '从相册选择'],
			success: function (res) {
				switch (res.tapIndex) {
				    case 0:
				        turnOnCamara()
				        break;
				    case 1:
						chooseImage()
				        break;
				}
			},
			fail: function (e) {
				console.log("点击了取消");
			}
		});
	}
	
	function turnOnCamara () {
		console.log("即将打开照相机");
	}
	
	function chooseImage () {
		console.log("请选择照片");
	}
	
	function getMenuBarPos() {
		const getWXMenuPos = uni.getStorageSync("WXMenuButtionPosition");

		let menuBarPosRight = "";
		let menuBarPosTop = "";
		let menuBarHeight = "";
		
		if (getWXMenuPos) {
			menuBarPosRight = getWXMenuPos.width + 16 + "px";
			menuBarPosTop = getWXMenuPos.top + "px";
			menuBarHeight = getWXMenuPos.height + "px";
		}
		
		return {menuBarPosRight, menuBarPosTop, menuBarHeight}
	}
	
	
	function onMenuBar() {
		uni.showActionSheet({
			itemList: ['退出登录'],
			success: function (res) {
				wx.showModal({
				  title: '提示',
				  content: '确定退出？',
				  success (res) {
				    if (res.confirm) {
				      console.log('确定退出！')
				    } else if (res.cancel) {
				      console.log('取消退出')
				    }
				  }
				})
			},
			fail: function (e) {
				console.log("点击了取消");
			}
		});
	}
</script>

<style lang="scss">
	.user-basic-info{
		padding: 240rpx 0 0 40rpx;
		width: 100%;
		height: 260rpx;
		background-size: 100%;
		
		.menu-icon {
			position: absolute;
			right: v-bind("menuBarPosRight");
			top: v-bind("menuBarPosTop");
			width: v-bind("menuBarHeight");
			height: v-bind("menuBarHeight");
			border-radius: 50%;
			text-align: center;
			background-color: rgba(0, 0, 0, 0.6);
			
			.bars {
				position: relative;
				top: 12rpx;
			}
		}
		
		.avatar {
			display: inline-block;
			vertical-align: middle;
		}
		.user-name {
			display: inline-block;
			margin-left: 20rpx;
			font-size: 38rpx;	
		}
	}

</style>