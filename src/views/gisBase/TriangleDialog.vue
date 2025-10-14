<template>
  <el-dialog title="金字塔模型" class="gis-dialog" v-model="visible" width="800" @opened="afterOpen">
    <div class="split-box">
      <div class="desc">
        <div class="desc-item" v-for="desc in descList" :key="desc.title">
          <div class="desc-title">{{ desc.title }}</div>
          <div class="desc-content">{{ desc.content }}</div>
        </div>
      </div>
      <div class="chart" ref="charRef"></div>
    </div>
  </el-dialog>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as eCharts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  ToolboxComponent,
  LegendComponent,
} from 'echarts/components';
import {
  FunnelChart
} from 'echarts/charts';
eCharts.use([CanvasRenderer, TitleComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent, ToolboxComponent, LegendComponent, FunnelChart]);


const visible = defineModel('visible');
const charRef = ref<HTMLElement>();
const afterOpen = () => {
  const chart = eCharts.init(charRef.value, null, { renderer: 'canvas' });
  chart.setOption({
    color: ['#132a13', '#2c402c', '#557e55', '#829c82', '#b7c4b7', '#d8e0d8'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}'
    },
    series: [
      {
        name: '瓦片随层级增大而变多',
        type: 'funnel',
        left: 0,
        top: 40,
        bottom: 40,
        width: '100%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'ascending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          { value: 1, name: 'Zoom：0 = 单张瓦片' },
          { value: 4, name: 'Zoom：1 = 4张瓦片' },
          { value: 9, name: 'Zoom：2 = 16张瓦片' },
          { value: 16, name: 'Zoom：3 = 64张瓦片' },
          { value: 25, name: 'Zoom：4 = 256张瓦片' },
          { value: 36, name: 'Zoom：n = 4^n张瓦片' }
        ]
      }
    ]
  });
};

const descList = [{
  title: '分层和切割',
  content: '层级为0时，整个地图瓦片的数量是1，此时可以理解成就是一张图片，所有地理信息和细节高度模糊；层级为1时，瓦片的数量变为4……显然在瓦片大小处于可控范围的前提下，每张瓦片能够承载的信息变多了，当层级为n时，瓦片的数量变为4^n。层级越大，瓦片的数量越多，瓦片对应的地理范围越小，信息越精细。'
}, {
  title: '缩放与层级',
  content: '一般使用的地图中，画布大小固定（例如电脑屏幕），当我们放大地图时，地图的层级会增加，瓦片的数量随之增加，例如我们缩放到Zoom5时，1024张瓦片显然超出了画布大小，此时，我们只需要加载能看见的瓦片即可。'
}, {
  title: '瓦片的格式和类型',
  content: '瓦片可以是图片，也可以是矢量数据（png、jpg、pbf、mvt等）。瓦片格式和配套解析工具自然是对应的，具体视轮子而定。'
}];


</script>

<style scoped lang="scss">
.gis-dialog {
  .chart {
    width: 100%;
    height: 400px;
  }

  .split-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid #ccc;
    background: linear-gradient(to right, #ddd, #fafafa 50%, transparent 50%);
  }

  .desc {
    padding: 0 12px;
    overflow: auto;
    .desc-item {
      padding: 0 0 1em 0;
    }
    .desc-title {
      font-size: 18px;
      line-height: 36px;
      color: #555;
      font-weight: bold;
      margin: 0 0 0 0;
    }

    .desc-content {
      font-size: 14px;
      color: #666;
      line-height: 20px;
      text-indent: 2em;
      padding: 0 0 0 .5em;
    }
  }
}
</style>