<template>
	<view class="bg-layout" @click="changeBgImage">
		<image :src="bgImage"></image>
		<view class="change-bg">
			<uni-icons type="camera" size="15" color="#ffffff" class="camera-icon"></uni-icons>
			<text class="change-text">更换背景</text>
		</view>
	</view>
	<view class="edit-content-layout">
		<view class="avatar-layout">
			<avatar
				class="avatar"
				:url="avatarUrl"
				:size="size"
				:isEditable="isEditable"
				@changeAvatar="changeAvatar"
			/>
			<view class="change-avatar-info">点击更换头像</view>
		</view>
		<view class="edit-content">
			<view class="edit-item">
				<label class="item-label">名字</label>
				<view class="item-content" @click="editName">
					<text class="item-value" v-if="profileInfo.name">{{profileInfo.name}}</text>
					<text class="item-place-hold" v-else>昵称</text>
					<uni-icons type="right" size="12" class="arrow-right"></uni-icons>
				</view>
			</view>
			<view class="edit-item">
				<label class="item-label">简介</label>
				<view class="item-content" @click="editIntro">
					<text class="item-value" v-if="profileInfo.introduce">{{profileInfo.introduce}}</text>
					<text class="item-place-hold" v-else>介绍一下自己</text>
					<uni-icons type="right" size="12" class="arrow-right"></uni-icons>
				</view>
			</view>
			<view class="edit-item">
				<label class="item-label">性别</label>
				<view class="item-content" @click="editGender">
					<text class="item-value" v-if="profileInfo.gender === 1">男</text>
					<text class="item-value" v-else-if="profileInfo.gender === 2">女</text>
					<text class="item-value" v-else-if="profileInfo.gender === 0">不展示</text>
					<text class="item-place-hold" v-else>--</text>
					<uni-icons type="right" size="12" class="arrow-right"></uni-icons>
				</view>
				<uni-popup ref="gender" type="bottom" border-top-left-radius="30rpx" border-top-right-radius="30rpx">
					<view class="gender-item" @click="selectGender(1)">男</view>
					<view class="gender-item" @click="selectGender(2)">女</view>
					<view class="gender-item" @click="selectGender(0)">不展示</view>
					<view class="gender-item cancel-item" @click="selectGender(3)">取消</view>
				</uni-popup>
			</view>
			<view class="edit-item">
				<label class="item-label">生日</label>
				<view class="item-content">
					<view class="example-body data-select" v-if="profileInfo.birthday">
						<uni-datetime-picker type="date" v-model="profileInfo.birthday" @change="editBirth">{{profileInfo.birthday}}</uni-datetime-picker>
					</view>
					<text class="item-place-hold" v-else>出生年月</text>
					<uni-icons type="right" size="12" class="arrow-right"></uni-icons>
				</view>
			</view>
			<view class="edit-item">
				<label class="item-label">所在地</label>
				<view class="item-content">
					<view>
					    <uni-data-picker placeholder="请选择地址" popup-title="请选择城市" collection="opendb-city-china" 
							field="code as value, name as text" orderby="value asc" :step-searh="true" self-field="code" 
							 parent-field="parent_code" v-model="profileInfo.location" :clear-icon="false" @change="updateLocation">
						</uni-data-picker>
					</view>
					<uni-icons type="right" size="12" class="arrow-right"></uni-icons>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref, reactive, getCurrentInstance} from 'vue'
	import avatar from '@/components/avatar/avatar.vue';
	// import { onLoad } from '@dcloudio/uni-app'
	const _this = getCurrentInstance().ctx;
	
	const avatarUrl = ref<string>();
	const size = ref<string>();
	const isEditable = ref<boolean>();
	const bgImage = ref<string>();
	
	avatarUrl.value = "https://pica.zhimg.com/v2-ac4a5884ba09c3aa6b0213528fe008da_r.jpg";
	size.value = "180";
	isEditable.value = true;
	bgImage.value = 'https://ts1.cn.mm.bing.net/th/id/R-C.ddbe60882fb529b0252f393577ead646?rik=%2f7YBpw2SPJ9k0Q&riu=http%3a%2f%2fres.dps.cn%2fres%2fbgimg%2f16514%2f28.jpg&ehk=JVlxG8xOcZ7i%2boVLKEEBdrrRYjTNi%2fMaQKcqdHSRh0I%3d&risl=&pid=ImgRaw&r=0';
	
	interface profile {
		name: string
		introduce: string
		gender: number
		birthday: string
		location: string
	}
	const profileInfo = reactive<profile>({
		name: '',
		introduce: '',
		gender: 0,
		birthday: '',
		location: ''
	})
	profileInfo.name = '巷子里的猫33';
	profileInfo.introduce = '这是测试数据';
	profileInfo.birthday = '1998-01-01';
	profileInfo.location = '610113';
	
	const changeAvatar = () =>{
		uni.chooseMedia({
			count: 6, //默认9
			mediaType: ['image'],
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album','camera'],   //album 从相册选图，camera 使用相机
			success: function (res) {
				console.log(JSON.stringify(res.tempFiles[0])); //拍照图片的路径
				avatarUrl.value = res.tempFiles[0].tempFilePath;
				//call api
			}
		});
	}
	const editName = () => {
		uni.navigateTo({
			url: './editName/editName?name=' + profileInfo.name,
			events:{
				getUpdateName: function(data: object){
					profileInfo.name = data?.name;
				}
			}
		})
	};
	const editIntro = () => {
		uni.navigateTo({
			url: './editIntroduce/editIntroduce?introduce=' + profileInfo.introduce,
			events:{
				getUpdateIntro: function(data: object){
					profileInfo.introduce = data?.introduce;
				}
			}
		})
	};
	const editGender = () => {
		_this.$refs.gender.open();
	};
	const selectGender = (gender: number) => {
		if (gender < 3) {
			profileInfo.gender = gender;
		}
		//call api
		_this.$refs.gender.close();
	};
	const editBirth = () => {
		//call api 
		const date = profileInfo.birthday;
		console.log(date);
	};
	const updateLocation = () => {
		//call api
		const location = profileInfo.location;
		console.log(location);
	};
	const changeBgImage = () => {
		uni.chooseMedia({
			count: 6, //默认9
			mediaType: ['image'],
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album'],   //album 从相册选图，camera 使用相机
			success (res) {
				console.log(JSON.stringify(res.tempFiles[0])); //拍照图片的路径
				bgImage.value = res.tempFiles[0].tempFilePath;
				//call api
			}
		});
	};
