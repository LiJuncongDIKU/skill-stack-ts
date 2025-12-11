<template>
  <div class="our-world-layout">
    <aside class="side-menu">
      <div class="menu-title">时间轴/分期</div>
      <ul>
        <li v-for="item in menu" :key="item.name" :class="{ active: item.name === active }">
          <router-link :to="item.path">{{ item.label }}</router-link>
        </li>
      </ul>
    </aside>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const menu = [
  { name: 'lifeOrigin', label: '生命起源', path: '/workbench/our-world/life-origin' },
  { name: 'precambrian', label: '前寒武纪', path: '/workbench/our-world/precambrian' },
  { name: 'paleozoicCambrian', label: '古生代-寒武纪', path: '/workbench/our-world/paleozoic-cambrian' },
  { name: 'paleozoicOrdovician', label: '古生代-奥陶纪', path: '/workbench/our-world/paleozoic-ordovician' },
  { name: 'paleozoicSilurian', label: '古生代-志留纪', path: '/workbench/our-world/paleozoic-silurian' },
  { name: 'paleozoicDevonian', label: '古生代-泥盆纪', path: '/workbench/our-world/paleozoic-devonian' },
  { name: 'paleozoicCarboniferous', label: '古生代-石炭纪', path: '/workbench/our-world/paleozoic-carboniferous' },
  { name: 'paleozoicPermian', label: '古生代-二叠纪', path: '/workbench/our-world/paleozoic-permian' },
  { name: 'mesozoicTriassic', label: '中生代-三叠纪', path: '/workbench/our-world/mesozoic-triassic' },
  { name: 'mesozoicJurassic', label: '中生代-侏罗纪', path: '/workbench/our-world/mesozoic-jurassic' },
  { name: 'mesozoicCretaceous', label: '中生代-白垩纪', path: '/workbench/our-world/mesozoic-cretaceous' },
  { name: 'cenozoicPaleogene', label: '新生代-古近纪', path: '/workbench/our-world/cenozoic-paleogene' },
  { name: 'cenozoicNeogene', label: '新生代-新近纪', path: '/workbench/our-world/cenozoic-neogene' },
  { name: 'cenozoicQuaternary', label: '新生代-第四纪', path: '/workbench/our-world/cenozoic-quaternary' }
];

const route = useRoute();
const active = computed(() => {
  // 取最后一段 path 作为标识
  const seg = route.path.split('/').filter(Boolean).pop();
  return seg ? seg.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) : '';
});
</script>

<style scoped lang="scss">
.our-world-layout{
  display: flex;
  height: 100%;
}

.side-menu{
  width: 220px;
  background: #1f2937;
  color: #ddd;
  padding: 1rem;
  box-sizing: border-box;
}

.menu-title{
  display: block;
  font-weight: 700;
  margin-bottom: .6rem;
  padding: .6rem .85rem;
  /* 更自然的四色渐变（包含必须的 #41b883） */
  background: linear-gradient(90deg, #41b883 0%, #58bfa0 34%, #5fb0d6 68%, #2aa7e0 100%);
  color: #ffffff;
  border-radius: 10px;
  /* 更柔和的阴影，减少生硬感 */
  box-shadow: 0 6px 16px rgba(36,89,77,0.12), inset 0 -2px 8px rgba(255,255,255,0.03);
  text-transform: none;
  letter-spacing: 0.01em;
  font-size: 0.95rem;
  line-height: 1.1;
  border: 1px solid rgba(255,255,255,0.04);
  backdrop-filter: blur(4px);
}

.side-menu ul{ list-style: none; padding: 0; margin: 0; }
.side-menu li{ margin: .45rem 0; }
.side-menu a{
  display: block;
  padding: .45rem .65rem;
  border-radius: 6px;
  color: #cbd5e1;
  text-decoration: none;
  transition: background .18s ease, color .18s ease, transform .12s ease;
}
.side-menu a:hover{
  background: rgba(255,255,255,0.03);
  color: #ffffff;
  transform: translateX(6px);
}
.side-menu li.active a{
  color: #fff;
  font-weight: 600;
  background: linear-gradient(90deg, rgba(99,102,241,0.12), rgba(6,182,212,0.06));
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);
}

.content{
  flex: 1;
  background: linear-gradient(#0f172a, #071028);
  color: #eef2ff;
  overflow: auto;
}
</style>
