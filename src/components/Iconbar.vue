<template>
<div class="flex flex-col justify-between h-full shadow-sm z-50 bg-light-200">
  <div v-if="data.header">
    <IconButton :data="data.header" />
    {{ selectedItem?.text }}
  </div>
  <div class="flex flex-col">
    <!-- 只有此区域图标会有选中状态 -->
    <IconButton v-for="(item, i) in data.items" :key="i" :selected="isSelected(selectedItem, item)" :data="item" />
  </div>
  <div v-if="data.footer" class="flex flex-col">
    <IconButton v-for="(item, i) in data.footer" :key="i" :data="item" />
  </div>
</div>
</template>
<script lang="ts" setup>
import { ISidebar, ISidebarItem } from './Sidebar.vue';
import IconButton from './IconButton.vue';

interface IProps {
  data: ISidebar,
  selectedItem?: ISidebarItem,
}

defineProps<IProps>();

const isSelected = (selectedItem: ISidebarItem | undefined, currentItem: ISidebarItem) => {
  if (!selectedItem) {
    return false;
  }
  // 使用简易方法比较两个对象
  const json1 = JSON.stringify(selectedItem.link);
  const json2 = JSON.stringify(currentItem.link);
  // console.log('isSelected', json1 === json2, json1, json2);
  return json1 === json2;
}

</script>