<template>
  <div class="svg-content">
    <h2>SVG案例展示</h2>
    <div class="title">图标</div>
    <p>SVG图标是一种基于XML的矢量图形格式，文件大小可控；解析为渲染树后仍保留节点，可以通过CSS样式进行修改，如颜色、大小、旋转等。</p>
    <div class="case-placeholder">
      <div class="svg-icons">
        <img :src="copilot" width="50" alt="示例图标" />
        <img :src="copilot" width="100" alt="示例图标" />
        <img :src="copilot" width="150" alt="示例图标" />
        <img :src="copilot" width="200" alt="示例图标" />
      </div>
      <HighLightCoder class="coder-wrap" :code="iconCode"></HighLightCoder>
    </div>
    <div class="title">eChart.js</div>
    <p>eChart.js是一个基于JavaScript的开源可视化库，提供两种渲染模式：SVG和Canvas。</p>
    <EChartRenderEg></EChartRenderEg>
    <div class="title">轻量化优势</div>
    <div class="bg-grid">
      <SvgBackground>
        <h2>波浪</h2>
      </SvgBackground>
      <Artist>
        <a class="artist-link" href="https://svgartista.net" target="_blank">艺术动画</a>
      </Artist>
      <SvgBackground></SvgBackground>
      <SvgBackground></SvgBackground>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, } from 'vue';
import copilot from '@/assets/icon/copilot.svg?url';
import copilotTxt from '@/assets/icon/copilot.svg?raw';
import HighLightCoder from '../../components/HighLightCoder.vue';
import { useScriptTag } from '../../hooks/useScriptTag';
import EChartRenderEg from './eChartRenderEg.vue';
import SvgBackground from './svgBackground.vue';
import Artist from './svg/artist.vue';

const iconCode = ref(copilotTxt);
const { promise: prettierPromise } = useScriptTag('https://unpkg.com/prettier@3.7.4/standalone.js');
const { promise: prettierHtmlPromise } = useScriptTag('https://unpkg.com/prettier@3.7.4/plugins/html.js');
Promise.all([prettierPromise, prettierHtmlPromise]).then(() => {
  // console.log("🚀 ~ iconCode.value:", iconCode.value)
  (window as any).prettier.format(iconCode.value, {
    parser: 'html',
    plugins: [(window as any).prettierPlugins!.html],
  }).then((formattedCode: string) => {
    iconCode.value = formattedCode;
  });
});
</script>

<style lang="scss" scoped>
.svg-content {
  padding: 20px;
  color: #adb5bd;
  line-height: 1.6;

  h2 {
    color: #ffffff;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 600;
    position: relative;
    padding-bottom: 10px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #4d7cff, #6c757d);
      border-radius: 2px;
    }
  }

  .title {
    color: #e9ecef;
    font-size: 18px;
    font-weight: 500;
    margin: 25px 0 15px 0;
    padding-left: 10px;
    border-left: 3px solid #4d7cff;
  }

  p {
    color: #adb5bd;
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 1.7;
  }

  .case-placeholder {
    display: flex;
    align-items: flex-start;
    background: linear-gradient(145deg, #2c3034, #212529);
    padding: 25px;
    border-radius: 12px;
    margin-bottom: 25px;
    border: 1px solid #495057;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
    gap: 20px;

    .svg-icons {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 25px;
      flex-wrap: wrap;
      flex: 1 0 50%;

      img {
        flex-shrink: 0;
        margin: 0;
        transition: all 0.3s ease;
        border-radius: 6px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

        &:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 6px 12px rgba(77, 124, 255, 0.3);
        }
      }
    }

    .coder-wrap {
      width: 100%;
      max-width: 100%;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }
  }
}

.bg-grid {
  display: grid;
  height: 80vh;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  >* {
    background: #212529;
    overflow: hidden;
    position: relative;
  }

  .artist-link {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #4d7cff;
    cursor: pointer;
  }
}
</style>