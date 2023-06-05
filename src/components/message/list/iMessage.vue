<template>
    <view>{{testA}}</div>
    <li v-for="message in messageList" class="message-content">
        <image src="" />
        <div>
            <div>{{ message.title }}</div>
            <div>{{ message.description }}</div>
        </div>
        <image src="" />
    </li>
  <view class="text-area">
    <view class="title">{{ testA }}</view>
  </view>
  <view>
    <uni-icons type="location-filled" size="30"></uni-icons>
  </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
	interface IMessage {
		id: string,
		title: string,
		icon: string,
		description: string;
	}
	
    const testA = ref("This is a mock ListComponents.");
    const props = withDefaults(defineProps<{messageList: IMessage[]}>(), {
        messageList: () => [{
            id: "1",
            title: "互动消息",
            icon: "",
            description: "1人近期访问过你的主页，看看他们是谁"
        }]
    })
</script>

<style>
  .message-content {
    display: flex;
    justify-content: space-around;
    height: 50px;
    border-bottom: 1px solid gray;
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