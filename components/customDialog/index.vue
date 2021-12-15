<template>
  <!-- dialog 组件 -->
  <div>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :width="width"
      :fullscreen="fullscreen"
      :close-on-click-modal="false"
      :custom-class="clientWidth ? 'isMobDialog' : ''"
      @close="close"
      @open="open"
    >
      <slot />
      <span v-if="isShowFooter" slot="footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="ok">{{ footersave }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'AlbumClassIficationDialog',
  props: {
    dialogTitle: {
      type: String,
      default: '',
    },
    footersave: {
      type: String,
      default: '确定',
    },
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '50%',
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    isShowFooter: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    clientWidth() {
      if (document.documentElement.clientWidth < 640) {
        return true
      } else {
        return false
      }
    },
  },
  watch: {},
  methods: {
    open() {
      this.$emit('onDialogOpen')
    },
    ok() {
      this.$emit('onDialogOk')
    },
    cancel() {
      this.$emit('onDialogCacel')
    },
    close() {
      this.$emit('onDialogClose')
    },
  },
}
</script>
<style lang="scss">
.isMobDialog {
  width: auto !important;
  .user-container-dialog-form {
    width: 100% !important;
  }
}
.el-dialog {
  position: relative;
  margin: 0 auto 50px;
  border-radius: 2px;
  box-shadow: 0 1px 3px #ccc;
  box-sizing: border-box;
  width: 50%;
}
</style>
