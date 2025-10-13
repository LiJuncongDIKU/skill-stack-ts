<template>
  <div class="crud-wrap">
    <div>
      <router-link v-for="rItem in list" :key="rItem.path" exactActiveClass="crud-btn-active" class="crud-btn"
        :to="rItem.path">
        {{ rItem.label }}
      </router-link>
      <CrudMissions class="intro-wrap" v-show="inTable"></CrudMissions>
    </div>
    <router-view class="sub-view"></router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { router } from '../../router';
import CrudMissions from './tableWidget/CrudMissions.vue';

const list = [
  { label: '引说hook', path: "/workbench/crud/form" },
  { label: 'mock实践', path: "/workbench/crud/table" },
];
const inTable = computed(() => {
  return list[1].path === router.currentRoute.value.fullPath;
})
</script>

<style scoped lang="scss">
@use '../../assets/scss/global.scss' as *;
@use '../../assets/scss/variable.scss' as vars;

.sub-view {
  // @extend .typical-box;
}

.crud-wrap {
  padding: 16px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
}

.crud-btn {
  display: inline-block;
  padding: .5em 1em;
  background-color: vars.$color-vue-deep;
  border: 1px solid vars.$color-vue-light;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  margin: 0 1em 1em 0;

  &:active,
  &:focus {
    color: unset;
  }
}

.crud-btn-active {
  color: #000;
  background-color: vars.$color-vue-light;
}

.intro-wrap {
  color: #fff;
  float: right;
}
</style>