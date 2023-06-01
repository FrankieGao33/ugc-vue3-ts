<template>
		<video
			:src="url"
			preload
			show-play-btn="true"
			:controls="false"
			loop="true"
			:id="`video_${id}`"
			objectFit="contain"
			:enable-progress-gesture="false"
			@click="clickVideo"
			ref="video_url"
			play-btn-position="center"
			class="video">
		</video>
		<cover-image
		class="play" v-if="isShowPlayButton" 
		@tap="videoPlay"
		src="/static/play_1.png"></cover-image>
</template>

<script setup lang="ts">
	import { ref, ComponentInternalInstance, getCurrentInstance} from 'vue'
	interface Props {
		id: string,
		url: string
	}
	const props =defineProps<Props>()
	const isShowPlayButton = ref<boolean>(false)
	const instance = getCurrentInstance() as ComponentInternalInstance
	defineExpose({
	  isShowPlayButton
	})
	function clickVideo(){
		videoPlay()
	}
	function videoPlay(){
		if (isShowPlayButton.value) {
			console.log('播放视频');
			const videoCtx = uni.createVideoContext(`video_${props.id}`, instance.proxy);
			videoCtx.play();
			isShowPlayButton.value = false;
		} else {
			console.log('暂停视频');
			const videoCtx = uni.createVideoContext(`video_${props.id}`, instance.proxy);
			videoCtx.pause();
			isShowPlayButton.value = true;
		}
	}
</script>

<style lang="scss">
	.video {
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.play{
		position: absolute;
		width: 20vw;
		height: 20vw;
		left: 40vw;
		top: 40vh;
		opacity: 0.5;
	}
</style>