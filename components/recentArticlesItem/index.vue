<template>
  <div class="recentArticlesItem">
    <div class="flex">
      <div class="recentArticlesItem-left">
        <nuxt-link to="/" class="coverImage img-hover-scale">
          <img width="100%" height="100%" :src="data.coverImage" alt="" />
        </nuxt-link>
      </div>
      <div class="recentArticlesItem-right">
        <h5 class="title ellipsis-2">{{ data.title }}</h5>
        <p>{{ data.time }}</p>
        <p>{{ data.words }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.recentArticlesItem {
  font-family: medium;
}
.recentArticlesItem-right {
  p {
    color: var(--grey-font-color);
  }
}
.recentArticlesItem-left {
  margin-right: 15px;
}
a {
  border-radius: 8px;
  overflow: hidden;
  display: inline-block;
  width: 100px;
  height: 100px;
}
h5 {
  font-size: 24px;
  margin-top: 0;
}
</style>
