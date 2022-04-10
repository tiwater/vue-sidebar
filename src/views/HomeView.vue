<template>
  <div class="home flex w-full min-h-100vh">
    <div class="left">
      <Sidebar :data="data" />
    </div>
    <div class="right w-full flex bg-light-600 justify-center items-center">
      <div>
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar, { ISidebar } from '@/components/Sidebar.vue'; // @ is an alias to /src

// 可选 Font-Awesome v4 图标：https://fontawesome.com/v4/icons/

const data: ISidebar = {
  items: [
    {
      text: '概览',
      icon: 'dashboard',
      link: { path: '/dashboard' },
    },
    {
      text: '产品',
      icon: 'send',
      link: { path: '/products' },
      children: [
        {
          text: '产品1',
          icon: 'send',
          link: { path: '/products/overview' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
        {
          text: '产品2',
          icon: 'cloud',
          link: { path: '/products/details' },
        },
      ]
    },
    {
      text: '云',
      icon: 'cloud',
      link: { path: '/cloud' },
          children: [
            {
              text: '云里雾里',
              icon: 'home',
              link: { path: '/cloud/status' },
            },
            {
              text: '云',
              icon: 'gear',
              link: { path: '/cloud/detail' },
            },
          ]
    },
    {
      text: '数据',
      icon: 'briefcase',
      link: { path: '/insight' },
    },
    {
      text: '服务',
      icon: 'life-ring',
      link: { path: '/services' },
    },
  ],
  footer: [
    {
      text: '账户',
      icon: 'user',
      link: { path: '/profile' },
    },
    {
      text: '设置',
      icon: 'cog',
      link: { path: '/settings' },
    },
  ],
};
</script>
