<template>
  <view>
    <ugc-content-swiper
      :content-list="list"
      :swiper-content="swiperContent"
      :must-login="false"
      :icon-group-click="onIconGroupClick"
    />
    <share-modal ref="shareModal" @delete="onDelete" />
  </view>
</template>

<script setup lang="ts">
import ugcContentSwiper from "@/components/home/ugcContentSwiper.vue";
import ShareModal from "@/components/share/share.vue";
import { IContentInfo } from "../../common/interface";
import { OperationType } from "../../common/emun";
import { ref } from "vue";
import { onShareAppMessage, onShareTimeline } from "@dcloudio/uni-app";

const mockList: IContentInfo[] = [
  {
    id: "022",
    userId: "1",
    userName: "@🌹🤔我是作者🌹",
    type: "image",
    imageUrls: [
      `https://picsum.photos/seed/${Math.random()}/500/800`,
      `https://picsum.photos/seed/${Math.random()}/500/800`,
      `https://picsum.photos/seed/${Math.random()}/500/800`,
    ],
    likeCount: 12945,
    commentCount: 583,
    favoriteCount: 5294,
    isMine: true,
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
  },
  {
    id: "011",
    userId: "2",
    userName: "@🌹🤔我是作者🌹",
    type: "video",
    likeCount: 5921,
    commentCount: 102,
    favoriteCount: 10,
    videoUrl: "https://www.runoob.com/try/demo_source/movie.mp4",
    isMine: false,
    description:
      "这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频",
  },
  {
    id: "023",
    userId: "3",
    userName: "@🌹🤔我是作者🌹",
    type: "video",
    likeCount: 43,
    commentCount: 1,
    favoriteCount: 0,
    videoUrl: "https://web-assets.dcloud.net.cn/unidoc/zh/wap2appvsnative.mp4",
    isMine: true,
    description: "这是一个视频，网络上的找的视频🫡😝",
  },
  {
    id: "034",
    userId: "4",
    userName: "@🌹🤔我是作者🌹",
    type: "video",
    likeCount: 5932,
    commentCount: 592,
    favoriteCount: 193,
    videoUrl:
      "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    isMine: true,
    description: "这是一个视频，网络上的找的视频🫡😝",
  },
  {
    id: "025",
    userId: "5",
    userName: "@🌹🤔我是作者🌹",
    type: "image",
    likeCount: 942,
    commentCount: 184,
    favoriteCount: 43,
    imageUrls: [
      `https://picsum.photos/seed/${Math.random()}/500/800`,
      `https://picsum.photos/seed/${Math.random()}/500/800`,
      `https://picsum.photos/seed/${Math.random()}/500/800`,
    ],
    isMine: false,
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
  },
];
const list = ref<IContentInfo[]>(mockList);
const shareModal = ref<InstanceType<typeof ShareModal> | null>(null);

onShareAppMessage((options?: Page.ShareAppMessageOption) => {
  if (options.from === "button") {
    return {
      title: "UGC 小程序", //分享的名称
      path: "/pages/home/home", //页面的路径
    };
  }
});

onShareTimeline((options?: any) => {
  if (options === "button") {
    return {
      title: "UGC 小程序",
      type: 0,
      path: "/pages/home/home",
      imageUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    };
  }
});

function onIconGroupClick(type: OperationType, id: string) {
  console.log(type, id);
  if (type === OperationType.More) {
    shareModal.value.open();
  }
}

function onDelete(type: OperationType) {
  console.log(type);
}

function swiperContent() {
  console.log("请求了数据");

  const item: IContentInfo = {
    ...mockList[1],
    id: (Math.random() * 1e16).toFixed(),
    userId: (Math.random() * 1e16).toFixed(),
  };

  list.value.push(item);
}
</script>
<style lang="scss"></style>
