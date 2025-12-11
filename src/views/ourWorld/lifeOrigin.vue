<template>
  <div class="life-origin-root">
    <h3>生命起源</h3>

    <div class="timeline-wrapper">
      <div class="center-line" />

      <transition-group name="fade-slide" tag="div" class="timeline-list">
        <div
          v-for="(item, idx) in displayed"
          :key="item.name + idx"
          :class="['timeline-item', (idx % 2 === 0) ? 'left' : 'right']"
        >
          <div
            class="card"
            @mousemove="onMouseMove($event, idx)"
            @mouseenter="onMouseEnter(idx)"
            @mouseleave="onMouseLeave(idx)"
            :style="cardStyle(idx)"
          >
            <div class="card-header">
              <div class="card-title">{{ item.name }}</div>
              <div class="card-time">{{ item.time }}<span v-if="item.duration"> · {{ item.duration }}</span></div>
            </div>
            <div class="card-body">
              <p class="desc">{{ item.description }}</p>
              <p class="geo"><strong>地质/环境：</strong>{{ item.geologicalState }}</p>
              <p class="uncertainty" v-if="item.uncertainty">不确定性：{{ item.uncertainty }}</p>
            </div>
          </div>
          <div class="dot" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { TimelineEvent } from './timeline';
import timeline from './timeline';

const displayed = ref<TimelineEvent[]>([]);

onMounted(() => {
  // 交错延时逐条添加以触发过渡动画
  timeline.forEach((ev, i) => {
    setTimeout(() => {
      displayed.value.push(ev as TimelineEvent);
    }, i * 120);
  });
});

// 鼠标交互状态
const transforms = ref<Record<number, string>>({});
const shines = ref<Record<number, { x: number; y: number }>>({});

function onMouseMove(e: MouseEvent, idx: number) {
  const el = e.currentTarget as HTMLElement;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const px = (x / rect.width - 0.5) * 2; // -1 .. 1
  const py = (y / rect.height - 0.5) * -2; // -1 .. 1 inverted

  const rotateY = px * 8; // 最大 8deg
  const rotateX = py * 6; // 最大 6deg

  transforms.value[idx] = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  shines.value[idx] = { x, y };
}

function onMouseEnter(idx: number) {
  // 立即设置一个轻微放大，以便有响应感
  transforms.value[idx] = transforms.value[idx] || 'perspective(800px) scale(1.02)';
}

function onMouseLeave(idx: number) {
  // 平滑复位
  transforms.value[idx] = 'none';
  setTimeout(() => {
    delete transforms.value[idx];
    delete shines.value[idx];
  }, 360);
}

function cardStyle(idx: number) {
  const style: Record<string, string> = {};
  const t = transforms.value[idx];
  if (t) {
    style.transform = t;
    style.transition = t === 'none' ? 'transform 360ms cubic-bezier(.2,.8,.2,1)' : 'transform 60ms linear';
    style.boxShadow = '0 12px 30px rgba(2,6,23,0.6), 0 4px 10px rgba(99,102,241,0.08)';
  } else {
    style.transition = 'transform 360ms cubic-bezier(.2,.8,.2,1)';
    style.transform = 'none';
    style.boxShadow = 'none';
  }

  const s = shines.value[idx];
  if (s) {
    style['--shine-x'] = `${s.x}px`;
    style['--shine-y'] = `${s.y}px`;
  }

  return style;
}
</script>

<style scoped lang="scss">
.life-origin-root{ padding: 1rem; color: #eef2ff }
h3{ margin: 0 0 1rem 0 }

.timeline-wrapper{ position: relative; padding: 1rem 2rem; }
.center-line{
  position: absolute; left: 50%; top: 0; bottom: 0; width: 4px; background: linear-gradient(#4f46e5, #06b6d4); transform: translateX(-50%); border-radius: 2px;
  box-shadow: 0 0 18px rgba(99,102,241,0.18);
}

.timeline-list{ display: block; }
.timeline-item{ position: relative; width: calc(50% - 40px); margin: 1rem 0; }
.timeline-item.left{ left: 0; margin-right: auto; transform-origin: right center; }
.timeline-item.right{ margin-left: auto; transform-origin: left center; }

.timeline-item .dot{
  position: absolute; top: 1.2rem; width: 14px; height: 14px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #fff, #ffd166); box-shadow: 0 0 12px rgba(255,209,102,0.5);
  left: calc(50% - 7px); transform: translateX(-50%);
}

.timeline-item.left .dot{ right: -10px; left: auto; }
.timeline-item.right .dot{ left: -10px; }

.card{ background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)); border: 1px solid rgba(255,255,255,0.04); padding: .8rem 1rem; border-radius: 8px; backdrop-filter: blur(6px); position: relative; overflow: hidden }
.card::before{
  content: '';
  position: absolute;
  inset: -20%;
  pointer-events: none;
  background: radial-gradient(circle at var(--shine-x,50%) var(--shine-y,50%), rgba(255,255,255,0.12), rgba(255,255,255,0.02) 25%);
  opacity: .9;
  transition: background 120ms linear, opacity 200ms linear;
}
.card-header{ display:flex; justify-content:space-between; align-items:center; gap:.5rem }
.card-title{ font-weight:700; color:#fff }
.card-time{ color:#9ca3af; font-size:.85rem }
.card-body{ margin-top:.5rem; color:#d1d5db }
.desc{ margin:0 0 .5rem 0 }
.geo{ margin:0 0 .25rem 0; font-size:.9rem }
.uncertainty{ margin:0; font-size:.85rem; color:#fca5a5 }

/* Transition-group 动画 */
.fade-slide-enter-from{ opacity: 0; transform: translateY(18px) scale(.98) translateX(20px); }
.fade-slide-enter-active{ transition: all 420ms cubic-bezier(.2,.8,.2,1); }
.fade-slide-enter-to{ opacity: 1; transform: translateY(0) scale(1) translateX(0); }

/* 小屏幕调整 */
@media (max-width: 800px){
  .timeline-item, .timeline-item.left, .timeline-item.right{ width: auto; left: 0; margin-left: 0; margin-right: 0; }
  .timeline-item .dot{ left: -26px }
  .center-line{ left: 20px }
}

</style>
