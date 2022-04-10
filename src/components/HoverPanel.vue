<!-- 浮动块 -->
<template>
  <div 
    v-if="status !== 'hidden'" 
    @click="onClick" 
    @mouseenter="onMouseEnter" 
    @mouseleave="onMouseLeave"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

interface IProps {
  waitFor?: number, // 等待多少毫秒后消失
};

const props = withDefaults(defineProps<IProps>(), { waitFor: 1000 });

let timer: ReturnType<typeof setTimeout> = 0;

// 有效状态: 
// 1) hovered: 鼠标停留在图标或者面板上；
// 2) hiding: 正在准备隐藏；
// 3) hidden: 已隐藏，可能是倒计时结束，可能是点击了菜单项；
const status = ref('hovered'); 

const onMouseEnter = () => {
  clearTimeout(timer); // 有可能还有定时器在运行，需要清理。
  status.value = 'hovered';
};

const onMouseLeave = () => {
  // 延迟关闭
  clearTimeout(timer);
  status.value = 'hiding';
  timer = setTimeout(() => status.value = 'hidden', props.waitFor);
};

const onClick = () => {
  clearTimeout(timer);
  status.value = 'hidden'; // 立刻隐藏
}

defineExpose({ onMouseEnter, onMouseLeave });

</script>
