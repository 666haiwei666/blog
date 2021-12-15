<template>
  <div class="recent_articles row">
    <recent-articles-item
      v-for="item in recentArticlesList"
      :key="item.id"
      class="col recentArticlesItem"
      :data="item"
    ></recent-articles-item>
  </div>
</template>
<script>
import slickConfig from './slick.config.json'
import recentArticlesItem from '@/components/recentArticlesItem/index.vue'
export default {
  components: {
    recentArticlesItem,
  },
  data() {
    return {
      recentArticlesList: [
        {
          id: 1,
          title:
            '经验内容仅供参考，如果您需解决具体问题(尤其法经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考',
          time: '25 April 2020',
          words: '16K',
          coverImage:
            'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-1.jpg?versionId=CAEQGRiBgMDwhfuR5xciIDQ3NTBjYmE3Y2EzMjRiYjhhZjYyYWE4MTUwZjA4YWQw',
        },
        {
          id: 2,
          title:
            '经验内容仅供参考，如果您需解决具体问题(尤其法经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考',
          time: '25 April 2020',
          words: '16K',
          coverImage:
            'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-2.jpg?versionId=CAEQGRiBgIC8gvuR5xciIGNiYzhkOWRlY2M4YTRlZWU5OTRjYTU3NjRhOWVmZDQ2',
        },
        {
          id: 3,
          title:
            '经验内容仅供参考，如果您需解决具体问题(尤其法经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考',
          time: '25 April 2020',
          words: '16K',
          coverImage:
            'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-5.jpg?versionId=CAEQGRiBgICJh_uR5xciIDhiOWFjZDlkOTEzMjRkZDY4NzY1YzcxZjFjODFjZWE0',
        },
        {
          id: 4,
          title:
            'How to Have a 5-Star Hotel Experience in Paris Without Booking a Room',
          time: '25 April 2020',
          words: '16K',
          coverImage:
            'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-1.jpg?versionId=CAEQGRiBgMDwhfuR5xciIDQ3NTBjYmE3Y2EzMjRiYjhhZjYyYWE4MTUwZjA4YWQw',
        },
        {
          id: 5,
          title:
            '经验内容仅供参考，如果您需解决具体问题(尤其法经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考',
          time: '25 April 2020',
          words: '16K',
          coverImage:
            'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-5.jpg?versionId=CAEQGRiBgICJh_uR5xciIDhiOWFjZDlkOTEzMjRkZDY4NzY1YzcxZjFjODFjZWE0',
        },
        {
          id: 6,
          title:
            '经验内容仅供参考，如果您需解决具体问题(尤其法经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考',
          time: '25 April 2020',
          words: '16K',
          coverImage:
            'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-6.jpg?versionId=CAEQGRiBgICi_fqR5xciIGY4NmVlZjExNjlmYjRmNjlhMzg4NTQ5ZjI2NjYyZTJj',
        },
      ],
    }
  },
  mounted() {
    $('.recent_articles').slick(slickConfig)
  },
}
</script>
<style scoped>
.recent_articles {
  padding: 50px 30px;
}
.recentArticlesItem {
  margin-right: 20px;
}
</style>
