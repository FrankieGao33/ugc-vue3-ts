<template>
  <login v-if="!isLoggedin && mustLogin" @login="onLogin" />
  <view v-else>
    <swiper-frame
      :content-list="contentList"
      :currentContentId="currentContentId"
      :on-swiper-content="props.swiperContent"
      :show-tab-bar="props.showTabBar"
    >
      <template #usersLine="usersLineProps">
        <users-line
          :content-list="contentList"
          @click-user-icon="onUserIconClick"
        />
      </template>
      <template #video="videoProps">
        <video-play
          :url="videoProps.videoInfo.videoUrl"
          :id="videoProps.videoInfo.id"
          :ref="videoProps.videoInfo.id"
        />
      </template>
      <template #image="imageProps">
        <carousel-image
          :imageList="imageProps.imageInfo.imageUrls"
        ></carousel-image>
      </template>
      <template #description="descriptionProps">
        <content-description
          :description="descriptionProps.description"
          :authorName="descriptionProps.userName"
        ></content-description>
      </template>
      <template #iconGroup="iconGroupProps">
        <contentIconGroup
          :id="iconGroupProps.contentInfo.id"
          :userId="iconGroupProps.contentInfo.userId"
          :likeCount="iconGroupProps.contentInfo.likeCount"
          :commentCount="iconGroupProps.contentInfo.commentCount"
          :favoriteCount="iconGroupProps.contentInfo.favoriteCount"
          :isMine="iconGroupProps.contentInfo.isMine"
          @click-icon="onIconGroupClick"
        />
      </template>
    </swiper-frame>
  </view>
</template>

<script setup lang="ts">
import usersLine from "@/components/home/usersLine.vue";
import videoPlay from "@/components/home/videoPlay.vue";
import swiperFrame from "@/components/home/swiperFrame.vue";
import carouselImage from "@/components/home/carouselImage.vue";
import contentDescription from "@/components/home/contentDescription.vue";
import contentIconGroup from "@/components/home/contentIconGroup.vue";
import { IContentInfo } from "../../common/interface";
import { OperationType } from "../../common/emun";
import { ref } from "vue";

interface Props {
  contentList: IContentInfo[];
  iconGroupClick: (type: OperationType, id: string) => void;
  swiperContent: () => void;
  mustLogin: boolean;
  currentContentId?: string;
  showTabBar?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  contentList: () => [],
  mustLogin: true,
  showTabBar: true,
});

const isLoggedin = ref<boolean>(false);

function onIconGroupClick(type: OperationType, id: string) {
  props.iconGroupClick(type, id);
}

const onLogin = (value: boolean) => {
  console.log("result of login:", value);
  isLoggedin.value = value;
};
const onUserIconClick = (id: string) => {
  console.log("click icon of user line:", id);
};
</script>
