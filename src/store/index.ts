import { createStore } from 'vuex';

export default createStore({
  state: {
    isSidebarExpanded: false, // 侧边栏是否展开
  },
  mutations: {
    toggleSidebar(state) {
      state.isSidebarExpanded = !state.isSidebarExpanded;
    },
  },
  actions: {
  },
  modules: {
  },
});
