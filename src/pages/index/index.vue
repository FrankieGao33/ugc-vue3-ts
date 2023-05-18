<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area" ref="indx">
      <text class="title">{{ title }}</text>
    </view>
	<view class="text-area" >
	  <text class="title">{{ hostName }}</text>
	</view>
	<view class="text-area">
		<text class="title">{{orderInfo}}</text>
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
		<button @click="getOrderId()">get One order</button>
	</view>
	<view>
		<button @click="getAggregate()">get Aggregate Info</button>
	</view>
	<view>
		<button @click="addOrders()">Add the Order</button>
	</view>
	
  </view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import Card from '@/components/card/card.vue'
	import Countdown from '@/components/countdown/countdown.vue'
	import {getOrderList, addOrder, getOneOrder, getAggregateInfo} from '../../api/orderList'
	
	
	const title = ref('Hello World 123456789')
	const hostName = ref('Host Server');
	const orderInfo = ref<string>();
	async function getOrderId() {
		await getOneOrder("4f9a71986465e0ac0018963919a391ff").then((resp)=> {
			let result =  resp.result;
			console.log(result);
			orderInfo.value = result?.data?.address;
		}, (error)=> {
		  //error msg
		});
	}
	async function getOrders() {
		await getOrderList().then((resp)=> {
			let result = resp.result;
			console.log(result);
		}, (error)=> {
		  //error msg
		});
	}
	async function getAggregate() {
		await getAggregateInfo().then((resp)=> {
			let result = resp.result;
			console.log(result);
		}, (error)=> {
		  //error msg
		});
	}
	async function addOrders() {
		const reqData: object = {
			"book":"science 1",
			"price":20,
			"quantity":1, 
			"address": "中国四川成都市金牛区金府路669号20栋2层1号",
		};
		await addOrder(reqData).then((resp)=> {
			let result = resp;
			console.log(result);
		}, (error)=> {
		  //error msg
		});
	}
</script>

// 给style标签添加lang="scss"属性就可以使用sass
<style lang="scss">
@import '../../common/style/mixin.scss';
$myColor: red;
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
  // display: flex;
  // justify-content: center;
  @include flex-direction-align(); //在scss中使用@mixin定义方法，用@include调用
  .title {
    font-size: 36rpx;
    color: $myColor; // 可以在当前文件中声明scss变量并使用
    opacity: $uni-opacity-disabled; // 可以直接使用uni.scss中的已经声明的全局scss变量
  }
}


</style>
