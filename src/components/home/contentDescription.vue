<template>
  <text class="author">{{authorName}}</text>
  <text class="description">{{description}}</text>
</template>
<script setup lang="ts">
	const props = withDefaults(defineProps<{authorName: string, description: string}>(), {
		authorName: '',
		description: ''
	})
</script>
<style lang="scss">
	$fontSize: 32upx;
	.author{
		font-size: $fontSize;
	}
	.description {
		font-size: $fontSize;
		margin-top: 10upx;
		word-break: break-word;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>