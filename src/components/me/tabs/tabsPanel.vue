<template>
	<view class="tabs-panel">
		<scroll-view class="tabs-panel-container" scroll-y="true">
			<view class="panel-without-data-container" v-if="!props.list.length">
				<panelWithoutData :type="props.tabType" />
			</view>
			<view v-else>
				<uni-grid :showBorder="false" :column="props.column" :highlight="false" :square="false">
					<uni-grid-item v-for="(item, index) in props.list" :index="index" :key="`post-${index}`">
						<imageItem :url="item.postUrl" width="240" height="300" @on-click="onClickImage"></imageItem>
					</uni-grid-item>
				</uni-grid>
			</view>
		</scroll-view>
	</view>
</template>

<script setup lang="ts">
	import { TabsType } from '../../../common/emun';
	import { IContentInfo } from '../../../common/interface';
	import panelWithoutData from '@/components/me/tabs/panelWithoutData.vue';
	import imageItem from '@/components/me/tabs/imageItem.vue';

	interface Props {
		type : TabsType;
		list ?: IContentInfo[];
		column : number;
	};

	const props = withDefaults(defineProps<Props>(), {
		tabType: TabsType.Posts,
		list: () => [],
		column: 3
	});

	function onClickImage() {

		if (props.tabType === TabsType.Audit || props.tabType === TabsType.Reviewed) {
			uni.navigateTo({
				url: "/pages/me/review"
			})
		} else {
			uni.navigateTo({
				url: "/pages/me/browse"
			})
		}

	}
</script>

<style lang="scss">
	.tabs-panel {
		height: 600rpx;
		width: 100%;
		overflow-y: auto;
		min-height: 600rpx;
	}

	.tabs-panel-container {
		height: 100%;
		width: 100%;
	}

	.panel-without-data-container {
		position: absolute;
		width: 100%;
		top: 100rpx;
		text-align: center;
	}

	.uni-grid-item--border {
		border-bottom: none !important;
		border-right: none !important;
	}
</style>