<template>
  <div>
    <div v-for="item in list" :key="item.title" @click="handleRoute(item)"
      :class="{ 'link-item': true, 'active': new RegExp(item.path).test(activePath)  }">
      {{ item.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { router } from '../../router/index';

const list = reactive([
  // {
  //   title: '技术栈',
  //   path: '/workbench/overview'
  // },
  {
    title: '关于工程化',
    path: '/workbench/about'
  },
  {
    title: '经典CRUD风格',
    path: '/workbench/crud'
  }
]);

function handleRoute(item: any) {
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

  &.active {
    font-weight: bold;
    color: white;
    text-shadow: 0 0 2px white;
    // border-right: vars.$color-vue-light 5px solid;
  }
}
</style>