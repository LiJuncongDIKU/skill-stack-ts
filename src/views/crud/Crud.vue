<template>
  <div class="curd-wrap">
    <router-link to="/workbench/crud/table">表格查询</router-link>
    <router-link to="/workbench/crud/form">表单编辑</router-link>
    <router-view class="sub-view"></router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@use '../../assets/scss/global.scss' as *;
.sub-view {
  @extend .typical-box;
}
.curd-wrap {
  padding: 16px;
  box-sizing: border-box;
  overflow: auto;
}
</style>