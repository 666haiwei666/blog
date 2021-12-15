<template>
  <div class="sildeBar">
    <ul>
      <li
        v-for="(item, index) in sildeList"
        :key="index"
        :class="{ active: activeIndex == index }"
      >
        <nuxt-link :to="item.path"> {{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 1,
      sildeList: [
        {
          title: '标签管理',
          path: '/backstage/tagManage',
        },
        {
          title: '分类管理',
          path: '/backstage/categoryManage',
        },
        {
          title: '语录管理',
          path: '/backstage/quotationsManage',
        },
        {
          title: '文章管理',
          path: '/backstage/articleMangae',
        },
        {
          title: '抓拍管理',
          path: '/backstage/imageManage',
        },
        {
          title: '个人信息管理',
          path: '/backstage/userInfo',
        },
      ],
    }
  },
}
</script>

<style scoped>
.sildeBar {
  width: 256px;
  height: calc(100vh - 120px);
  border-right: 1px solid var(--grey-border-color);
}
li {
  line-height: 40px;
  padding: 0 20px;
  color: var(--grey-font-color);
}
.active {
  color: var(--theme-color);
}
.nuxt-link-exact-active {
  color: var(--theme-color);
}
</style>
