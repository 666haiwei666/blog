<template>
  <div class="articleItem flex">
    <div class="preview">
      <div class="img-hover-scale">
        <img
          src="https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/news-1.jpg?versionId=CAEQGRiBgMDwhfuR5xciIDQ3NTBjYmE3Y2EzMjRiYjhhZjYyYWE4MTUwZjA4YWQw"
        />
      </div>
    </div>
    <div class="introduction">
      <div>
        <h3 class="title ellipsis-2">
          <a
            >经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议</a
          >
        </h3>
        <p>
          <span>2010年5月12日</span>
          <span>26k字</span>
          <span>30 mins read</span>
        </p>
      </div>
      <span class="description ellipsis-3">
        经验内容仅供参考，如果您需解决具体问题(尤其法经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议经验内容仅供参考，如果您需解决具体问题(尤其法律、医学等领域)，建议律、医学等领域)，建议您详细咨询相关领域专业人士经验内容仅供参考
      </span>
    </div>
  </div>
</template>
<style scoped>
.articleItem {
  margin: 0 10px;
}
.preview > div,
img {
  width: 170px;
  height: 170px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 40px;
}
.title {
  font-family: medium;
  line-height: 30px;
}
.introduction {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.introduction p {
  color: var(--grey-font-color);
}
.description {
  font-size: 14px;
  line-height: 20px;
}
.introduction p:nth-child(2) {
  font-size: 10px;
}
h3 {
  margin-top: 0;
}
</style>
