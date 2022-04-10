<!-- 浮动块 -->
<template>
  <div 
    @click="onClick" 
    @mouseenter="onMouseEnter" 
    @mouseleave="onMouseLeave"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>import { inject } from 'vue';


interface IProps {
  waitFor?: number, // 等待多少毫秒后消失
};

const props = withDefaults(defineProps<IProps>(), { waitFor: 1000 });

let timer: ReturnType<typeof setTimeout> = 0;

const onMouseEnter = () => {
  clearTimeout(timer); // 有可能还有定时器在运行，需要清理。
};

// eslint-disable-next-line @typescript-eslint/ban-types
const leavePanel = inject('leave-panel') as Function;

const onMouseLeave = () => {
  // 延时关闭，从而有机会移动鼠标到区块里
  clearTimeout(timer);
  timer = setTimeout(() => leavePanel(), props.waitFor);
};

const onClick = () => {
  clearTimeout(timer);
}

defineExpose({ onMouseEnter, onMouseLeave });

</script>
<style>
/* 动画效果：滑动 + 透明度 */
.slide-fade-enter-active {
  transition: all 0.4s ease-in-out; /* 慢-快-慢 的过程控制 */
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.3, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-260px);
  opacity: 0.2;
}
</style>