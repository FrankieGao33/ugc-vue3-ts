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

	<view>
		<button @click="deleteOrderWithId()">delete the Order by Id</button>
	</view>
	<view>
		<button @click="deleteWithParams()">delete the Order with params</button>
	</view>
	<view>
		<button @click="updateOrderInfo()">Update the Order Info</button>
	</view>
	
	<view>
		<button @click="test()">test for vuex</button>
	</view>

  </view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	import Card from '@/components/card/card.vue'
	import Countdown from '@/components/countdown/countdown.vue'
	import orderServer from '../../api/orderList'
	
	// import Card from '../../wxcomponents/card/card.vue'
	// import Countdown from '../../wxcomponents/countdown/countdown.vue'
	// import {getOrderList, addOrder, getOneOrder} from '../../api/orderList'
	import {store, key} from '../../store'

	
	const title = ref('Hello World 123456789')
	const hostName = ref('Host Server');
	const orderInfo = ref<string>();
	async function getOrderId() {
		await orderServer.getOneOrder("91949ee16465ee91000468d831bcfb00").then((resp)=> {
			let result =  resp.result;
			console.log(result);
			orderInfo.value = result?.data[0].address;
		}, (error)=> {
		  //error msg 
		});
	}
	async function getOrders() {
		await orderServer.getOrderList().then((resp)=> {
			let result = resp.result;
			console.log(result);
		}, (error)=> {
		  //error msg
		});
	}
	async function getAggregate() {
		await orderServer.getAggregateInfo().then((resp)=> {
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
		await orderServer.addOrder(reqData).then((resp)=> {
			let result = resp;
			console.log(result);
		}, (error)=> {
		  //error msg
		});
	}
	async function deleteOrderWithId() {
		await orderServer.deleteOrderById("91949ee16465ed390003ff6613139bcb").then((resp)=> {
			let result =  resp.result;
			console.log(result);
		}, (error)=> {
		  //error msg
		});
	}
	async function deleteWithParams() {
		await orderServer.deleteOrderByParams({address: "中国四川成都市金牛区金府路669号20栋2层1号"}).then((resp)=> {
			let result =  resp.result;
			console.log(result);
		}, (error)=> {
		  //error msg
		});
	}
	async function updateOrderInfo() {
		const searchData: object = {
			"_id":"a208483c6465ee930010e0655fa4003e",
		};
		const updateData: object = {
			data : {
				"address": "中国四川成都市金牛区金府路222号22栋2层2号"
			}
		};
		await orderServer.updateOrder(searchData, updateData).then((resp)=> {
			let result = resp;
			console.log(result);
		}, (error)=> {
		  //error msg
		});
	}
	
	async function test() {
		console.log("test for vuex");
		store.commit('setCount1')
		store.commit('setCount2')
		store.dispatch('setAsyncCount1',"setAsyncCount1")
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
  height: 50rpx;
  width: 50rpx;
  margin-top: 80rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30rpx;
}
button {
	margin-top: 10px;
	margin-bottom: 10px;
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
