<template>
  <div class="container">
    <div style="margin: 20px 60px">
      <el-button>增加</el-button>
    </div>
    <custom-table
      :columns="imageManageColumsData"
      height="calc(100vh - 150px)"
      :table-data="tabelData"
    >
      <slot slot-scope="content">
        <el-button type="text" @click="_onPublish(content.row)">
          发布
        </el-button>
        <el-button type="text" @click="_onEditor(content.row)">
          编辑
        </el-button>
        <el-button type="text" @click="_onDelete(content.row)">
          删除
        </el-button>
      </slot>
    </custom-table>
  </div>
</template>
<script>
import { imageManageColumsData } from '@/utils/columnsData'
export default {
  data() {
    return {
      imageManageColumsData,
      tabelData: [
        {
          image: '11',
        },
      ],
    }
  },
  methods: {
    _onPublish() {},
    _onEditor() {},
    _onDelete() {},
  },
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
