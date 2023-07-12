<template>
  <view id="me-page" class="global-page">
    <userBasicInfo
      id="basicInfo"
      :avatarUrl="avatarUrl"
      :iconSize="iconSize"
      :isEditable="isEditable"
      :userName="userName"
      :backgroundImage="backgroundImage"
    />
    <view>
      <Profile :profileData="profileData"></Profile>
    </view>
    <tabs id="tabs" :items="tabItems">
      <template #content="contentProps">
        <tabsPanel
          id=" tabs-panel"
          class="tabs-panel"
          :height="tabsPanelHeight"
          :list="contentProps.list"
          :tabType="contentProps.tabType"
          :column="3"
          :scrollToLower="contentProps.scrollToLower"
          :isLoading="contentProps.isLoading"
        />
      </template>
    </tabs>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { TabsType } from "../../common/emun";
import { ITabOption } from "../../common/interface";

import tabs from "@/components/me/tabs/tabs.vue";
import tabsPanel from "@/components/me/tabs/tabsPanel.vue";
import userBasicInfo from "@/components/me/userBasicInfo/userBasicInfo.vue";

import Profile from "@/components/me/profile.vue";

const tabItems: ITabOption[] = [
  { label: "作品", value: TabsType.Posts, isShow: true },
  { label: "收藏", value: TabsType.Collects, isShow: true },
  { label: "喜欢", value: TabsType.Likes, isShow: true },
  { label: "待审核", value: TabsType.Audit, isShow: true },
  { label: "已审核", value: TabsType.Reviewed, isShow: true },
];

const avatarUrl = ref<string>("");
const iconSize = ref<string>("");
const isEditable = ref<boolean>();
const userName = ref<string>("");
const backgroundImage = ref<string>("");
let tabsPanelHeight = ref<number>(300);

iconSize.value = "180";
isEditable.value = false;
avatarUrl.value =
  "https://pica.zhimg.com/v2-ac4a5884ba09c3aa6b0213528fe008da_r.jpg";
backgroundImage.value =
  "https://ts1.cn.mm.bing.net/th/id/R-C.ddbe60882fb529b0252f393577ead646?rik=%2f7YBpw2SPJ9k0Q&riu=http%3a%2f%2fres.dps.cn%2fres%2fbgimg%2f16514%2f28.jpg&ehk=JVlxG8xOcZ7i%2boVLKEEBdrrRYjTNi%2fMaQKcqdHSRh0I%3d&risl=&pid=ImgRaw&r=0";
userName.value = "阿斯旺";

const isOther = false;
let profileData: object = {
  praise: 110,
  attention: 36,
  fans: 63,
  gender: "女33",
  location: "陕西 · 渭南",
  completion: "8%",
  isMyself: true,
};
if (isOther) {
  profileData = {
    praise: 220,
    attention: 12,
    fans: 18,
    gender: "男",
    location: "北京 · 朝阳",
    completion: "16%",
    isMyself: false,
    isFollow: false,
  };
}

function calcTabsPanelHeight() {
  const windowHeight = uni.getWindowInfo()?.windowHeight || 0;
  const menuButtonHeight = uni.getMenuButtonBoundingClientRect()?.bottom || 0;

  uni
    .createSelectorQuery()
    .selectAll("#tabs,#tabs-panel")
    .boundingClientRect((dataArr: UniApp.NodeInfo[]) => {
      const tabsHeight =
        dataArr.find((data) => data.id === "tabs")?.height || 0;
      const prevTabsPanelHeight =
        dataArr.find((data) => data.id === "tabs-panel")?.height || 0;
      const tabsContainerHeight = tabsHeight - prevTabsPanelHeight;

      // We still need to minus 40 for the global tabs bar
      tabsPanelHeight.value =
        windowHeight - menuButtonHeight - tabsContainerHeight - 40 - 20;
    })
    .exec();
}

onMounted(() => {
  calcTabsPanelHeight();
});
</script>

<style lang="scss">
.me-page {
  height: 100%;
}

.tabs-panel {
  position: absolute;
  width: 100%;
}
</style>
