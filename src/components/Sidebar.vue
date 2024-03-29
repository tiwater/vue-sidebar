<template>
<div class="sidebar">
  <!-- 宽屏正常显示 -->
  <div class="w-full flex flex-row justify-between <sm:hidden">
    <div class="iconbar flex flex-col min-h-100vh">
      <ToggleButton :expanded="isExpanded" :toggle="toggle" />
      <Iconbar :data="data" :selected-item="selectedItem" />
    </div>
    <!-- 展示二级菜单的条件： 1）展开状态；2）有选中项；3）选中项带二级菜单项；-->
    <div v-if="isExpanded && selectedItem && selectedItem.children" class="w-68 bg-light-400 p-3">
      <Menu :data="selectedItem" class="menu w-full h-full rounded-md shadow-sm bg-white" />
    </div>
    <!-- 鼠标滑过带二级菜单的图标时显示悬浮菜单 -->
    <Transition name="slide-fade" appear>
      <HoverPanel v-if="hoveredItem && needShowPanel()" ref="hoverPanel" class="fixed z-49 left-12 w-68 h-full p-3">
        <Menu :data="hoveredItem" class="menu w-full h-full rounded-md shadow-sm overflow-y-auto bg-white" />
      </HoverPanel>
    </Transition>
  </div>
  <!-- 窄屏下只显示一个悬浮按钮 -->
  <FloatButton :data="data" position="left" class="sm:hidden" />
</div>
</template>
<script lang="ts" setup>
import { computed, ref, provide } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import { useStore } from 'vuex';
import ToggleButton from './ToggleButton.vue';
import Iconbar from './Iconbar.vue';
import Menu from './Menu.vue';
import FloatButton from './FloatButton.vue';
import HoverPanel from './HoverPanel.vue';

export interface ISidebarItem {
  text: string;
  icon: string;
  link: RouteLocationRaw;
  children?: ISidebarItem[];
}

export interface ISidebar {
  items: ISidebarItem[];
  // 可选内容
  header?: ISidebarItem; // 头部是否需要显示 Logo？
  footer?: ISidebarItem[]; // 底部是否有一组独立的内容

  // 选项
  // isCollapsible: boolean; // 是否可展开
}

interface IProps {
  data: ISidebar,
}

defineProps<IProps>();

// 侧边栏状态管理
// ============

const store = useStore();
// 是否展开，状态存储在 Vuex 中
const isExpanded = computed(() => store.state.isSidebarExpanded);

// 切换收缩
const toggle = () => store.commit('toggleSidebar');

// 选中项
const selectedItem = ref<ISidebarItem>();
const selectItem = (item: ISidebarItem) => {
  selectedItem.value = item;
  if (item.children && !isExpanded.value) {
    toggle(); // 如果点击的导航项带有子菜单，则展开菜单；
  }
};

const hoverPanel = ref<typeof HoverPanel>(); // HoverPanel 组件引用

// 悬停项
const hoveredItem = ref<ISidebarItem>();

// 检查是否满足展示悬浮区块的条款
const needShowPanel = () => {
  if (!hoveredItem.value || !hoveredItem.value.children) {
    return false;
  }
  // 位于当前已选中且展开二级菜单的图标上时不需要展示悬浮区块
  if (isExpanded.value && selectedItem.value &&
      hoveredItem.value.link === selectedItem.value.link) {
    return false;
  }
  return true;
}

const hoverItem = (item: ISidebarItem) => {
  hoveredItem.value = item;
  if (hoverPanel.value) {
    hoverPanel.value.onMouseEnter();
  }
};
const leaveItem = () => {
  if (hoverPanel.value) {
    hoverPanel.value.onMouseLeave();
  }
  // 注意：
  // 因为 HoverPanel 可能持续存在，此处不应立即清理 hoveredItem ，交由 leavePanel 处理。
};

const leavePanel = () => {
  hoveredItem.value = undefined;
}

// 以 provide-inject 机制交由 <IconButton> 自行更新对应热点项
provide('hover-item', hoverItem);
provide('leave-item', leaveItem);
provide('select-item', selectItem);
provide('leave-panel', leavePanel);

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
