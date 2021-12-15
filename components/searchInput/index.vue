<template>
  <div class="search-form">
    <div class="search-input flex justify-content-center align-items-center">
      <input
        id="search_field"
        type="text"
        autocomplete="off"
        placeholder="输入关键字进行搜索"
        value=""
        name=""
      />
      <span class="search-icon">
        <i class="ti-book"></i>
        <span>文章</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.onkeyPressEnter()
  },
  methods: {
    onkeyPressEnter() {
      $('#search_field').bind('keypress', (event) => {
        if (event.keyCode === 13) {
          this.$emit('on-input-search', $('#search_field').val())
        }
      })
    },
  },
}
</script>
<style scoped>
.search-input {
  position: relative;
}
.search-icon {
  position: relative;
  right: 76px;
  top: 0;
  color: var(--grey-font-color);
}
.search-icon::before {
  content: '';
  display: inline-block;
  position: absolute;
  left: -20px;
  top: -10px;
  width: 1px;
  height: 40px;
  background: var(--grey-border-color);
}
</style>
