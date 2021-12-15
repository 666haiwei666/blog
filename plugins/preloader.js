import Vue from 'vue'

Vue.mixin({
  mounted() {
    $(document).ready(() => {
      this.preLoader()
    })
  },
  methods: {
    preLoader() {
      $('.preloader').removeAttr('style')
      setTimeout(() => {
        $('.preloader').fadeOut('slow')
      }, 500)
    },
  },
})
