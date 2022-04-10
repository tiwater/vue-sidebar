<template>
<div class="w-full">
  <!-- 不包含子项的菜单，当菜单项处理 -->
  <MenuItem v-if="!data.children" :data="data" />
  <!-- 若包含子项，则递归处理 -->
  <div v-else class="menu-group flex flex-col w-full items-center">
    <!-- 如果带标题，则先显示标题 -->
    <div class="menu-group-title w-full border-light-500 text-center text-sm py-2 my-2">{{ data.text }}</div>
    <Menu v-for="(item, index) in data.children" :key="index" :data="item" />
  </div>
</div>
</template>
<script lang="ts" setup>
import { ISidebarItem } from './Sidebar.vue';
import MenuItem from './MenuItem.vue';

interface IProps {
  data: ISidebarItem,
}

defineProps<IProps>();
</script>
<style lang="postcss" scoped>
/* 只显示顶级的菜单组标题为整个菜单的标题 */
.menu > .menu-group > .menu-group-title {
  @apply m-0 p-5 text-base border-t;
}
</style>