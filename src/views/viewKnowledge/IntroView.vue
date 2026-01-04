<template>
  <div class="intro-content">
    <h2>Web可视化技术概述</h2>
    <p>现代Web可视化技术主要基于浏览器支持的三种核心方案构建：SVG、Canvas和WebGL。这些技术各有优势，适用于不同的应用场景。</p>
    <h2>Web标准的故事</h2>
      <ul>
        <li>1990年代，万维网（World Wide Web）诞生，HTML（HyperText Markup Language）成为网页的基础语言，万维网联盟（W3C）成立以制定Web标准。</li>
        <li>1995年，CSS（Cascading Style Sheets）1.0由W3C发布，用于描述HTML文档的样式和布局。</li>
        <li>1998年，微软发布Internet Explorer 4，支持CSS和DHTML，推动了Web交互技术发展；W3C发布CSS 2.0标准。</li>
        <li>2000年，W3C发布XHTML（Extensible HyperText Markup Language）1.0，重新定义了HTML的语法规则。</li>
        <li>2002年，苹果发布Safari浏览器，基于WebKit渲染引擎，推动了Web标准支持。</li>
        <li>2004年，Mozilla基金会发布Firefox 1.0，基于Gecko引擎，成为IE的主要竞争对手，促进了Web标准的普及。</li>
        <li>2006年，W3C发布HTML5第一份工作草案，引入新的语义化标签、多媒体支持和Canvas绘图API。</li>
        <li>2008年，谷歌发布Chrome浏览器，搭载V8 JavaScript引擎，大幅提升网页性能；W3C发布CSS 3模块化标准。</li>
        <li>2009年，微软发布Internet Explorer 8，大幅提升CSS和JavaScript标准支持。</li>
        <li>2010年，W3C发布WebGL 1.0标准，开启浏览器端3D图形渲染新时代；谷歌推出Web Components规范草案。</li>
        <li>2011年，火狐、Chrome、Safari等浏览器开始支持HTML5视频和音频元素。</li>
        <li>2012年，W3C发布SVG 2.0工作草案，引入更多矢量图形功能和动画效果。</li>
        <li>2013年，谷歌推出Chrome DevTools，成为Web开发的重要工具；Canvas API得到所有主流浏览器广泛支持。</li>
        <li>2014年，微软宣布开发基于Chromium的新Edge浏览器；W3C发布CSS Grid Layout标准。</li>
        <li>2015年，W3C正式发布HTML5标准；苹果在Safari中引入Service Workers支持。</li>
        <li>2017年，微软发布基于Chromium的Edge浏览器预览版；W3C发布WebAssembly 1.0标准。</li>
        <li>2019年，万维网联盟（W3C）和网页超文本应用技术工作小组（WHATWG）发布HTML5.2标准。</li>
        <li>2020年，所有主流浏览器（Chrome、Firefox、Safari、Edge）全面支持CSS Grid和Flexbox布局。</li>
      </ul>
    <h2>三种核心技术方案</h2>
    <div class="tech-overview">
      <div class="tech-item">
        <h4>SVG（Scalable Vector Graphics）</h4>
        <p>基于XML的矢量图形格式，由W3C（World Wide Web Consortium/万维网联盟）制定标准，支持交互和动画。无限缩放、不失真，适合需要高保真度的场景，如数据图表、图标和地图。</p>
      </div>
      
      <div class="tech-item">
        <h4>Canvas</h4>
        <p>HTML5提供的二维绘图API，通过JavaScript直接操作像素。Canvas具有高性能特性，适合创建复杂的动画、游戏和实时数据可视化。</p>
      </div>
      
      <div class="tech-item">
        <h4>WebGL</h4>
        <p>基于OpenGL ES 2.0的3D绘图API，允许在浏览器中渲染高性能的3D图形。WebGL利用GPU加速，适合创建3D游戏、建筑可视化和科学模拟等复杂场景。</p>
      </div>
    </div>
    
    <h3>技术选择指南</h3>
    <p>选择合适的可视化技术取决于具体需求：</p>
    <ul>
      <li><strong>SVG：</strong>需要无限缩放、丰富的交互和DOM集成的场景</li>
      <li><strong>Canvas：</strong>需要高性能、大量图形元素或复杂动画的场景</li>
      <li><strong>WebGL：</strong>需要3D渲染或利用GPU加速的复杂可视化场景</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 基础介绍组件逻辑
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variable.scss" as vars;
.intro-content {
  max-height: 90vh;
  overflow-y: auto;
  padding-right: 10px;
  
  /* 自定义滚动条样式 */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: vars.$color-vue-deep;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: vars.$color-vue-light;
    border-radius: 4px;
    
    &:hover {
      background-color: rgba(102, 187, 106, 0.8);
    }
  }
  
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
  
  /* 故事列表特殊样式 */
  h2:nth-of-type(2) + ul {
    background-color: vars.$color-vue-deep;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid vars.$color-vue-light;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    
    li {
      position: relative;
      padding-left: 12px;
      margin-bottom: 12px;
      transition: all 0.3s ease;
      
      &::before {
        content: "";
        position: absolute;
        left: -20px;
        top: 8px;
        width: 8px;
        height: 8px;
        background-color: vars.$color-vue-light;
        border-radius: 50%;
      }
      
      &:hover {
        color: #adb5bd;
        transform: translateX(4px);
      }
      
      /* 突出显示时间戳 */
      &::first-line {
        font-weight: 600;
        color: vars.$color-vue-light;
      }
    }
  }
  
  .tech-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
    
    .tech-item {
      background-color: vars.$color-vue-deep;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid vars.$color-vue-light;
    }
  }
}
</style>