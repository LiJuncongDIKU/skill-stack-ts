<template>
  <div class="dark-bg">
    <oFrame>
      <div class="label">这是一个简单的前端开发者博客，欢迎进来看看咯~ @白猫出更</div>
      <div class="gradient-button" @click="go2bench">
        <span class="gradient-text">
          去看看
        </span>
      </div>
      <div class="tip">部分样式来自：https://uiverse.io/</div>
    </oFrame>
  </div>
</template>

<script setup lang="ts">
import { router } from '../../router';
import oFrame from './oFrame.vue'

const go2bench = () => {
  router.push("/workbench/about")
}
</script>

<style scoped lang="scss">
.tip{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2em;
  text-align: center;
  font-size: 12px;
  color: #666;
  margin: auto;
}
/* From Uiverse.io by milegelu */
.dark-bg {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #111;
  --gap: 5em;
  --line: 1px;
  --color: rgba(255, 255, 255, 0.2);

  background-image: linear-gradient(-90deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)),
    linear-gradient(0deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap));
  background-size: var(--gap) var(--gap);
}

.label {
  color: white;
  padding: 2em;
  line-height: 1.5;
}

/* From Uiverse.io by M4rco592 */
.gradient-button {
  position: relative;
  padding: 16px 32px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  overflow: hidden;
  transition: transform 0.2s ease;
  margin: 2em 0 0 0;
}

.gradient-button:hover {
  transform: scale(1.03);
}

.gradient-button::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg,
      #12c2e9, #c471ed, #f64f59, #c471ed, #12c2e9);
  z-index: -2;
  filter: blur(10px);
  transform: rotate(0deg);
  transition: transform 1.5s ease-in-out;
}

.gradient-button:hover::before {
  transform: rotate(180deg);
}

.gradient-button::after {
  content: "";
  position: absolute;
  inset: 3px;
  background: black;
  border-radius: 47px;
  z-index: -1;
  filter: blur(5px);
}

.gradient-text {
  color: transparent;
  background: linear-gradient(to left,
       #F5D2D2, #F8F7BA, #BDE3C3, #A3CCDA );
  background-clip: text;
  // filter: hue-rotate(0deg);
}

.gradient-button:hover .gradient-text {
  animation: hue-rotating 2s linear infinite;
}

.gradient-button:active {
  transform: scale(0.99);
}

@keyframes hue-rotating {
  to {
    filter: hue-rotate(360deg);
  }
}
</style>