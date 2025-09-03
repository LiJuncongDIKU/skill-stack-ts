<template>
  <div class="login-wrap">
    <div class="login-left">
      <img class="logo" :src="svgUrl" alt="" />
    </div>
    <div class="login-right">
      <LoginForm class="form" @login="goBench" />
    </div>
  </div>
</template>

<script setup lang="ts">
import svgUrl from '../../assets/svg/login_light.svg?url';
import LoginForm from './LoginForm.vue';
import { router } from '../../router/index'

const goBench = () => {
  router.push('/workbench')
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variable.scss' as vars;

.login-wrap {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background: vars.$color-vue-deep;
  background-image: radial-gradient(white 2px, transparent 0);
  background-size: 30px 30px;
  background-position: -5px -5px;

  .login-left {
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      width: 580px;
    }
  }

  .login-right {
    display: flex;
    align-items: center;
    // background: repeating-linear-gradient(45deg, #92c9b1, #92c9b1 20px, #b3e0d2 20px, #b3e0d2 40px);

    .form {
      width: 300px;
      margin: auto;
      background: vars.$color-vue-light;
    }
  }
}
</style>