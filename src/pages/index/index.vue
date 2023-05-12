<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area" ref="indx">
      <text class="title">{{ title }}</text>
    </view>
	<view class="text-area" >
	  <text class="title">{{ hostName }}</text>
	</view>
	<view>
		<Card></Card>
	</view>
	<view>
		<Countdown></Countdown>
	</view>
	<view>
		<button @click="getOrders()">getOrder</button>
	</view>
	<view>
		<button @click="getAddress()">getAddress</button>
	</view>
	<view>
		<button @click="getProduct()">getProductList</button>
	</view>
	
  </view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import Card from '../../wxcomponents/card/card.vue'
	import Countdown from '../../wxcomponents/countdown/countdown.vue'
	import {getOrderList} from '../../api/orderList'
	import {getAddressList} from '../../api/addressList'
	import {getProductList} from '../../api/productList'
	
	const title = ref('Hello World 123456789')
	async function getOrders() {
		await getOrderList().then((resp)=> {
			let result = resp;
			console.log(result.result);
		}, (error)=> {
		  //error msg
		});
	}
	async function getAddress() {
		await getAddressList().then((resp)=> {
			let result = resp;
			console.log(result.result);
		}, (error)=> {
		  //error msg
		});
	}
	async function getProduct() {
		await getProductList().then((resp)=> {
			let result = resp;
			console.log(result.result);
		}, (error)=> {
		  //error msg
		});
	}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
