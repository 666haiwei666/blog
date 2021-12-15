<template>
  <div class="category">
    <div>
      <ul>
        <li
          v-for="(item, index) in categoryList"
          :key="index"
          class="li-border categoryItem"
          @click="onClickCategory(item)"
        >
          <nuxt-link
            :to="`#${item.enName}`"
            class="collapsed"
            data-toggle="collapse"
            data-parent="#sidebar"
            aria-expanded="false"
          >
            <span>{{ item.title }}</span>
            <i v-if="item.children" class="fa fa-plus" aria-hidden="true"></i
          ></nuxt-link>
          <template v-if="item.children">
            <div :id="`${item.enName}`" class="collapse sub-category">
              <nuxt-link
                v-for="k in item.children"
                :key="k.id"
                to="/"
                data-parent="/"
                >{{ k.title }}</nuxt-link
              >
            </div>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoryList: [
        {
          id: 1,
          title: '技术',
          enName: 'technology',
          children: [
            {
              id: 4,
              title: '前端',
            },
          ],
        },
        {
          id: 2,
          title: '旅游',
          enName: 'travel',
          children: [
            {
              id: 5,
              title: '杭州',
            },
            {
              id: 6,
              title: '绍兴',
            },
            {
              id: 7,
              title: '上海',
            },
          ],
        },
        {
          id: 8,
          enName: 'read',
          title: '阅读',
        },
      ],
    }
  },
  mounted() {
    $('.categoryItem').click(function () {
      $('#box').animate({ height: '300px' })
    })
  },
}
</script>
<style lang="scss" scoped>
ul {
  width: 100%;
}
a {
  width: 100%;
  display: inline-block;
  padding: 10px 70px;
  background: #f7f8fa;
}
.sub-category {
  a {
    padding: 10px 70px;
    background: #fff;
    border-bottom: 1px solid var(--grey-border-color);
  }
}
</style>
