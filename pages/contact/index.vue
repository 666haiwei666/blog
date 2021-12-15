<template>
  <div class="contact">
    <section class="breadcrumbs">
      <breadcrumbs></breadcrumbs>
    </section>
    <div class="content-collection row">
      <div class="col-lg-3 left-sidbar">
        <recnet-posts></recnet-posts>
      </div>
      <div class="collection col-lg-9">
        <section class="row flex content-center">
          <contact-form class="col-lg-8"></contact-form>
        </section>
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
import breadcrumbs from '../components/breadcrumbs.vue'
import contactForm from './components/contactForm.vue'
import recnetPosts from './components/recentPosts.vue'
import archivesList from '@/pages/components/archives.vue'
import lastestTweets from '@/pages/components/lastestTweets.vue'
import instaram from '@/pages/components/instaram.vue'
export default {
  components: {
    contactForm,
    breadcrumbs,
    archivesList,
    lastestTweets,
    instaram,
    recnetPosts,
  },
}
</script>
<style scoped>
.contact {
  font-family: 'Radley', serif;
}
</style>