</script>s

<style lang="scss">
	.bg-layout {
		position: relative;
		height: 300rpx;
		image {
			width: 100%;
			background-repeat: no-repeat;
		}
		.change-bg {
			position: absolute;
			display: flex;
			align-items: center;
			color: #ffffff;
			background-color: #505050;
			opacity: 0.3;
			padding: 3rpx 14rpx;
			border-radius: 30rpx;
			right: 30rpx;
			top: 20rpx;
			.camera-icon {
				float: left;
				margin-right: 8rpx;
			}
			.change-text {
				font-size: 20rpx;
				letter-spacing: 2rpx;
			}
		}
	}
	.avatar {
		display: inline-block;
		vertical-align: middle;
	}
	.change-avatar-info {
		margin-top: 10rpx;
		font-size: 28rpx;
		color: #315eff;
	}
	.edit-content-layout {
		padding: 0 30rpx;
		position: relative;
		top: -30rpx;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
		background-color: #ffffff;
	}
	.edit-content {
		margin-top: 20rpx;
		font-size: 26rpx;
		color: #5d5d5d;
		.edit-item {
			margin-bottom: 50rpx;
		}
		.item-label {
			width: 110rpx;
			float: left;
		}
		.item-content {
			margin-left: 90rpx;
			position: relative;
			.input-value-border {
				border: 0;
			}
			.input-value {
				font-size: 26rpx;
				height: auto;
				padding-left: 0;
			}
			.arrow-area {
				display: none;
			}
		}
		.item-place-hold {
			color: #9d9d9d;
		}
		.item-value {
			color: #000000;
		}
		.arrow-right {
			position: absolute;
			top:0;
			right: 0;
		}
		.data-select {
			display: inline-block;
			width: 96%;
			z-index: 10;
			position: relative;
		}
	}
	.avatar-layout {
		text-align: center;
		position: relative;
		top: -90rpx;
		.avatar-img {
			width: 200rpx;
			height: 200rpx;
			border-radius: 50%;
		}
	}
	.gender-item {
		&:first-child {
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
		}
		background-color: #ffffff;
		padding: 20rpx 0;
		border-bottom: #cfcfcf solid 1rpx;
		text-align: center;
		&.cancel-item {
			border-bottom-width: 0;
			border-top: #cfcfcf solid 10rpx;
		}
	}
</style>	
