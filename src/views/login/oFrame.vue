<style scoped lang="scss">
@use '../../assets/scss/variable.scss' as vars;
  .card {
    position: relative;
    background: vars.$color-vue-deep;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 50vw;
    height: 50vh;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg,vars.$color-vue-deep, green);
  }

  .card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg,vars.$color-vue-deep,vars.$color-vue-light);
    filter: blur(30px);
  }

  .card b {
    position: absolute;
    inset: 6px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .card img {
    position: absolute;
    z-index: 3;
    scale: 0.8;
    opacity: 0.25;
    transition: 0.5s;
  }

  .card:hover img {
    scale: 0.5;
    opacity: 0.9;
    transform: translateY(-70px);
  }

  .card .content {
    /* position: absolute; */
    z-index: 3;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* transform: scale(0);
    transition: 0.5s; */
  }

  .card:hover .content {
    /* transform: scale(1);
    bottom: 25px; */
  }

  .content .title {
    position: relative;
    color: #fff;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
  }

  .content .title span {
    font-weight: 300;
    font-size: 0.70em;
  }

  .content .sci {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 5px;
  }

  .sci li {
    list-style: none;
  }

  .sci li .fa-brands {
    width: 14px;
  }

  .sci li .fa-facebook {
    width: 10px;
  }

  .sci li a {
    position: relative;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    background: rgba(0, 0, 0, 0.2);
    fill: currentColor;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: 0.5s;
  }

  .sci li a:hover {
    fill: currentColor;
    color: rgba(255, 255, 255, 1);
  }
</style>

<template>
  <div class="card">
    <b></b>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
