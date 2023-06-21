<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");

  const getWXMenuPosition = uni.getStorageSync("WXMenuButtionPosition");

  if (!getWXMenuPosition) {
    const getWXMenuButtionPosition = uni.getMenuButtonBoundingClientRect();

    uni.setStorageSync("WXMenuButtionPosition", getWXMenuButtionPosition);
  }
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
@import "@/static/iconfont.css";
.global-page {
  height: calc(100vh - 40px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
