<template>
	<view>
		
	</view>
</template>

<script setup lang="ts">
	import {onShow} from '@dcloudio/uni-app'
	
	onShow(()=>{
		uni.showActionSheet({
			itemList:['拍摄','从相册选择']
		})
	})
</script>

<style lang="scss">

</style>
