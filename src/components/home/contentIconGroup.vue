<template>
	<view class="icon-button-container">
		<image :src="props.avatorUrl"
			 class="avater img" 
			 @click.stop="emit('clickIcon',OperationType.Avatar, props.userId)"></image>
			 <text class="right-follow"
			 @click.stop="emit('clickIcon',OperationType.Focus, props.userId)">
		 +
		 </text>
		 <view class="icon-container">
			   <uni-icons
				   type="heart-filled"
				   size="50"
				   color="#fff"
				   @click.stop="emit('clickIcon',OperationType.Like, props.id)"
			   />
			   <text class="icon-text">{{props.likeCount}}</text>
		 </view>
		 <view class="icon-container">
		 	   <uni-icons
				   type="chatbubble-filled"
				   size="50"
				   color="#fff"
				   @click.stop="emit('clickIcon',OperationType.Comment, props.id)"
			   />
		 	   <text class="icon-text">{{props.commentCount}}</text>
		 </view>
		 <view class="icon-container">
		 	   <uni-icons
				   type="star-filled"
				   size="50"
				   color="#fff"
				   @click.stop="emit('clickIcon',OperationType.Favorite, props.id)"
			   />
		 	   <text class="icon-text">{{props.favoriteCount}}</text>
		 </view>
		 <view class="icon-container">
		 	   <uni-icons
				   type="redo-filled"
				   size="50"
				   color="#fff"
				   @click.stop="emit('clickIcon',OperationType.Share, props.id)"
			   />
		 	   <text class="icon-text">分享</text>
		 </view>
	</view>
  

</template>

<script setup lang="ts">
	import { OperationType } from '../../common/emun'
	//import { IContentInfo } from '../../common/interface'
	//props不能使用直接导入的类型
	//type Props = Pick<IContentInfo, 'userId' | 'id' | 'avatorUrl' | 'likeCount' | 'commentCount' | 'favoriteCount'>
	interface Props {
		id: string
		userId: string
		avatorUrl?: string
		likeCount: number
		commentCount: number
		favoriteCount: number
	}
	const emit = defineEmits<{
	  (e: 'clickIcon', type: OperationType, id: string): void
	}>()
	
	const props = withDefaults(defineProps<Props>(), {
		avatorUrl: 'https://avatars.githubusercontent.com/u/37901036?s=40&v=4',
		likeCount: 0,
		commentCount: 0,
		favoriteCount: 0,
		
	})
</script>
<style lang="scss">
	.icon-button-container{
		margin-bottom: 50upx;
		.avater {
			border-radius: 50%;
			border-width: 2px;
			border-style: solid;
			border-color: #ffffff;
		}
		.img {
			height: 90upx;
			width: 90upx;
		}
		.right-follow {
			position: absolute;
			top: 75upx;
			left: 28upx;
			color: #ffffff;
			font-size: 16px;
			width: 34upx;
			height: 34upx;
			background-color: #f12f5b;
			text-align: center;
			line-height: 34upx;
			border-radius: 17upx;
		}
		.icon-container {
			position: relative;
			top: 40upx;
		}
		.icon-text {
			display: block;
			color: #ffffff;
			font-size: 14px;
			text-align: center;
			margin-bottom: 20upx;
		}
	}
</style>