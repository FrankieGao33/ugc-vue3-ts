<template>
	<view>
		<swiper-frame :content-list="list" :on-swiper-content="swiperContent">
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
	import { ref } from 'vue'
	const mockList:IContentInfo[] = [
					{
						id: '022',
						userId: '1',
						userName: '@🌹🤔我是作者🌹',
						type: "image",
						imageUrls: [
							`https://picsum.photos/seed/${Math.random()}/500/800`,
							`https://picsum.photos/seed/${Math.random()}/500/800`,
							`https://picsum.photos/seed/${Math.random()}/500/800`
						],
						likeCount: 12945,
						commentCount: 583,
						favoriteCount: 5294,
						description: "这是一组图片, 一组轮播图片，总共有3张图片😄"
					},
					{
						id: '011',
						userId: '2',
						userName: '@🌹🤔我是作者🌹',
						type: "video",
						likeCount: 5921,
						commentCount: 102,
						favoriteCount: 10,
						videoUrl: 'https://www.runoob.com/try/demo_source/movie.mp4',
						description: "这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频"
					},	
					{
						id: '023',
						userId: '3',
						userName: '@🌹🤔我是作者🌹',
						type: "video",
						likeCount: 43,
						commentCount: 1,
						favoriteCount: 0,
						videoUrl: 'https://web-assets.dcloud.net.cn/unidoc/zh/wap2appvsnative.mp4',
						description: "这是一个视频，网络上的找的视频🫡😝"
					},
					{
						id: '034',
						userId: '4',
						userName: '@🌹🤔我是作者🌹',
						type: "video",
						likeCount: 5932,
						commentCount: 592,
						favoriteCount: 193,
						videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
						description: "这是一个视频，网络上的找的视频🫡😝"
					},
					{
						id: '025',
						userId: '5',
						userName: '@🌹🤔我是作者🌹',
						type: "image",
						likeCount: 942,
						commentCount: 184,
						favoriteCount: 43,
						imageUrls: [
							`https://picsum.photos/seed/${Math.random()}/500/800`,
							`https://picsum.photos/seed/${Math.random()}/500/800`,
							`https://picsum.photos/seed/${Math.random()}/500/800`
						],
						description: "这是一组图片, 一组轮播图片，总共有3张图片😄"
					},
		]
	const list = ref<IContentInfo[]>(mockList)
	function onIconGroupClick(type: OperationType, id: string) {
		console.log(type, id)
	}
	function swiperContent() {
		const item:IContentInfo = {...mockList[1], id: (Math.random() * 1e16).toFixed(), userId: (Math.random() * 1e16).toFixed()}
		list.value.push(item)
	}
</script>
<style lang="scss">

</style>
