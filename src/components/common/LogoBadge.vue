<template>
  <div class="logo-badge" :style="{ '--size': size + 'px' }" @mouseenter="hover = true" @mouseleave="hover = false">
    <img class="icon" :src="iconSrc" alt="logo" />
    <div class="bubble" v-show="hover">
      <slot>徽标</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import defaultIcon from '../../assets/icon/link.svg?url';

const props = defineProps<{
  icon?: string;
  size?: number;
}>();

const hover = ref(false);
const size = props.size ?? 18;
const iconSrc = computed(() => props.icon ?? defaultIcon);
</script>

<style scoped lang="scss">
.logo-badge{
  --size: 18px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  border-radius: 6px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.04);
}
.logo-badge .icon{
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 2px 6px rgba(2,6,23,0.5));
}
.logo-badge .bubble{
  position: absolute;
  left: calc(var(--size) + 8px);
  top: 50%;
  transform: translateY(-50%);
  min-width: 140px;
  max-width: 260px;
  padding: .45rem .6rem;
  background: rgba(7,10,23,0.85);
  color: #e6f9ef;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(2,6,23,0.6);
  font-size: .85rem;
  line-height: 1.1;
  border: 1px solid rgba(255,255,255,0.03);
  white-space: normal;
  z-index: 100;
}

/* 小屏幕：气泡在上方 */
@media (max-width: 600px){
  .logo-badge .bubble{ left: 50%; top: auto; bottom: calc(var(--size) + 10px); transform: translateX(-50%); }
}
</style>
