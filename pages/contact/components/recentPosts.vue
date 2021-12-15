<template>
  <div class="quotationRecommedation">
    <part-title :title="`最近文章`"></part-title>
    <ul>
      <li
        v-for="(item, index) in quotationRecommedation"
        :key="item.id"
        class="flex li-border"
      >
        <div class="index">{{ index + 1 }}.</div>
        <div>
          <p class="des ellipsis-3">{{ item.content }}</p>
          <p class="works mt-15">
            <span>{{ item.works }}</span>
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
          content:
            '经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士',
          works: 'testts',
        },
        {
          id: 1,
          content:
            '经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士',
          works: 'testts',
        },
        {
          id: 2,
          content:
            '经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士',
          works: 'testts',
        },
        {
          id: 3,
          content:
            '经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士',
          works: 'testts',
        },
        {
          id: 4,
          content:
            '经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议您详细咨询相关领域专业人士',
          works: 'testts',
        },
      ],
    }
  },
}
</script>
<style scoped>
.quotationRecommedation {
  font-family: medium;
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
.des {
  line-height: 22px;
}
</style>
