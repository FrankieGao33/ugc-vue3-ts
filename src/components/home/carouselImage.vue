<template>
	<swiper class="image-carouse" autoplay interval="3000" circular>
		<swiper-item v-for="(item,index) in imageList" :key="index">
			<image class="image-item" mode="aspectFit" lazy-load :src="item"></image>
		</swiper-item>
	</swiper>
</template>

<script setup lang="ts">
	const props = withDefaults(defineProps<{imageList: string[]}>(), {
		imageList: () => []
	})
</script>

<style lang="scss">
.image-carouse{
	width: 100%;
	height: 100%;
	position: absolute;
	.image-item{
		width: 100%;
		height: 100%;
	}
}
</style>