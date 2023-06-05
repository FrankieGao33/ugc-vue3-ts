<template>
	<view class="tabs">
		<scroll-view class="tabs-container" scroll-x="true">
			<view class="tabs-wrapper">
				<template v-for="(item, index) in props.items">
					<view :key="`tab-${index}`" class="tab" :class="{active: curTabIndex === index}" v-if="item.isShow"
						@click="() => onClickTab(item, index)">
						{{item.label}}
					</view>
				</template>
			</view>
		</scroll-view>
		<slot name='content' :list="curContentItems" :tabType="curTab?.value"></slot>
	</view>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import { TabsType } from '../../../common/emun';
	import { ITabOption, IContentInfo } from "../../../common/interface";

	interface Props {
		items : ITabOption[]
	};

	const props = withDefaults(defineProps<Props>(), {
		items: () => []
	});
	let curTabIndex = ref(0);
	let curTab = ref<ITabOption>(null);
	let curContentItems = ref([]);

	const mockListForCollect : IContentInfo[] = [
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
			description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
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
			description: "这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
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
			description: "这是一个视频，网络上的找的视频🫡😝",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
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
			description: "这是一个视频，网络上的找的视频🫡😝",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
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
			description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
		},
		{
			id: '026',
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
			description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
		},
	];
	const mockListForPost : IContentInfo[] = [
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
			description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
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
			description: "这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
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
			description: "这是一个视频，网络上的找的视频🫡😝",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
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
			description: "这是一个视频，网络上的找的视频🫡😝",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
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
			description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
		},
		{
			id: '026',
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
			description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
		},
		{
			id: '027',
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
			description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
		},
		{
			id: '028',
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
			description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
			postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`
		},
	];

	onMounted(() => {
		uni.showToast({
			title: "加载中",
			icon: 'loading'
		});

		setTimeout(() => {
			curContentItems.value = mockListForPost;
			uni.hideToast();
		}, 1000);
	});


	function onClickTab(selectedTab : ITabOption, index : number) {
		console.log("trigger tabs click", selectedTab.value, index);
		// Todo: we need to call the api to get the content by the selected tab value

		curTabIndex.value = index;
		curContentItems.value = (selectedTab.value === TabsType.Collects ? mockListForCollect : mockListForPost);
		curTab.value = selectedTab;
	};
</script>
<style lang="scss">
	.tabs {
		position: relative;
		width: 100%;
		background-color: white;
	}

	.tabs-container {
		box-shadow: 0 6rpx 8rpx 0 rgba(0, 0, 0, 0.12) !important;
	}

	.tabs-wrapper {
		display: flex;
		width: 100%;
		height: 100rpx;
	}

	.tab {
		display: flex;
		flex-direction: column;
		color: grey;
		align-items: center;
		justify-content: center;
		width: 33%;
	}

	.active {
		border-bottom: 2px solid black;
	}

	.tab-content {
		width: 100%;
		height: 100%;
	}
</style>