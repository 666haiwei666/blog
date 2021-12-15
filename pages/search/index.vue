<template>
  <div class="page-search">
    <section class="search-input">
      <search-input @on-input-search="onInputSearch"></search-input>
    </section>
    <div class="content full flex content-center">
      <section class="articleList">
        <articel-list></articel-list>
      </section>
    </div>
  </div>
</template>

<script>
import articelList from './components/articleList.vue'
import searchInput from '@/components/searchInput/index.vue'
export default {
  components: {
    searchInput,
    articelList,
  },
  mounted() {
    new WOW().init()
  },
  methods: {
    onInputSearch(val) {
      if (val.length > 0) {
        $('.search-input').animate({ marginTop: '0' })
      }
      $('.search-input').css({ marginTop: '200px' })
    },
  },
}
</script>
<style scoped>
.page-search {
  overflow: hidden;
}
.search-input {
  margin-top: 200px;
}
.articleList {
  max-width: 917px;
}
.content {
  margin-top: 60px;
}
</style>
