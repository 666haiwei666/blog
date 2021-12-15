<template>
  <div class="userInfo li-border">
    <div class="avater img-hover-scale">
      <img
        width="100%"
        height="100%"
        src="https://whitepress-blog.oss-cn-beijing.aliyuncs.com/1.0.0/imgs/author.jpg?versionId=CAEQGRiBgMDXh_uR5xciIGYzYTRiM2EwZGY1NzRjMTM5ODNiNjZlNTAyMTg3YmVi"
      />
    </div>
    <h3 class="username">嗨喽，我是前端小c！</h3>
    <p class="author-bio">
      梦想这东西和经典一样，永远不会因为时间而褪色，反而更显珍贵！！！
    </p>
  </div>
</template>
<style scoped>
.userInfo {
  padding: 50px 30px 20px 30px;
  font-family: 'Radley', serif;
  color: var(--black-color);
}
.avater {
  width: 215px;
  height: 215px;
  border-radius: 50%;
  overflow: hidden;
}
.username {
  text-align: center;
}
p {
  font-size: 16px;
  margin-bottom: 15 px;
  font-weight: normal;
  color: var(--grey-font-color);
  text-align: center;
  line-height: 18px;
}
</style>
