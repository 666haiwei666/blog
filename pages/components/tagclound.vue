<template>
  <div class="tagclound">
    <part-title :title="`TAGCLOUD（标签）`"></part-title>
    <ul class="tagList flex flex-wrap">
      <li v-for="item in tagList" :key="item.id" class="tag">
        <span>{{ item.tagName }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagList: [
        {
          id: 0,
          tagName: 'css',
        },
        {
          id: 1,
          tagName: 'js',
        },
        {
          id: 2,
          tagName: 'html',
        },
        {
          id: 3,
          tagName: 'vue',
        },
        {
          id: 4,
          tagName: 'webpack',
        },
        {
          id: 5,
          tagName: 'node',
        },
        {
          id: 6,
          tagName: '浏览器渲染',
        },
      ],
    }
  },
}
</script>
<style scoped>
.tagclound {
  padding: 30px 0 20px 0;
}
li {
  padding: 10px;
  border-radius: 30px;
}
span {
  display: inline-block;
  padding: 15px 20px;
  border-radius: 30px;
  background: var(--grey-border-color);
  font-size: 13px;
}
</style>
