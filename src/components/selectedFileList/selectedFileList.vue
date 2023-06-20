<template>
  <l-drag
    :list="selectedFiles"
    @change="change"
    ref="dragRef"
    after
    :column="4"
    gridHeight="60px"
  >
    <template #grid="{ active, content, oindex }">
      <view class="inner preview" :class="{ active }">
        <uni-icons
          type="minus-filled"
          size="20"
          class="remove-icon"
          color="red"
          @click="onRemove(oindex)"
        ></uni-icons>
        <image
          :src="content.tempFilePath"
          class="selected-file"
          mode="aspectFit"
        />
      </view>
    </template>
    <template #after>
      <view class="inner extra add-file" @click="onAdd">
        <uni-icons type="plusempty" size="30" class="add-icon"></uni-icons>
      </view>
    </template>
  </l-drag>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { DragFileInfo, FileInfo } from "../../common/interface";
import { useAction } from "./useAction";
const dragRef = ref(null);
const addSelectedFiles = (list) => {
  list.forEach((file) => {
    dragRef.value.push(file);
  });
};

const { shoot, select } = useAction(addSelectedFiles);
const selectedFiles = ref<fileInfo[]>([]);

const change = (newList: dragFileInfo[]) => {
  console.log("test1", newList);
  selectedFiles.value = newList.map((file) => file.content);
};

const onRemove = (oindex: number) => {
  console.log("oindex", oindex, dragRef.value);
  if (dragRef.value) {
    // 记得oindex为数组的原始index
    dragRef.value.remove(oindex);
  }
};

const onAdd = () => {
  // dragRef.value.push(Math.round(Math.random() * 1000));
  uni.showActionSheet({
    itemList: ["拍摄", "从相册选择"],
    success: (res) => {
      if (res.tapIndex === 0) {
        shoot();
      } else if (res.tapIndex === 1) {
        select();
      }
    },
  });
};

defineExpose({
  selectedFiles,
});
</script>

<style lang="scss">
.l-drag {
  overflow: initial;
}
.selected-file {
  width: 100%;
  height: 100%;
}

.add-file {
  background-color: #eee;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .add-icon {
  }
}

.preview {
  position: relative;
  height: 60px;
  .remove-icon {
    position: absolute;
    top: -10px;
    left: 0;
    z-index: 10;
  }
}
</style>
