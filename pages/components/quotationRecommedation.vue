<template>
  <div class="quotationRecommedation">
    <part-title :title="`QUOTATIONS（语录推荐）`"></part-title>
    <ul>
      <li
        v-for="(item, index) in quotationRecommedation"
        :key="item.id"
        class="flex li-border"
      >
        <div class="index">{{ index + 1 }}.</div>
        <div>
          <p>{{ item.content }}</p>
          <p class="works">
            ——<span>{{ item.works }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quotationRecommedation: [
        {
          id: 0,
          content: 'If You Only Read A Few Books In 2020, Read These',
          author: 'testts',
          works: '<<三体>>',
        },
        {
          id: 1,
          content: 'If You Only Read A Few Books In 2020, Read These',
          author: 'testts',
          works: '<<三体>>',
        },
        {
          id: 2,
          content: 'If You Only Read A Few Books In 2020, Read These',
          author: 'testts',
          works: '<<三体>>',
        },
        {
          id: 3,
          content: 'If You Only Read A Few Books In 2020, Read These',
          author: 'testts',
          works: '<<三体>>',
        },
        {
          id: 4,
          content: 'If You Only Read A Few Books In 2020, Read These',
          author: 'testts',
          works: '<<三体>>',
        },
      ],
    }
  },
}
</script>
<style scoped>
.quotationRecommedation {
  font-family: 'Radley', serif;
  margin-top: 50px;
}
.index {
  font-family: serif;
  font-style: italic;
  font-size: 30px;
  margin: 0 15px !important;
  text-align: center;
}
.works {
  text-align: right;
  font-size: 12px;
  color: var(--grey-font-color);
}
li {
  padding-right: 15px;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
</style>
