<template>
  <div class="shade">
    <div class="bg-white bg-opacity-80 w-2/3 h-100vh overflow-y-auto p-3">
      <div v-for="(item, i) in data.items" :key="i" class="block rounded-md w-full">
        <div class="menu-group-header flex items-center p-3 my-1 space-x-2 text-sm bg-light-200 bg-opacity-20 border-gray-300">
          <i class="menu-group-icon" :class="iconClass(item.icon)" />
          <div class="menu-group-text">{{ item.text }}</div>
        </div>
        <Menu :data="item" class="w-full" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ISidebar } from './Sidebar.vue';
import Menu from './Menu.vue';

interface IProps {
  data: ISidebar,
};

defineProps<IProps>();

const iconClass = (icon: string) => `fa fa-${icon} fa-sm`;

</script>
<style lang="postcss" scoped>
.menu-group-header {
  &>.menu-group-icon, &>.menu-group-text {
    color: darkgray;
  }
}
</style>