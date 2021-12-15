<template>
  <div class="lastestTweets">
    <part-title :title="`TWEETS（推文）`"></part-title>
    <ul>
      <li
        v-for="item in archivesList"
        :key="item.id"
        class="archivesItem li-border"
      >
        <nuxt-link to="/">
          <i class="fa fa-github"></i>
          <span>{{ item.title }}</span>
          <span class="position">{{ item.position }}</span>
          <span>{{ item.time }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      archivesList: [
        {
          id: 0,
          title: 'Buy Ultranews - HTML template on',
          time: 'Apr 9, 2020',
          position: '@ThemeForest',
        },
        {
          id: 1,
          title: 'Buy Ultranews - HTML template on',
          time: 'Apr 9, 2020',
          position: '@ThemeForest',
        },
        {
          id: 2,
          title: 'Buy Ultranews - HTML template on',
          time: 'Apr 9, 2020',
          position: '@ThemeForest',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.lastestTweets {
  padding: 50px;
  font-family: 'Radley', serif;
}

.position,
.fa {
  color: var(--blue-color);
}

.archivesItem {
  padding: 10px;
}

a {
  font-size: 18px;
}
</style>
