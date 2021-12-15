<template>
  <div>
    <pre-loading></pre-loading>
    <custom-header></custom-header>
    <Nuxt />
    <scroll-up></scroll-up>
  </div>
</template>
<script>
import customHeader from './components/header.vue'
import scrollUp from './components/scrollUp.vue'

export default {
  components: {
    customHeader,
    scrollUp,
  },
}
</script>
