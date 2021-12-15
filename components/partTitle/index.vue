<template>
  <div class="partTitle">
    <h5>{{ title }}</h5>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.partTitle {
  font-family: 'Radley', serif;
  padding: 5px 0 30px 0;
  h5 {
    font-size: 24px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 50px;
      display: inline-block;
      height: 1px;
      background: var(--black-color);
    }
  }
}
</style>
