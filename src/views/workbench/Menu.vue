<template>
  <div>
    <div v-for="item in list" :key="item.title" @click="handleRoute(item)"
      :class="{ 'link-item': true, 'active': new RegExp(item.path).test(activePath) }">
      <span class="menu-title-text">{{ item.title }}</span>
      <template v-if="item.labelUrl || item.labelContent">
        <LogoBadge :icon="item.labelUrl">{{ item.labelContent }}</LogoBadge>
      </template>
      <img class="image-wrap" :src="devUrl" v-show="item.isDev" title="开发中...">
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { router } from '../../router/index';
import devUrl from '../../assets/icon/dev.svg?url'
import LogoBadge from '../../components/common/LogoBadge.vue'
import copilotIcon from '../../assets/icon/copilot.svg?url'

const list = reactive([
  {
    title: '关于工程化',
    path: '/workbench/about'
  },
  {
    title: '经典CRUD风格',
    path: '/workbench/crud/form'
  },
  {
    title: '简单优化',
    path: '/workbench/firstScreen',
  },
  {
    title: '可视化基础-开发中...',
    path: '/workbench/viewKnowledge'
  },
  {
    title: 'GIS基本概念-开发中...',
    path: '/workbench/gisBase',
    // isDev: true,
  },
  {
    title: '我们的世界',
    path: '/workbench/our-world',
    labelUrl: copilotIcon,
    labelContent: 'AI辅助生成（copilot-free）'
  },
  {
    title: '未完待续...',
    path: '/workbench/more',
    isDev: true,
  }
]);

function handleRoute(item: any) {
  if (item.isDev) {
    return;
  }
  router.push(item.path);
}

const activePath = computed(() => {
  return router.currentRoute.value.path;
});
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variable.scss' as vars;

.link-item {
  padding: 10px;
  text-align: center;
  cursor: pointer;
  color: #ccc;
  border-bottom: #333 1px solid;
  border-right: transparent 5px solid;
  position: relative;

  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 8px 10px;
  justify-content: center;

  &.active {
    // font-weight: bold;
    color: white;
    text-shadow: 0 0 2px white;
    // border-right: vars.$color-vue-light 5px solid;

    &::after {
      content: ' ';
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      right: 0;

      width: 0;
      height: 0;
      border: 1em solid transparent;
      border-left-color: vars.$color-vue-light;
      transform: scale(80%, 50%);
      overflow: hidden;
    }
  }
}

.image-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: .4em;
  width: 1.3em;
}

.logo-badge{ margin-left: .25rem }
</style>