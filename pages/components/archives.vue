<template>
  <div class="archives">
    <part-title :title="`ARCHIVES(归档)`"></part-title>
    <ul>
      <li
        v-for="item in archivesList"
        :key="item.id"
        class="archivesItem li-border"
      >
        <nuxt-link to="/">
          <span>{{ item.time }}</span>
          <span>({{ item.total }})</span>
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
          time: '5月 2020',
          total: 10,
        },
        {
          id: 1,
          time: '4月 2020',
          total: 10,
        },
        {
          id: 2,
          time: '4月 2020',
          total: 10,
        },
        {
          id: 3,
          time: '4月 2020',
          total: 10,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.archives {
  padding: 50px;
  font-family: medium;
  line-height: 22px;
}

.archivesItem {
  padding: 10px;
}

a {
  font-size: 18px;
}
</style>
