<template>
  <div class="view-knowledge-container">
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
    <router-view class="tab-content" />
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
  padding: 20px;
  box-sizing: border-box;
  background-color: #212529;
  
  h1 {
    color: #ffffff;
    margin-bottom: 20px;
    font-size: 24px;
  }
}

// Tab导航样式
.tab-navigation {
  display: flex;
  border-bottom: 2px solid #343a40;
  margin-bottom: 20px;
  background-color: #343a40;
  
  .tab-item {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    color: #adb5bd;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid transparent;
    margin-right: 10px;
    transition: all 0.3s ease;
    text-decoration: none;
    
    &:hover {
      color: #ffffff;
      background-color: #343a40;
    }
    
    &.active {
      color: vars.$color-vue-light;
      border-bottom-color: vars.$color-vue-light;
      background-color: #343a40;
    }
  }
}

// Tab内容样式
.tab-content {
  background-color: #343a40;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  h2 {
    color: #adb5bd;
    margin-bottom: 15px;
    font-size: 20px;
  }
  
  h3 {
    color: #adb5bd;
    margin: 20px 0 15px;
    font-size: 18px;
  }
  
  h4 {
    color: #adb5bd;
    margin: 15px 0 10px;
    font-size: 16px;
  }
  
  p {
    color: #868e96;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  ul {
    color: #868e96;
    line-height: 1.8;
    margin-bottom: 15px;
    padding-left: 20px;
    
    li {
      margin-bottom: 8px;
    }
  }
}

// 基础介绍内容样式
.intro-content {
  .tech-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
    
    .tech-item {
      background-color: #495057;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid vars.$color-vue-light;
    }
  }
}
</style>