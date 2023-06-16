<template>
  <view class="tabs">
    <scroll-view id="tabs-container" class="tabs-container" scroll-x="true">
      <view class="tabs-wrapper">
        <template v-for="(item, index) in props.items">
          <view
            :key="`tab-${index}`"
            class="tab"
            :class="{ active: curTabIndex === index }"
            v-if="item.isShow"
            @click="() => onClickTab(item, index)"
          >
            {{ item.label }}
          </view>
        </template>
      </view>
    </scroll-view>
    <slot
      name="content"
      :list="curContentItems?.list"
      :tabType="curTab?.value"
      :scrollToLower="onScrollToLower"
      :isLoading="isListLoading"
    ></slot>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { TabsType } from "../../../common/emun";
import { ITabOption, IContentInfo, IListInfo } from "../../../common/interface";
import { store } from "../../../store";
import { GET_CONTENT_LIST, SET_CONTENT_LIST } from "../../../store/actions";

interface Props {
  items: ITabOption[];
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
});
const isListLoading = ref<boolean>(false);

let curTabIndex = ref(0);
let curTab = ref<ITabOption>(null);
let curContentItems = ref<IListInfo>(null);

const mockListForCollect: IContentInfo[] = [
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isMine: false,
    isPass: true,
    isReviewed: true,
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
    description:
      "这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isMine: false,
    isPass: true,
    isReviewed: true,
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
    description: "这是一个视频，网络上的找的视频🫡😝",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isMine: false,
    isPass: true,
    isReviewed: true,
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
    description: "这是一个视频，网络上的找的视频🫡😝",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isMine: false,
    isPass: true,
    isReviewed: true,
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isMine: false,
    isPass: true,
    isReviewed: true,
  },
  {
    id: "026",
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isMine: false,
    isPass: true,
    isReviewed: true,
  },
  {
    id: "027",
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isMine: false,
    isPass: true,
    isReviewed: true,
  },
  {
    id: "028",
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isMine: false,
    isPass: true,
    isReviewed: true,
  },
];
const mockListForPost: IContentInfo[] = [
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isMine: true,
    isReviewed: false,
    isPass: false,
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
    description:
      "这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频，这是一个视频",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isMine: true,
    isReviewed: true,
    isPass: false,
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
    description: "这是一个视频，网络上的找的视频🫡😝",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isReviewed: true,
    isPass: true,
    isMine: true,
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
    description: "这是一个视频，网络上的找的视频🫡😝",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isMine: true,
    isReviewed: false,
    isPass: false,
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isReviewed: true,
    isMine: true,
    isPass: false,
  },
  {
    id: "026",
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isReviewed: false,
    isMine: true,
    isPass: false,
  },
  {
    id: "027",
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isReviewed: true,
    isMine: true,
    isPass: false,
  },
  {
    id: "028",
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isReviewed: true,
    isMine: true,
    isPass: true,
  },
  {
    id: "029",
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isReviewed: true,
    isMine: true,
    isPass: true,
  },
  {
    id: "030",
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isReviewed: true,
    isMine: true,
    isPass: true,
  },
  {
    id: "031",
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isReviewed: true,
    isMine: true,
    isPass: true,
  },
  {
    id: "032",
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
    description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
    postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
    isReviewed: true,
    isMine: true,
    isPass: true,
  },
];

onMounted(async () => {
  console.log(`tabs onMounted is triggered`);
  curTab.value = props.items?.[0] || null;
  const contentList: IListInfo = await store.dispatch(
    GET_CONTENT_LIST,
    curTab.value.value
  );

  if (contentList) {
    curContentItems.value = contentList;
  } else {
    uni.showToast({
      title: "加载中",
      icon: "loading",
    });

    setTimeout(() => {
      curContentItems.value = {
        list: mockListForPost,
        pageNumber: 1,
        isLastPage: false,
      };

      store.dispatch(SET_CONTENT_LIST, {
        key: curTab.value.value,
        listInfo: curContentItems.value,
      });

      uni.hideToast();
    }, 1000);
  }
});

const onClickTab = async (selectedTab: ITabOption, index: number) => {
  console.log("trigger tabs click", selectedTab.value, index);
  // Todo: we need to call the api to get the content by the selected tab value

  const contentListByTab = await store.dispatch(
    GET_CONTENT_LIST,
    selectedTab.value
  );

  curTabIndex.value = index;
  curTab.value = selectedTab;

  if (contentListByTab) {
    curContentItems.value = contentListByTab;
  } else {
    curContentItems.value =
      selectedTab.value === TabsType.Collects
        ? {
            list: mockListForCollect,
            pageNumber: 1,
            isLastPage: true,
          }
        : {
            list: mockListForPost,
            pageNumber: 1,
            isLastPage: false,
          };

    store.dispatch(SET_CONTENT_LIST, {
      key: selectedTab.value,
      listInfo: curContentItems.value,
    });
  }
};

const onScrollToLower = () => {
  if (curContentItems.value.isLastPage || isListLoading.value) return;

  isListLoading.value = true;

  setTimeout(async () => {
    const listFromNextPage = {
      list: [
        {
          id: "033",
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
          description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
          postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
          isReviewed: true,
          isMine: true,
          isPass: true,
        },
        {
          id: "035",
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
          description: "这是一组图片, 一组轮播图片，总共有3张图片😄",
          postUrl: `https://picsum.photos/seed/${Math.random()}/500/800`,
          isReviewed: true,
          isMine: true,
          isPass: true,
        },
      ],
      pageNumber: 2,
      isLastPage: true,
    };

    await store.dispatch(SET_CONTENT_LIST, {
      key: curTab.value.value,
      listInfo: listFromNextPage,
    });

    curContentItems.value = await store.dispatch(
      GET_CONTENT_LIST,
      curTab.value.value
    );

    isListLoading.value = false;
  }, 1000);
};
</script>
<style lang="scss">
.tabs {
  position: relative;
  width: 100%;
  background-color: white;
}

.tabs-container {
  box-shadow: 0 6rpx 8rpx 0 rgba(0, 0, 0, 0.12) !important;
}

.tabs-wrapper {
  display: flex;
  width: 100%;
  height: 100rpx;
}

.tab {
  display: flex;
  flex-direction: column;
  color: grey;
  align-items: center;
  justify-content: center;
  width: 33%;
}

.active {
  border-bottom: 2px solid black;
}

.tab-content {
  width: 100%;
  height: 100%;
}
</style>
