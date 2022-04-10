<template>
<div class="debugbox1">
  <div :class="positionClass" class="float-button cursor-pointer fixed block bg-gray-600 hover:(bg-gray-400 shadow-xl) rounded-md shadow-md p-3 m-1" @click="() => menuVisible = true">
    <i class="fa fa-bars fa-2x" />
  </div>
  <FloatMenu 
    v-if="menuVisible"
    :data="data"
    @click="() => menuVisible = false"
  />
</div>
</template>
<script lang="ts" setup>
import { ISidebar } from './Sidebar.vue';
import FloatMenu from './FloatMenu.vue';
import { ref } from 'vue';

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
    ['left', 'my-auto'],
    ['left-bottom', 'w-14 h-14'],
  ]);

  return classes.get(position) || '';
};

const menuVisible = ref(false);

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