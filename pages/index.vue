<template>
  <div class="content">
    <section>
      <recent-articles></recent-articles>
    </section>
    <div class="content-collection row">
      <div class="col-lg-3 left-sidbar">
        <category class="wow fadeInUp"></category>
        <quotation-recommedation class="wow fadeInUp"></quotation-recommedation>
        <comments class="wow fadeInUp"></comments>
      </div>
      <div class="collection col-lg-9">
        <div class="row">
          <div class="col-lg-8 main-content wow fadeInUp">
            <section class="mt-50">
              <articel-list></articel-list>
            </section>
            <section class="mb-50">
              <pageination></pageination>
            </section>
            <!-- <reply></reply> -->
          </div>
          <div class="col-lg-4 right-sidbar">
            <section>
              <user-info class="wow fadeInUp"></user-info>
            </section>
            <section>
              <tag-clound class="wow fadeInUp"></tag-clound>
            </section>
          </div>
        </div>
        <footer>
          <div class="bottom row">
            <section>
              <archives-list class="col-lg-4 wow fadeInUp"></archives-list>
            </section>
            <section>
              <lastest-tweets class="col-lg-4 wow fadeInUp"></lastest-tweets>
            </section>
            <section>
              <instaram class="col-lg-4 wow fadeInUp"></instaram>
            </section>
          </div>
          <section>
            <copyright class="wow fadeInUp"></copyright>
          </section>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import articelList from './components/articleList.vue'
import quotationRecommedation from '@/pages/components/quotationRecommedation.vue'
import recentArticles from '@/pages/components/recentArticles.vue'
import archivesList from '@/pages/components/archives.vue'
import lastestTweets from '@/pages/components/lastestTweets.vue'
import instaram from '@/pages/components/instaram.vue'
import copyright from '@/pages/components/copyright.vue'
import comments from '@/pages/components/comments.vue'
import userInfo from '@/pages/components/userInfo.vue'
import tagClound from '@/pages/components/tagclound.vue'
import category from '@/pages/components/category.vue'
import reply from '@/components/reply/index.vue'
export default {
  components: {
    quotationRecommedation,
    recentArticles,
    archivesList,
    lastestTweets,
    instaram,
    copyright,
    comments,
    userInfo,
    tagClound,
    category,
    reply,
    articelList,
  },
  mounted() {
    $(document).ready(() => {
      new WOW().init()
    })
  },
}
</script>

<style lang="scss" scoped>
.content-collection {
  border-top: 1px solid var(--grey-border-color);
  .bottom {
    border-top: 1px solid var(--grey-border-color);
  }
  .right-sidbar {
    border-left: 1px solid var(--grey-border-color);
  }
}
.collection {
  border-left: 1px solid var(--grey-border-color);
}
</style>
