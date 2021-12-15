<template>
  <div class="backstage flex">
    <section class="sildeBar">
      <silde-bar></silde-bar>
    </section>
    <section class="content-view">
      <content-view></content-view>
    </section>
  </div>
</template>
<script>
import sildeBar from './backstage/components/slideBar.vue'
import contentView from './backstage/components/content.vue'
export default {
  components: {
    sildeBar,
    contentView,
  },
}
</script>
<style scoped>
.content-view {
  flex: 1;
}
</style>
