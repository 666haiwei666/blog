<template>
  <div class="comments">
    <part-title :title="`COMMENTS(最近评论)`"></part-title>
    <ul>
      <li
        v-for="item in commentsList"
        :key="item.id"
        class="commentsItem li-border"
      >
        <div class="flex">
          <span class="icon">
            <i class="ti-comment"></i>
          </span>
          <div>
            <span>
              <nuxt-link to="/">
                {{ item.content }}
              </nuxt-link>
            </span>
            <p class="des flex justify-content-space-between">
              <span>{{ item.time }}</span>
              <span>{{ item.author }}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commentsList: [
        {
          id: 0,
          content:
            '经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考',
          time: '2020年5月11日',
          author: 'Johan',
        },
        {
          id: 1,
          content:
            '经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考',
          time: '2020年5月11日',
          author: 'Johan',
        },
        {
          id: 2,
          content:
            '经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考',
          time: '2020年5月11日',
          author: 'Johan',
        },
        {
          id: 3,
          content:
            '经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考',
          time: '2020年5月11日',
          author: 'Johan',
        },
        {
          id: 4,
          content:
            '经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考',
          time: '2020年5月11日',
          author: 'Johan',
        },
      ],
    }
  },
}
</script>
<style scoped>
.comments {
  font-family: medium;
  line-height: 22px;
}

.commentsItem {
  margin-top: 20px;
  padding-bottom: 5px;
}

.icon {
  display: inline-block;
  margin: 0 15px;
  padding-top: 20px;
}

.des {
  margin: 10px 0 10px 0;
  font-size: 14px;
  color: var(--grey-font-color);
}

a {
  font-size: 16px;
}
</style>
