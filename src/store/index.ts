import { createStore } from 'vuex';
import { loadSidebarStatus, saveSidebarStatus } from '@/utils/persistence';

export default createStore({
  state: {
    isSidebarExpanded: loadSidebarStatus(), // 侧边栏是否展开
  },
  mutations: {
    toggleSidebar(state) {
      state.isSidebarExpanded = !state.isSidebarExpanded;
      saveSidebarStatus(state.isSidebarExpanded);
    },
  },
  actions: {
  },
  modules: {
  },
});
