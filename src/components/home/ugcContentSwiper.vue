<template>
	<view>
		<swiper-frame :content-list="contentList" :on-swiper-content="props.swiperContent">
			<template #video="videoProps">
				<video-play :url="videoProps.videoInfo.videoUrl" :id="videoProps.videoInfo.id" :ref="videoProps.videoInfo.id"/>
			</template>
			<template #image="imageProps">
				<carousel-image :imageList="imageProps.imageInfo.imageUrls"></carousel-image>
			</template>
			<template #description="descriptionProps">
				<content-description :description="descriptionProps.description" :authorName="descriptionProps.userName"></content-description>
			</template>
			<template #iconGroup="iconGroupProps">
				<contentIconGroup
					:id="iconGroupProps.contentInfo.id"
					:userId="iconGroupProps.contentInfo.userId"
					:likeCount="iconGroupProps.contentInfo.likeCount"
					:commentCount="iconGroupProps.contentInfo.commentCount"
					:favoriteCount="iconGroupProps.contentInfo.favoriteCount"
					:isMine="iconGroupProps.contentInfo.isMine"
					@click-icon="onIconGroupClick"
				/>
			</template>
		</swiper-frame>
	</view>
</template>

<script setup lang="ts">
	import videoPlay from '@/components/home/videoPlay.vue'
	import swiperFrame from '@/components/home/swiperFrame.vue'
	import carouselImage from '@/components/home/carouselImage.vue'
	import contentDescription from '@/components/home/contentDescription.vue'
	import contentIconGroup from '@/components/home/contentIconGroup.vue'
	import { IContentInfo } from '../../common/interface'
	import { OperationType } from '../../common/emun'
	
	interface Props {
		contentList: IContentInfo[],
		iconGroupClick: (type: OperationType, id: string) => void,
		swiperContent: () => void
	}
	const props = withDefaults(defineProps<Props>(), {
		contentList: () => []
	})
	
	function onIconGroupClick(type: OperationType, id: string) {
		props.iconGroupClick(type, id)
	}
	
</script>