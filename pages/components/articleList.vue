<template>
  <div>
    <div
      v-for="(item, index) in 5"
      :key="index"
      class="article-item wow fadeInUp mb-50"
    >
      <article-item></article-item>
    </div>
  </div>
</template>
<script>
export default {}
</script>
