<template>
  <div class="intro-content">
    <h2>Web可视化技术概述</h2>
    <p>现代Web可视化技术主要基于浏览器支持的三种核心方案构建：SVG、Canvas和WebGL。各类高度集成的可视化工具本质都离不开这三种技术。</p>

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
        <h4>WebGL <a href="https://webglfundamentals.org/webgl/lessons/zh_cn/" target="_blank">（Web Graphics Library）</a></h4>
        <p>本质上是基于OpenGL的一个光栅引擎，处理顶点函数和片段函数，理论上只能画点、线、面，并通过组合实现负责功能。是现代浏览器启用GPU加速的必选引擎，适合创建3D游戏、建筑可视化和科学模拟等复杂场景。</p>
      </div>
    </div>
    <h2>Web 浏览器内核的故事</h2>
    <ul class="timeline-list">
      <li>1998年，KHTML内核诞生，由KDE社区开发，成为早期开源浏览器引擎之一</li>
      <li>2002年，苹果从KHTML分支开发WebKit，并随Safari浏览器发布，奠定现代浏览器内核基础</li>
      <li>2004年，Mozilla Firefox 1.0发布，采用自研Gecko内核，推动Web标准普及和开源生态发展</li>
      <li>2008年，谷歌发布Chrome浏览器，基于WebKit分支开发Blink内核前身，搭载高性能V8 JavaScript引擎</li>
      <li>2010年，Opera浏览器放弃自研Presto内核，转向WebKit阵营，标志着内核多元化竞争格局形成</li>
      <li>2013年，谷歌宣布从WebKit分离，正式推出Blink内核，Chrome 28开始全面采用新内核</li>
      <li>2015年，微软发布Edge浏览器，放弃老旧Trident内核，采用全新EdgeHTML内核，提升现代Web标准支持</li>
      <li>2017年，微软宣布Edge浏览器转向Chromium项目，采用Blink内核，标志着Blink内核主导地位确立</li>
      <li>2020年，基于Chromium的新版Edge正式发布，Blink内核成为Windows平台默认内核之一</li>
      <li>2021年，WebKit继续作为Safari和iOS平台唯一内核，与Blink形成双寡头竞争格局</li>
      <li>2023年，Firefox坚持Gecko内核独立发展，成为Blink/WebKit之外唯一主流替代方案</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 基础介绍组件逻辑
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variable.scss" as vars;
// 基础样式重置与变量定义
$primary-bg: #212529;
$secondary-bg: #2c3034;
$tertiary-bg: #343a40;
$border-color: #495057;
$text-primary: #ffffff;
$text-secondary: #adb5bd;
$text-tertiary: #6c757d;
$accent-color: #adb5bd;

// 整体容器 - 移除背景和边框，让父组件处理滚动
.intro-content {
  padding: 0 30px;
  color: $text-secondary;
  line-height: 1.6;
  // 滚动由父组件.content-wrapper处理，这里不设置overflow
}

// 标题样式
h2 {
  color: $text-primary;
  font-size: 24px;
  font-weight: 600;
  margin: 30px 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid $border-color;
}

h3 {
  color: $text-primary;
  font-size: 20px;
  font-weight: 500;
  margin: 25px 0 15px 0;
}

h4 {
  color: $text-primary;
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0 10px 0;
}

// 段落样式
p {
  color: $text-secondary;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.7;
}

// 技术概览布局
.tech-overview {
  display: flex;
  gap: 20px;
  margin: 25px 0;
}

// 技术项卡片样式
.tech-item {
  background-color: $secondary-bg;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid $accent-color;
  transition: all 0.3s ease;
  flex: 1;
  
  &:hover {
    background-color: vars.$color-vue-deep;
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border-color: vars.$color-vue-light;
  }
  a{
    color: vars.$color-vue-light;
    text-decoration: none;    
  }
}

// 普通列表样式
ul {
  margin: 15px 0;
  padding-left: 25px;
  
  li {
    margin-bottom: 10px;
    position: relative;
    padding-left: 10px;
    
    &::before {
      content: "•";
      color: $accent-color;
      font-weight: bold;
      position: absolute;
      left: -15px;
      top: 0;
    }
  }
}

// 时间线列表样式
.timeline-list {
  position: relative;
  margin: 30px 0;
  padding: 0;
  
  &::before {
    content: "";
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: $border-color;
  }
  
  li {
    position: relative;
    margin: 0 0 25px 0;
    padding: 15px 20px 15px 50px;
    background-color: $secondary-bg;
    border-radius: 8px;
    transition: all 0.3s ease;
    list-style: none;
    
    &::before {
      content: "";
      position: absolute;
      left: 7px;
      top: 20px;
      width: 18px;
      height: 18px;
      background-color: $accent-color;
      border-radius: 50%;
      border: 3px solid $primary-bg;
      z-index: 1;
    }
    
    // &:hover {
    //   background-color: $tertiary-bg;
    //   transform: translateX(10px);
    //   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      
    //   &::before {
    //     transform: scale(1.2);
    //   }
    // }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

// 粗体文本样式
strong {
  color: $text-primary;
  font-weight: 600;
}
</style>