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
		<button @click="addOrders()">Add the Order</button>
	</view>
	
  </view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import Card from '../../wxcomponents/card/card.vue'
	import Countdown from '../../wxcomponents/countdown/countdown.vue'
	import {getOrderList, addOrder} from '../../api/orderList'
	
	const title = ref('Hello World 123456789')
	const hostName = ref('Host Server')
	async function getOrders() {
		await getOrderList("ffe217c66461aa580007892158fadc0f").then((resp)=> {
			let result = resp;
			console.log(result.result);
		}, (error)=> {
		  //error msg
		});
	}
	async function addOrders() {
		const reqData: object = {
			"openId":"oMewN5AncNberyE8o6EMa2azs_Iw",
			"orderNumber":8068658798,
			"PONumber":"Q-2281",
			"deliveryAddress":"中国四川成都市金牛区金府路669号20栋2层1号",
			"discount":"20%",
			"merchDetail":[{"id":"size_jdjzot38wxzmixjkqla6e65ekt10jovm",
			"carrier":"拼多多","deliverCount":0,
			"merchCategory":"控制器",
			"merchName":"御礼创意桌面摆件学生台灯卧室床头灯星空投影灯儿童生日礼物女孩男孩",
			"noDeliverCount":1,
			"orderCount":1,
			"predictDate":"2023-05-12",
			"waybillNumber":679763751944,
			"merchStatus":"待处理"}],
			"orderCompany":"成都恒昕源节能科技有限公司",
			"orderCount":1,
			"orderDate":"2023-05-12",
			"totalPrice":49.88
		}
		await addOrder(reqData).then((resp)=> {
			let result = resp;
			console.log(result.result);
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
