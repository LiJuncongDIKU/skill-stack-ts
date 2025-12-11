<template>
  <el-tooltip :content="tips" placement="bottom-end" effect="light">
    <Transition name="bounce" class="box" mode="out-in">
      <img v-if="isActive" :src="props.activeUrl" @click="handleClick">
      <img v-else :src="questionUrl" @click="handleClick">
    </Transition>
  </el-tooltip>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import questionUrl from '../../assets/icon/quetion.svg?url'

// 这个组件开始的时候是个问号，不能点击，但是有激活状态，激活之后就是多彩的，点击可以打开弹框，弹框内容用插槽重点是带点动画吧
const props = withDefaults(
  defineProps<{ activeUrl: string, isActive: boolean, activeLabel?: string }>()
  , { activeUrl: questionUrl, isActive: false }
);
const emits = defineEmits(['click'])

const tips = computed(() => {
  return props.isActive ? props.activeLabel || '激活' : '等你来探索'
})

const handleClick = () => {
  emits('click')
}
</script>

<style scoped lang="scss">
@use '../../assets/scss/variable.scss' as vars;
@use '../../assets/scss/keyframe.scss' as *;

.box {
  width: 32px;
  height: 32px;
  padding: 4px;
  border: 1px solid vars.$color-vue-light;
  background-color: vars.$color-vue-deep;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>