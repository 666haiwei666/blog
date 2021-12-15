<template>
  <div class="preloader full flex content-center">
    <div class="container flex content-center">
      <img width="208" height="137" src="/svgs/logo-light.svg" alt="logo" />
      <h1>WritePress</h1>
      <h6>Now loading...</h6>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.preloader {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  background: var(--theme-color);
}

.container {
  color: var(--white-color);
}
</style>
