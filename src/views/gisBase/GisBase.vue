<template>
  <div class="gis-base">
    <div class="cesium-wrap" ref="gisCesiumRef"></div>
    <div class="trigger-btns">
      <TriangleDialog v-model:visible="triangleVisible"></TriangleDialog>
      <div class="btn-01" @click="handleClick('model')">金字塔模型</div>
      <div class="btn-01" @click="handleClick('dataFormat')">覆盖物与模型</div>
      <div class="btn-01" @click="handleClick('')">事件与动画</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Viewer as CesiumViewer } from 'cesium';
import { onMounted, ref } from 'vue';
import { CesiumConfig } from '../cesium/CesiumConfig';
import TriangleDialog from './TriangleDialog.vue';
import { GisDataFormat } from './DataFormat';


const gisCesiumRef = ref<HTMLDivElement>();
CesiumConfig.initCesium();
let cesiumViewer: CesiumViewer;
onMounted(() => {
  if (gisCesiumRef.value && !cesiumViewer) {
    console.dir(gisCesiumRef.value)
    cesiumViewer = CesiumConfig.createViewer(gisCesiumRef.value);
  }
});

const triangleVisible = ref(false);
function handleClick(type: string) {
  const dispatcher: Record<string, () => void> = {
    model: () => {
      triangleVisible.value = true;
    },
    dataFormat: () => {
      GisDataFormat.drawPrimitive(cesiumViewer);
    }
  };
  if (dispatcher[type]) {
    dispatcher[type]();
  }

}

</script>

<style scoped lang="scss">
.gis-base {
  position: relative;
  overflow: hidden;
}

.cesium-wrap {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.trigger-btns {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>