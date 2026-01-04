<template>
  <div class="canvas-content">
    <h2>Canvas案例展示</h2>
    <p>本章节将展示Canvas技术的应用案例，包括游戏开发、实时数据可视化和复杂动画效果。</p>
    
    <div class="case-placeholder">
      <h3>Canvas基础绘图</h3>
      <p>使用Canvas API绘制线条、图形和文本的基础示例。</p>
    </div>
    
    <div class="case-placeholder">
      <h3>Canvas游戏开发</h3>
      <p>展示基于Canvas的2D游戏开发技术和最佳实践。</p>
    </div>
    
    <div class="case-placeholder">
      <h3>实时数据可视化</h3>
      <p>使用Canvas创建高性能的实时数据仪表盘和动态图表。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Canvas案例组件逻辑
</script>

<style lang="scss" scoped>
.canvas-content {
  h2 {
    color: #adb5bd;
    margin-bottom: 15px;
    font-size: 20px;
  }
  
  h3 {
    color: #adb5bd;
    margin: 20px 0 10px;
    font-size: 18px;
  }
  
  p {
    color: #868e96;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .case-placeholder {
    background-color: #343a40;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    border: 1px solid #495057;
  }
}
</style>