<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
    <div class="github-btn" @click="handleFeedback">欢迎反馈 <img :src="githubUrl" alt="" srcset=""></div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import githubUrl from './assets/icon/github.svg?url';

const handleFeedback = () => {
  window.open('https://github.com/LiJuncongDIKU/skill-stack-ts/issues', "_blank")
}
</script>

<style lang="scss">
@forward './assets/scss/pattern.scss';

.todo {
  @extend .outer-cont;
  margin: 2em;
  position: relative;

  &::after {
    content: 'TODO';
    position: absolute;
    right: 0;
    bottom: 0;
    @extend .light-btn;
  }
}

.github-btn {
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 16px;
  border-radius: 4px;
  bottom: 3em;
  left: 0;
  padding: .3em .5em .3em 2em;
  border: 1px solid white;
  background: linear-gradient(to bottom, silver, silver 20%, white);
  cursor: pointer;
  transform: translateX(-75%);
  transition: .4s;

  >img {
    width: 1.5em;
    margin: 0 0 0 .2em;
  }

  &:hover {
    transform: translateX(-1.5em);
  }
}
</style>