<template>
<div class="w-full rounded-sm min-w-60 p-3 text-sm block hover:(cursor-pointer bg-light-200)" @click="onClicked(data)">
  <i v-if="data.icon" :class="iconClass(data.icon)"></i>
  {{ data.text }}
</div>
</template>
<script lang="ts" setup>
import { ISidebarItem } from './Sidebar.vue';

// 本控件忽略包含的子菜单（原则上不应该有）

interface IProps {
  data: ISidebarItem,
  // showIcon: boolean, // 是否在文字左侧显示图标
}
defineProps<IProps>();

const onClicked = ((data: ISidebarItem) => {
  console.log(`Menu item ${data.text} clicked ...`);
});

const iconClass = (icon: string) => `fa fa-${icon}`;

</script>