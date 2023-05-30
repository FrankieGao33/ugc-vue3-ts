<template>
	<view v-if="props.type === TabsType.Posts" class="panel-without-data">
		<uni-icons type="image-filled" size="50" color="#bcbcbc" />
		<text>发一张库存照片</text>
		<button>打开相册</button>
	</view>
	<view v-if="props.type === TabsType.Collects" class="panel-without-data">
		<uni-icons type="star-filled" size="50" color="#bcbcbc" />
		<text>暂无清单</text>
	</view>
	<view v-if="props.type === TabsType.Likes" class="panel-without-data">
		<text>暂无内容</text>
		<text class="sub-title"> 当前列表仅自己可见</text>
	</view>
	<view v-if="props.type === TabsType.Audit" class="panel-without-data">
		<text>暂无可审核清单</text>
		<text class="sub-title"> 当前列表仅管理员可见</text>
	</view>
	<view v-if="props.type === TabsType.Reviewed" class="panel-without-data">
		<text>暂无已审核清单</text>
		<text class="sub-title"> 当前列表仅管理员可见</text>
	</view>
</template>

<script setup lang="ts">
	import { TabsType } from '../../../common/emun';
	const props = defineProps<{ type : TabsType }>();
</script>

<style lang="scss">
	.panel-without-data {
		display: flex;
		color: black;
		font-size: 32rpx;
		font-weight: bold;
		justify-content: center;
		flex-direction: column;
		align-items: center;

		text {
			margin-top: 20rpx;
		}

		.sub-title {
			color: grey;
			font-weight: 300;
			font-size: 28rpx;
		}

		button {
			width: 250rpx;
			margin-top: 30rpx;
		}
	}
</style>