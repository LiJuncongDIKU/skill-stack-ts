<template>
  <div class="chart-container">
    <div class="canvas-chart" ref="canvasChartRef"></div>
    <div class="svg-chart" ref="svgChartRef"></div>
    <div class="renderer-note">
      <p>Canvas 渲染：</p>
      <ul>
        <li>仅生成一个 &lt;canvas&gt; 元素，所有图形内容被绘制为位图</li>
        <li>DOM 结构简洁，节点数量极少，适合大数据量、高帧率动画</li>
        <li>缩放或导出时可能出现锯齿，清晰度依赖设备像素比</li>
        <li>无法通过 CSS 或 DOM 操作单独控制某个图形元素</li>
      </ul>
    </div>
    <div class="renderer-note">
      <p>SVG 渲染：</p>
      <ul>
        <li>每个图形元素（柱条、坐标轴、文本）均生成对应的 SVG 标签，层级清晰</li>
        <li>DOM 节点数量随图形元素线性增长，便于调试与样式覆盖</li>
        <li>矢量图形，任意缩放不失真，导出高清图片更方便</li>
        <li>可通过 CSS、DOM API 或事件单独选中并修改任意元素</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
echarts.use([SVGRenderer, CanvasRenderer, BarChart]);
const canvasChartRef = ref<HTMLDivElement | null>(null);
const svgChartRef = ref<HTMLDivElement | null>(null);
const chartOption = {
  title: {
    text: '虚拟柱状图'
  },
  tooltip: {},
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10]
  }]
};
onMounted(() => {
  console.log("🚀 ~ canvasChartRef:", canvasChartRef.value)
  var canvasChart = echarts.init(canvasChartRef.value!, null, { renderer: 'canvas' });
  var svgChart = echarts.init(svgChartRef.value!, null, { renderer: 'svg' });
  canvasChart.setOption(chartOption);
  canvasChart.setOption({ title: { text: 'Canvas 渲染' } });
  svgChart.setOption(chartOption);
  svgChart.setOption({ title: { text: 'SVG 渲染' } });
});
</script>

<style scoped lang="scss">
@use '../../assets/scss/variable.scss' as vars;

.chart-container {
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr auto;
  background: linear-gradient(135deg, vars.$color-vue-light 0%, vars.$color-vue-deep 100%);

  .canvas-chart {
    height: 100%;
  }

  .svg-chart {
    height: 100%;
  }
  .renderer-note{
    padding: 20px;
    >ul{
      list-style: decimal;
      margin: 15px 0;
      padding-left: 25px;
    }
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}
</style>