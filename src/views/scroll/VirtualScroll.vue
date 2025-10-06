<template>
  <div class="virtual-scroll-container" ref="containerRef" @scroll="handleScroll" :style="{ height: containerHeight }">
    <!-- 占位元素，用于撑开容器，形成滚动条 -->
    <div class="virtual-scroll-placeholder" :style="{ height: `${totalHeight}px` }"></div>

    <!-- 可视区域内的项目 -->
    <div class="virtual-scroll-content" :style="{ transform: `translateY(${offsetY}px)` }">
      <div v-for="(item, index) in visibleItems" :key="index" :style="{ height: `${itemHeight}px` }"
        class="virtual-scroll-item">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';

// 组件属性
const props = defineProps({
  // 所有数据项
  items: {
    type: Array<any>,
    required: true,
    default: () => []
  },
  // 每个项目的高度(px)
  itemHeight: {
    type: Number,
    default: 50
  },
  // 容器高度(px或百分比)
  containerHeight: {
    type: String,
    default: '500px'
  },
  // 预加载的项目数量(可视区域外)
  preloadCount: {
    type: Number,
    default: 5
  }
});

// 容器引用
const containerRef = ref<HTMLDivElement | null>(null);

// 滚动相关状态
const scrollTop = ref(0);
const visibleCount = ref(0);
const startIndex = ref(0);
const endIndex = ref(0);
const offsetY = ref(0);

// 计算总高度
const totalHeight = computed(() => {
  return props.items.length * props.itemHeight;
});

// 计算可视区域内的项目
const visibleItems = computed(() => {
  return props.items.slice(startIndex.value, endIndex.value);
});

// 处理滚动事件
const handleScroll = () => {
  if (containerRef.value) {
    scrollTop.value = containerRef.value.scrollTop;
    updateVisibleRange();
  }
};

// 更新可视区域范围
const updateVisibleRange = () => {
  if (!containerRef.value) return;

  // 容器可视高度
  const containerClientHeight = containerRef.value.clientHeight;

  // 可视区域能容纳的项目数量
  visibleCount.value = Math.ceil(containerClientHeight / props.itemHeight);

  // 计算开始索引(减去预加载项)
  startIndex.value = Math.max(0, Math.floor(scrollTop.value / props.itemHeight) - props.preloadCount);

  // 计算结束索引(加上预加载项)
  endIndex.value = Math.min(
    props.items.length,
    startIndex.value + visibleCount.value + 2 * props.preloadCount
  );

  // 计算偏移量，使项目正确对齐
  offsetY.value = startIndex.value * props.itemHeight;
};

// 初始化
onMounted(() => {
  updateVisibleRange();
});

// 监听数据变化，重新计算
watch(
  () => props.items.length,
  () => {
    updateVisibleRange();
  }
);

// 监听容器大小变化(简单实现)
watch(
  () => containerRef.value?.clientHeight,
  () => {
    updateVisibleRange();
  }
);
</script>

<style scoped>
.virtual-scroll-container {
  position: relative;
  overflow: auto;
  width: 100%;
}

.virtual-scroll-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}

.virtual-scroll-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.virtual-scroll-item {
  width: 100%;
  box-sizing: border-box;
}
</style>
