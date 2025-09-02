<template>
  <div class="login-wrap">
    <div class="login-left">
      <img class="logo" :src="svgUrl" alt="" />
    </div>
    <div class="login-right">
      <LoginForm class="form" />
    </div>
  </div>
</template>

<script setup lang="ts">
import svgUrl from '../../assets/svg/login_light.svg?url';
import LoginForm from './LoginForm.vue';
</script>

<style lang="scss" scoped>
@use '../../assets/scss/variable.scss' as vars;

.login-wrap {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;

  .login-left {
    display: flex;
    align-items: center;
    justify-content: center;
    background: vars.$color-vue-deep;
    background-image: radial-gradient(white 2px, transparent 0);
    background-size: 30px 30px;
    background-position: -5px -5px;

    .logo {
      width: 600px;
    }
  }

  .login-right {
    background: vars.$color-vue-light;
    display: flex;
    align-items: center;
    .form{
      width: 300px;
      margin: auto;
    }
  }
}
</style>