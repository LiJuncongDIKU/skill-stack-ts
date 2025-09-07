<template>
  <div class="bench-wrap">
    <div class="chapter">
      <div class="title">我的章节</div>
      <Menu></Menu>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu.vue'

</script>

<style lang="scss" scoped>
@use '../../assets/scss/variable.scss' as vars;
@use '../../assets/scss/pattern.scss' as pattern;

.bench-wrap {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;

  .chapter {
    width: 200px;
    background: vars.$color-vue-deep;
    border-right: 1px solid vars.$color-vue-light;

    .title {
      color: #fff;
      font-size: 20px;
      font-weight: normal;
      padding: 10px;
      text-align: center;
      border-bottom: #000 1px solid;
      letter-spacing: 2px;
      background: vars.$color-vue-light;
    }
  }

  .content {
    @extend pattern, .bg-01 !optional;
  }
}
</style>