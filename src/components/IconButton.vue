<template>
  <div 
    class="icon-button w-full flex flex-col items-center p-2 hover:(cursor-pointer bg-light-500)" 
    @mouseenter="onMouseEnter(data)" 
    @mouseleave="onMouseLeave(data)"
    @click="onClick(data)"
  >
    <i :class="iconClass(data.icon) + selectedClass(selected)" class="m-2" />
    <div class="icon-text text-sm">{{ data.text }}</div>
  </div>
</template>
<script lang="ts" setup>
/* eslint-disable @typescript-eslint/ban-types */
import { inject } from 'vue';
import { ISidebarItem } from './Sidebar.vue';

interface IProps {
  data: ISidebarItem,
  selected?: boolean,
}
defineProps<IProps>();

// 为方便起见，这版实现只支持 FontAwesome v4 图标集
// 可选图标：https://fontawesome.com/v4/icons/
const iconClass = (icon: string) => `fa fa-${icon}`;
const selectedClass = (selected: boolean | undefined) => (selected) ? 'shadow-inner' : '';

// 向 Index.vue 传递鼠标悬浮和选择结果

const hoverItem = inject('hover-item') as Function;

const onMouseEnter = (data: ISidebarItem) => {
  console.log('IconButton.onMouseEnter', data.text);
  if (hoverItem) {
    hoverItem(data);
  }
};

const leaveItem = inject('leave-item') as Function;

const onMouseLeave = (data: ISidebarItem) => {
  console.log('IconButton.onMouseLeave', data.text);
  if (leaveItem) {
    leaveItem(data);
  }
}

const selectItem = inject('select-item') as Function;

const onClick = (data: ISidebarItem) => {
  if (selectItem) {
    selectItem(data);
  }
}

</script>
<style lang="postcss" scoped>
/* Issue: <i> 没法内联使用 windicss，只能用此方式调整样式 */
.fa, .icon-text {
  color: darkgray;
}

.icon-button:hover {
  &>.fa, &>.icon-text {
    color: rgb(10,10,10);
  }
}
</style>