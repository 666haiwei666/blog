<template>
  <div class="reply">
    <h2 class="mb-30">评论</h2>
    <div class="row">
      <div class="form-group col-lg-12 mb-30">
        <textarea
          id="comment"
          class="form-control w-100"
          name="comment"
          cols="30"
          rows="9"
          placeholder="留下你的精彩评论吧！！！！"
        ></textarea>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-sm-6 mb-30">
        <input
          id="name"
          class="form-control"
          name="name"
          type="text"
          placeholder="昵称"
        />
      </div>
      <div class="form-group col-sm-6 mb-30">
        <input
          id="name"
          class="form-control"
          name="name"
          type="text"
          placeholder="昵称"
        />
      </div>
    </div>
    <div class="form-group mb-30">
      <button type="submit" class="button button-contactForm">提交</button>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.reply {
  font-family: 'Radley', serif;
}
</style>
