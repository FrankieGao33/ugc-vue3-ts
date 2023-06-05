<template>
		<view class="avatar">
			<image class="avatar-image" :src="avatorUrl"></image>
			<view v-if="isEditable" class="cover-image" @click="onChangeAvatar">
				<uni-icons class="camera" color="#fff" type="camera-filled" size="40"></uni-icons>
			</view>
		</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	
	const defaultAvatar = "../../static/default-avatar.png";

	interface Props {
		size: string,
		url: string,
		isEditable: boolean
	}

	const emit = defineEmits(['changeAvatar'])
	
	const props = withDefaults(defineProps<Props>(), {
		size: "120",
		isEditable: false
	});

	const avatorUrl = ref<string>();
	const size = ref<string>();
	const isEditable = ref<boolean>();

	avatorUrl.value = props.url || defaultAvatar;
	size.value = props.size + "rpx";
	isEditable.value = props.isEditable;
	
	
	function onChangeAvatar() {
		emit("changeAvatar")
	}

</script>

<style lang="scss">
	.avatar {
		position: relative;
		
		.avatar-image, .cover-image {
			width: v-bind("size");
			height: v-bind("size");
			border: 6rpx solid #fff;
			
			border-radius: 50%;
		}
		
		.cover-image {
			position: absolute;
			left: 0;
			top: 0;
			text-align: center;
			background-color: rgba(0, 0, 0, 0.6);
			color: $uni-text-color-inverse;
			
			.camera {
				display: inline-block;
				margin-top: 54rpx;
			}
		}
		
	}
</style>