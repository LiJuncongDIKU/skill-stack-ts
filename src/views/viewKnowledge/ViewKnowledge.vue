<template>
  <div class="view-knowledge-container">
    <div class="main-content">
      <!-- Tab导航栏 -->
      <div class="tab-navigation">
        <router-link 
          v-for="tab in tabs" 
          :key="tab.id"
          :to="`/workbench/viewKnowledge/${tab.id}`"
          :class="['tab-item', { 'active': $route.path.includes(tab.id) }]"
        >
          {{ tab.name }}
        </router-link>
      </div>
      
      <!-- Tab内容区域 -->
      <div class="content-wrapper">
        <router-view class="tab-content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// Tab配置
const tabs = reactive([
  { id: 'intro', name: '基础介绍' },
  { id: 'svg', name: 'SVG案例' },
  { id: 'canvas', name: 'Canvas案例' },
  { id: 'webgl', name: 'WebGL案例' }
]);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variable.scss" as vars;
.view-knowledge-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #212529;
  overflow: hidden;
  // padding: 12px;
  // box-sizing: border-box;
}

.container-header {
  padding: 20px;
  border-bottom: 1px solid #343a40;
  background-color: #212529;
  z-index: 10;
  
  h1 {
    color: #ffffff;
    margin: 0;
    font-size: 24px;
    font-weight: 600;
  }
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

// Tab导航样式
.tab-navigation {
  display: flex;
  background-color: #343a40;
  border-bottom: 1px solid #495057;
  overflow-x: auto;
  flex: 0 0 auto;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: #343a40;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #495057;
    border-radius: 2px;
  }
  
  .tab-item {
    padding: 12px 24px;
    cursor: pointer;
    font-size: 15px;
    color: #adb5bd;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid transparent;
    white-space: nowrap;
    transition: all 0.3s ease;
    text-decoration: none;
    
    &:hover {
      color: #ffffff;
      background-color: rgba(255, 255, 255, 0.05);
    }
    
    &.active {
      color: vars.$color-vue-light;
      border-bottom-color: vars.$color-vue-light;
      background-color: rgba(173, 181, 189, 0.1);
    }
  }
}
.content-wrapper{
  // flex: 1;
  overflow: auto;
}
</style>