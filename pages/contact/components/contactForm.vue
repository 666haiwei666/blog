<template>
  <div class="contact">
    <div class="row">
      <div class="form-group col-sm-6 mb-30">
        <input
          id="name"
          class="form-control"
          name="name"
          type="text"
          placeholder="姓名"
        />
      </div>
      <div class="form-group col-sm-6 mb-30">
        <input
          id="name"
          class="form-control"
          name="name"
          type="text"
          placeholder="邮箱"
        />
      </div>
    </div>
    <div class="row">
      <div class="form-group col-sm-12 mb-30">
        <input
          id="name"
          class="form-control"
          name="name"
          type="text"
          placeholder="电话"
        />
      </div>
    </div>
    <div class="row">
      <div class="form-group col-lg-12 mb-30">
        <textarea
          id="comment"
          class="form-control w-100"
          name="comment"
          cols="30"
          rows="9"
          placeholder="消息"
        ></textarea>
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
.contact {
  font-family: 'Radley', serif;
  margin: 100px auto;
}
</style>
