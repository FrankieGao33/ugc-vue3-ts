<template>
	<view class="profile-layout">
		<view class="profile-row">
			<view class="interaction-item">
				<text class="interaction-count">{{props.profileData.praise}}</text><text>获赞</text>
			</view>
			<view class="interaction-item">
				<text class="interaction-count">{{props.profileData.attention}}</text><text>关注</text>
			</view>
			<view class="interaction-item">
				<text class="interaction-count">{{props.profileData.fans}}</text><text>粉丝</text>
			</view>
		</view>
		<template v-if="props.profileData.isMyself">
			<view class="profile-row _narrow" @click="goProfile">
				<text class="introduce-msg">点击添加介绍,让大家认识你</text>
				<uni-icons type="compose" size="16"></uni-icons>
			</view>
			<view class="profile-row" @click="goProfile">
				<view class="personal-info">
					<uni-icons custom-prefix="iconfont" type="icon-ugc-sex_man" color="#00aaff" size="12" class="icon-right"></uni-icons>
					<text>{{props.profileData.gender}}</text>
				</view>
				<view class="personal-info">
					<text>{{props.profileData.location}}</text>
				</view>
				<view class="personal-info">
					<uni-icons type="plusempty" size="12" class="icon-right"></uni-icons>
					<text>添加年龄、学校等标签</text>
				</view>
			</view>
			<view class="profile-row">
				<button class="btn-edit-profile" @click="goProfile">编辑资料<text class="complete-degree">&nbsp;{{props.profileData.completion}}</text></button>
			</view>
		</template>
		<template v-if="!props.profileData.isMyself">
			<view class="profile-row">
				<view class="personal-info">
					<uni-icons custom-prefix="iconfont" type="icon-ugc-sex_man" color="#00aaff" size="12" class="icon-right"></uni-icons>
					<text>{{props.profileData.gender}}</text>
				</view>
				<view class="personal-info">
					<text>{{props.profileData.location}}</text>
				</view>
			</view>
			<view class="profile-row">
				<button class="btn-edit-profile"><uni-icons type="plusempty" size="12" class="icon-right"></uni-icons>关注</button>
			</view>
		</template>
	</view>
</template>

<script setup lang="ts">
	import { profileInfo } from '../../common/interface'
	interface Props {
		profileData: profileInfo
	}
	const props = defineProps<Props>()
	const goProfile = ()=>{
		uni.navigateTo({
			url: "./editProfile/editProfile"
		})
	}
</script>

<style lang="scss">
	.icon-right {
		margin: 6rpx;
	}
	.profile-layout {
		background-color: #ffffff;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		padding: 26rpx;
		.profile-row {
			margin-bottom: 40rpx;
			font-size: 26rpx;
			color: #5d5d5d;
			&._narrow {
				margin-bottom: 15rpx;
			}
		}
	}
	.btn-edit-profile {
		width: 50%;
		font-size: 30rpx;
		color: black;
		background-color: #e5e5e5;
	}
	.complete-degree {
		color: #5d5d5d;
	}
	.introduce-msg {
		margin-right: 6rpx;
	}
	.interaction-item {
		display: inline-block;
		margin-right: 30rpx;
		.interaction-count {
			font-weight: bolder;
			color: black;
			margin-right: 6rpx;
		}
	}
	.personal-info {
		display: inline-block;
		font-size: 22rpx;
		border-radius: 6rpx;
		padding: 4rpx 6rpx;
		background-color: #e5e5e5;
		margin-right: 10rpx;
	}
</style>