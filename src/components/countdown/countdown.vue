<template>
  <view>
    <uni-section title="一般用法" type="line" padding>
      <uni-countdown :day="1" :hour="1" :minute="12" :second="40" />
    </uni-section>
  </view>
</template>

<script setup lang="ts"></script>

<style>
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
