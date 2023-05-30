<template>
	<view class="image-item">
		<image :style="{width: `${props.width}rpx`, height: `${props.height}rpx`}" :src="props?.url" mode="aspectFill" lazy-load="true"
			@click="emit('onClick')" />
	</view>
</template>

<script setup lang="ts">
	interface Props {
		url : string;
		width ?: number;
		height ?: number;
	}

	const props = withDefaults(defineProps<Props>(), {
		width: 240,
		height: 300
	});
	const emit = defineEmits(['onClick']);
</script>

<style lang="scss">
	.image-item {
		padding: 5rpx;
	}
</style>