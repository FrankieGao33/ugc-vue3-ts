<template>
	<view class="image-item">
		<image class="image" :style="{width: `${props.width}rpx`, height: `${props.height}rpx`}" :src="props?.url"
			mode="aspectFill" lazy-load="true" @click="emit('onClick')">
			<view class="icon-container">
				<view class="left-bottom-icon" v-if="!props.isMine">
					<uni-icons type="heart" size="16" color="azure"></uni-icons>
					<text class="left-bottom-icon-text">{{props.likeCount}}</text>
				</view>
				<view class="right-bottom-icon">
					<view class="right-bottom-icno-container">
						<view v-if="!props.isReviewed">未审核</view>
						<view v-else-if="!props.isPass">未通过</view>
					</view>
				</view>
			</view>
		</image>
	</view>
</template>

<script setup lang="ts">
	interface Props {
		url : string;
		isMine ?: boolean;
		isPass ?: boolean;
		isReviewed ?: boolean;
		width ?: number;
		height ?: number;
		likeCount ?: number;
	}

	const props = withDefaults(defineProps<Props>(), {
		width: 240,
		height: 300
	});
	const emit = defineEmits(['onClick']);
</script>

<style lang="scss">
	$font-color: azure;

	.image-item {
		padding: 5rpx;
	}

	.image {
		position: relative;
	}

	.icon-container {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 30rpx;
		width: 100%;
	}

	.left-bottom-icon {
		display: flex;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 50%;
		height: inherit;
		padding: 5rpx;
		padding-left: 8rpx;
		line-height: 30rpx;
		font-size: 25rpx;
	}

	.left-bottom-icon-text {
		font-size: 25rpx;
		color: $font-color;
		margin-left: 5rpx;
	}

	.right-bottom-icon {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 50%;
		height: inherit;
		color: $font-color;
		font-size: 25rpx;
		text-align: right;
		padding: 5rpx;
	}

	.right-bottom-icno-container {
		display: inline-block;
		border-radius: 15%;
		padding: 0 8rpx;
		background-color: rgba(#5f676c, 0.8);
	}
</style>