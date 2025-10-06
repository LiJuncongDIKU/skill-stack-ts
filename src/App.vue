<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<style lang="scss">
@forward './assets/scss/pattern.scss';

.todo {
  @extend .outer-cont;
  margin: 2em;
  position: relative;
  &::after{
    content: 'TODO';
    position: absolute;
    right: 0;
    bottom: 0;
    @extend .light-btn;
  }
}
</style>