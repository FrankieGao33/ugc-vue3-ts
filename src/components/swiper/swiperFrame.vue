<template>
  <swiper class="swiper" autoplay="false" vertical="true" interval="990000" @change="changeContent">
  		<swiper-item class="swiper-item" v-for="(item,index) in contentList" :key="item.id">
  				<slot v-if="item.type === 'video'" name="video" :videoInfo="item"></slot>
  				<slot v-else name="image" :imageInfo="item"></slot>
  				<view class="content-description">
  					<slot name='description' :description="item.description" :userName="item.userName"></slot>
  				</view>
				<cover-view class="content-icon-group">
					<slot name='iconGroup' :contentInfo="item"></slot>
				</cover-view>
  		</swiper-item>
  </swiper>
</template>
<script setup lang="ts">
	import { ref, onMounted, ComponentInternalInstance, getCurrentInstance} from 'vue'
	import { IContentInfo } from '../../common/interface'
	interface Props {
		contentList: IContentInfo[],
		onSwiperContent: () => void
	}
	const props = withDefaults(defineProps<Props>(), {
		contentList: () => []
	})
	const instance = getCurrentInstance() as ComponentInternalInstance
	const current_index = ref<number>(0)
	onMounted(() => {
		if(props.contentList[current_index.value].type === 'video'){
			const video_id = props.contentList[current_index.value].id
			const videoCtx = uni.createVideoContext(`video_${video_id}`, instance.proxy.$parent.$refs[video_id]);
			videoCtx.play();
		}
	})
	
	function videoPause(){
		const id = props.contentList[current_index.value].id;
		const videoCtx = uni.createVideoContext(`video_${id}`, instance.proxy.$parent.$refs[id]);
		videoCtx.pause();
	}
	function changeContent(e) {
		// 暂停之前的视频
		if(props.contentList[current_index.value].type === 'video'){
			videoPause();
		}
		// 播放现在的视频
		current_index.value = e.detail.current;
		if(props.contentList[current_index.value].type === 'video') {
			const video_id = props.contentList[current_index.value].id
			const videoCtx = uni.createVideoContext(`video_${video_id}`, instance.proxy.$parent.$refs[video_id]);
			videoCtx.play();
		}
				
		// 判断是否第一条
		if( e.detail.current == 0 ){
			console.log('到顶了');
			return false;
		}
		
		// 判断是否最后一条
		if( e.detail.current == props.contentList.length-1 ){
			console.log('到底了');
			return false;
		}
		props.onSwiperContent()
	}
</script>
<style lang="scss">
	.swiper{
		width: 100vw;
		height: 100vh;	
		position: fixed;
		top: 0;
		left: 0;
		.swiper-item {
			background-color: black;
			.content-video {
				position: absolute;
			}
			.content-description{
				position: absolute;
				color: white;
				top: 85%;
				padding: 0 30upx;
			}
			.content-icon-group{
				position: absolute;
				bottom: 150upx;
				right: 30upx;
				text-align: center;
			}
		}
	}
	
</style>