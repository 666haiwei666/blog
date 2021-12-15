<template>
  <div>
    <div
      v-for="(item, index) in 100"
      :key="index"
      class="article-item wow fadeInUp"
    >
      <article-item></article-item>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.article-item {
  margin-bottom: 50px;
}
</style>
