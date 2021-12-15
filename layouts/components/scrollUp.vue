<template>
  <div></div>
</template>
<script>
export default {
  mounted() {
    $(document).ready(() => {
      this.scrollUp()
    })
  },
  methods: {
    scrollUp() {
      $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="ti-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      })
    },
  },
}
</script>
<style>
#scrollUp {
  height: 50px;
  width: 50px;
  right: 31px;
  bottom: 100px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  border-radius: 50%;
  line-height: 48px;
  border: 2px solid transparent;
  background: var(--theme-color);
}
#scrollUp:hover {
  color: #fff;
}
</style>
