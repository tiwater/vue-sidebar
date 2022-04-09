<template>
  <div :class="positionClass" class="float-button fixed cursor-pointer block bg-gray-600 hover:(bg-gray-500 shadow-xl) rounded-md shadow-lg p-3 m-1" @click="onClick">
    <i class="fa fa-bars fa-2x" />
  </div>
</template>
<script lang="ts" setup>
import { ISidebar } from './Sidebar.vue';

interface IProps {
  data: ISidebar,
  position: string, // 按钮在屏幕上的停留位置
};

// 有效的停留位置如下：
// left-top ***** top ****** right-top
// *                                 *
// left          screen          right
// *                                 *
// left-bottom * bottom * right bottom

const positionClass = (position: string) => {
  const classes: Map<string, string> = new Map([
    ['left-top', 'w-14 h-14'],
    ['left', 'w-14 h-14'],
    ['left-bottom', 'w-14 h-14'],
  ]);

  return classes.get(position) || '';
};

const onClick = () => {
  console.log('FloatButton clicked');
}

withDefaults(defineProps<IProps>(), {position: 'left-top'});

</script>
<style lang="postcss" scoped>
.fa {
  color: lightgray;
}

.float-button:hover > .fa {
  color: white;
}
</style>