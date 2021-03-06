# vue-sidebar 

用 Vue 3 实现一个侧边栏组件。

## 基本功能：

侧边栏共有如下几种状态和操作：

1. 宽屏下正常收起状态（缺省状态）；

   1.1 鼠标悬浮到有子菜单的图标上时出现悬浮二级菜单，点击二级菜单项后，二级菜单消失；

   1.2 点击后可保持展开状态，是一个全局状态，切换页面不影响展开状态。因此如果在页面1处展开，切换到页面2时如果是对应的二级菜单，那么这个二级菜单也应处于展开状态；

2. 宽屏下正常展开状态；

   2.1 切换页面时自动更新侧边栏高亮项目；

   2.2 在展开后，可以在任一可见二级菜单的页面点击收起，更新全局状态会收起状态；

3. 窄屏下自动隐藏整个侧边栏（包括导航列表），只有一个悬浮图标可点击；

   3.1 点击可弹出浮动侧边栏（合并为多级菜单，缺省展开 2 级），其余空间用半透明遮罩覆盖；

   3.2 点击任一位置可隐藏；

## 技术栈：

* Vue3 + TypeScript + Vuex + Vite
* WindiCSS

借鉴 VuePress 的数据驱动界面的设计模式，以尽可能减少依赖为原则最大化代码的普适性。

* 组件实现： [./src/components/Sidebar.vue](./src/components/Sidebar.vue)
* 示例代码： [./src/views/HomeView.vue](./src/views/HomeView.vue)

## 项目构建和启动

```
yarn
yarn serve
```

生产环境：

```
yarn build
```

代码规范检查：

```
yarn lint
```

## 已知问题

* 当前已经持久化存储展开状态，但是因为选中项是个临时变量，并未根据当前路由自动推导，因此在刷新页面后会丢失选中状态，导致展开菜单无法正常呈现。

  解决方法是实现上述功能 2.1 切换页面时自动更新侧边栏高亮项目；
  