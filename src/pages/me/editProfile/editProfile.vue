<template>
	<view class="edit-content-layout">
		<view class="avatar-layout">
			<image class="avatar-img" src="../../../static/logo.png"></image>
		</view>
		<view class="edit-content">
			<view class="edit-item">
				<label class="item-label">名字</label>
				<view class="item-content" @click="editName">
					<text class="item-value" v-if="profileInfo.name">{{profileInfo.name}}</text>
					<text class="item-place-hold" v-else>昵称</text>
				</view>
				<uni-icons type="right" size="12" class="arrow-right"></uni-icons>
			</view>
			<view class="edit-item">
				<label class="item-label">简介</label>
				<view class="item-content" @click="editIntro">
					<text class="item-value" v-if="profileInfo.introduce">{{profileInfo.introduce}}</text>
					<text class="item-place-hold" v-else>介绍一下自己</text>
				</view>
				<uni-icons type="right" size="12" class="arrow-right"></uni-icons>
			</view>
			<view class="edit-item">
				<label class="item-label">性别</label>
				<view class="item-content">
					<text class="item-value" v-if="profileInfo.gender">{{profileInfo.gender}}</text>
					<text class="item-place-hold" v-else>--</text>
				</view>
				<uni-icons type="right" size="12" class="arrow-right"></uni-icons>
			</view>
			<view class="edit-item">
				<label class="item-label">生日</label>
				<view class="item-content">
					<text class="item-value" v-if="profileInfo.birthday">{{profileInfo.birthday}}</text>
					<text class="item-place-hold" v-else>出生年月</text>
				</view>
				<uni-icons type="right" size="12" class="arrow-right"></uni-icons>
			</view>
			<view class="edit-item">
				<label class="item-label">所在地</label>
				<view class="item-content">
					<text class="item-value" v-if="profileInfo.location">{{profileInfo.location}}</text>
					<text class="item-place-hold" v-else>--</text>
				</view>
				<uni-icons type="right" size="12" class="arrow-right"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { reactive } from 'vue'
	// import { onLoad } from '@dcloudio/uni-app'
	interface profile {
		name: string
		introduce: string
		gender: string
		birthday: string
		location: string
	}
	const profileInfo = reactive<profile>({
		name: '',
		introduce: '',
		gender: '',
		birthday: '',
		location: ''
	})
	profileInfo.name = '巷子里的猫33';
	profileInfo.introduce = '这是测试数据';
	const editName = () => {
		uni.navigateTo({
			url: './editName/editName?name=' + profileInfo.name
		})
	}
	const editIntro = () => {
		uni.navigateTo({
			url: './editIntroduce/editIntroduce?introduce=' + profileInfo.introduce
		})
	}
</script>s

<style lang="scss">
	.edit-content-layout {
		padding: 30rpx;
	}
	.edit-content {
		margin-top: 40rpx;
		font-size: 26rpx;
		color: #5d5d5d;
		.edit-item {
			margin-bottom: 50rpx;
		}
		.item-label {
			margin-right: 60rpx;
		}
		.item-content {
			display: inline-block;
		}
		.item-place-hold {
			color: #9d9d9d;
		}
		.item-value {
			color: #000000;
		}
		.arrow-right {
			float: right;
		}
	}
	.avatar-layout {
		text-align: center;
		.avatar-img {
			width: 200rpx;
			height: 200rpx;
			border-radius: 50%;
		}
	}
</style>
