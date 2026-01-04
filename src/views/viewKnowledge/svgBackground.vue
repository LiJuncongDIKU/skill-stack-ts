<template>
  <div class="home">
    <!-- 白色和蓝色波浪 SVG 背景 -->
    <svg
      class="bg-svg"
      viewBox="0 0 1920 1080"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <!-- 三种蓝色渐变定义 -->
        <linearGradient id="blue1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#e6f7ff" />
          <stop offset="100%" stop-color="#1890ff" />
        </linearGradient>
        
        <linearGradient id="blue2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f0faff" />
          <stop offset="100%" stop-color="#096dd9" />
        </linearGradient>
        
        <linearGradient id="blue3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f6fffb" />
          <stop offset="100%" stop-color="#0050b3" />
        </linearGradient>
      </defs>

      <!-- 第一层波浪 -->
      <path
        class="wave wave1"
        d="M0,600 Q480,400 960,600 T1920,600 L1920,1080 L0,1080 Z"
        fill="url(#blue1)"
      >
        <animate 
          attributeName="d" 
          dur="15s" 
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
          keyTimes="0; 0.5; 1"
          values="
            M0,600 Q480,400 960,600 T1920,600 L1920,1080 L0,1080 Z;
            M0,700 Q480,500 960,700 T1920,700 L1920,1080 L0,1080 Z;
            M0,600 Q480,400 960,600 T1920,600 L1920,1080 L0,1080 Z
          "
        />
      </path>

      <!-- 第二层波浪 -->
      <path
        class="wave wave2"
        d="M0,700 Q480,500 960,700 T1920,700 L1920,1080 L0,1080 Z"
        fill="url(#blue2)"
      >
        <animate 
          attributeName="d" 
          dur="18s" 
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
          keyTimes="0; 0.5; 1"
          values="
            M0,700 Q480,500 960,700 T1920,700 L1920,1080 L0,1080 Z;
            M0,800 Q480,600 960,800 T1920,800 L1920,1080 L0,1080 Z;
            M0,700 Q480,500 960,700 T1920,700 L1920,1080 L0,1080 Z
          "
        />
      </path>

      <!-- 第三层波浪 -->
      <path
        class="wave wave3"
        d="M0,800 Q480,600 960,800 T1920,800 L1920,1080 L0,1080 Z"
        fill="url(#blue3)"
      >
        <animate 
          attributeName="d" 
          dur="20s" 
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
          keyTimes="0; 0.5; 1"
          values="
            M0,800 Q480,600 960,800 T1920,800 L1920,1080 L0,1080 Z;
            M0,900 Q480,700 960,900 T1920,900 L1920,1080 L0,1080 Z;
            M0,800 Q480,600 960,800 T1920,800 L1920,1080 L0,1080 Z
          "
        />
      </path>

      <!-- 白色波浪泡沫效果 -->
      <g class="foam">
        <circle cx="200" cy="850" r="5" fill="#ffffff" opacity="0.8">
          <animate attributeName="cy" values="850;830;850" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle cx="400" cy="870" r="4" fill="#ffffff" opacity="0.7">
          <animate attributeName="cy" values="870;840;870" dur="7s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle cx="600" cy="860" r="3" fill="#ffffff" opacity="0.6">
          <animate attributeName="cy" values="860;835;860" dur="5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle cx="800" cy="880" r="6" fill="#ffffff" opacity="0.9">
          <animate attributeName="cy" values="880;845;880" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle cx="1000" cy="855" r="4" fill="#ffffff" opacity="0.7">
          <animate attributeName="cy" values="855;835;855" dur="6.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle cx="1200" cy="875" r="3" fill="#ffffff" opacity="0.6">
          <animate attributeName="cy" values="875;840;875" dur="5.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle cx="1400" cy="865" r="5" fill="#ffffff" opacity="0.8">
          <animate attributeName="cy" values="865;835;865" dur="7.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle cx="1600" cy="885" r="4" fill="#ffffff" opacity="0.7">
          <animate attributeName="cy" values="885;845;885" dur="6.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle cx="1800" cy="860" r="3" fill="#ffffff" opacity="0.6">
          <animate attributeName="cy" values="860;830;860" dur="5.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
        </circle>
      </g>
    </svg>

    <!-- 页面内容插槽 -->
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>
// 波浪背景组件，无需额外逻辑
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bg-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: relative;
  z-index: 1;
}

/* 波浪动画优化 */
.wave {
  opacity: 0.8;
}

.wave1 {
  opacity: 0.7;
}

.wave2 {
  opacity: 0.6;
}

.wave3 {
  opacity: 0.5;
}

.wave-group {
  transform-origin: center;
}

.foam-item {
  transform-origin: center;
}
</style>
