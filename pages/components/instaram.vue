<template>
  <div class="instaram">
    <part-title :title="`INSTAGRAM(抓拍)`"></part-title>
    <ul class="flex flex-wrap justify-content-space-around">
      <li v-for="item in imageList" :key="item.id" class="img-hover-scale">
        <img width="80" height="80" :src="item.image" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageList: [
        {
          id: 1,
          image:
            'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-1.jpg?versionId=CAEQGRiBgMDwhfuR5xciIDQ3NTBjYmE3Y2EzMjRiYjhhZjYyYWE4MTUwZjA4YWQw',
        },
        {
          id: 2,
          image:
            'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-1.jpg?versionId=CAEQGRiBgMDwhfuR5xciIDQ3NTBjYmE3Y2EzMjRiYjhhZjYyYWE4MTUwZjA4YWQw',
        },
        {
          id: 3,
          image:
            'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-1.jpg?versionId=CAEQGRiBgMDwhfuR5xciIDQ3NTBjYmE3Y2EzMjRiYjhhZjYyYWE4MTUwZjA4YWQw',
        },
        {
          id: 4,
          image:
            'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-1.jpg?versionId=CAEQGRiBgMDwhfuR5xciIDQ3NTBjYmE3Y2EzMjRiYjhhZjYyYWE4MTUwZjA4YWQw',
        },
        {
          id: 5,
          image:
            'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-1.jpg?versionId=CAEQGRiBgMDwhfuR5xciIDQ3NTBjYmE3Y2EzMjRiYjhhZjYyYWE4MTUwZjA4YWQw',
        },
        {
          id: 6,
          image:
            'https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-1.jpg?versionId=CAEQGRiBgMDwhfuR5xciIDQ3NTBjYmE3Y2EzMjRiYjhhZjYyYWE4MTUwZjA4YWQw',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.instaram {
  padding: 50px 10px;
  font-family: 'Radley', serif;
}

img {
  margin: 12px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
