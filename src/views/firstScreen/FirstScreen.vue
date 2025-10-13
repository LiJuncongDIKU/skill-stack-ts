<template>
  <div class="desc-wrap">
    <div v-for="item in descList" :key="item.title" class="desc-item">
      <div class="title">
        {{ item.title }}
      </div>
      <div class="desc">
        {{ item.desc }}
      </div>
      <div class="means-list">
        <div v-for="means in item.means" :key="means" class="means-item">{{ means }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type webNorm = {
  title: string;
  desc: string;
  means: string[];
};
const descList: webNorm[] = [
  {
    title: 'LCP（最大内容绘制）', desc: '这个指标是衡量页面主要内容可见的时间点。主要内容关系到网页主图包括img和background-image、视频元素的封面图、大段文本',
    means: [
      "图片和字体可以使用preload和preconnect优化，还有fetchpriority属性优化加载优先级，具体视情况而定。门户网址可能会要求，或者结合lazyload和骨架屏使用。",
      "非关键JS可以使用defer或者async加载，或者在body底部加载。defer：等待DOM解析完成后，DOMContentLoaded事件前执行，async：并行获取、在加载完成时立即执行。",
      "服务端渲染，可以极大减少LCP时间。SSR：服务器渲染，SSG：静态站点生成。",
    ]
  },
  {
    title: 'INP（当前核心交互指标）', desc: "这个是指整个页面生命周期中，所有用户交互（点击、滚动、输入）的 “响应延迟” 平均值。",
    means: [
      "结合业务进行优化，主要是用户交互事件的延迟，比如点击按钮后，按钮的响应时间。",
      "减少不必要的DOM操作，当然现代框架的虚拟DOM可以极大减少这部分的开销。",
      "减少不必要的重绘（小：颜色阴影透明度）和回流（大：尺寸布局），比如使用transform代替top、left等定位方式。"
    ]
  },
  {
    title: 'CLS（累积布局偏移）', desc: '这个指标指页面加载和交互过程中，可见元素 “意外偏移” 的累积值（如图片加载后突然撑开布局、弹窗突然插入导致内容下移），反映 “页面是否抖动”。',
    means: [
      "考虑：设计上媒体元素的尺寸最好不影响布局",
      "考虑：大段文本和文本意外长度的问题",
      "will-change: transform; 告诉浏览器，这个元素将要进行transform变换，可以提前准备好布局。注意用完即删除。"
    ]
  },
  {
    title: "web-vitals", desc: "一个流行的开源库，用来测量和分析网页的在线性能指标。",
    means: [
      "使用web-vitals库，可以很方便的获取到LCP、INP、CLS这三个指标。",
    ]
  }

];
</script>

<style scoped lang="scss">
@use '../../assets/scss/variable.scss' as vars;

.desc-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
  box-sizing: border-box;
  padding: 24px;
  overflow: auto;
}

.desc-item {
  color: #eee;
  background: vars.$color-vue-deep;
  padding: 16px;
  border: 2px solid vars.$color-vue-light;

  .title{
    font-size: 28px;
    margin-bottom: 10px;
  }
  .desc{
    color: #aaa;
    text-indent: 2em;
  }
  .means-item{
    padding: 12px 20px;
    background: #232323;
    margin: 12px 0 0 0;
    box-shadow: 0 0 10px #444 inset;
  }
}
</style>
