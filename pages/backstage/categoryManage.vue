<template>
  <div class="block">
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :expand-on-click-node="false"
      :render-content="renderContent"
    >
    </el-tree>
  </div>
</template>

<script>
let id = 1000

export default {
  data() {
    const data = [
      {
        id: 1,
        label: '旅游',
      },
      {
        id: 2,
        label: '前端',
        children: [
          {
            id: 5,
            label: 'js',
          },
          {
            id: 6,
            label: 'css',
          },
        ],
      },
      {
        id: 3,
        label: '阅读',
      },
    ]
    return {
      data: JSON.parse(JSON.stringify(data)),
    }
  },

  methods: {
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },

    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex((d) => d.id === data.id)
      children.splice(index, 1)
    },

    renderContent(h, { node, data }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(data)}
            >
              插入节点
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              删除节点
            </el-button>
          </span>
        </span>
      )
    },
  },
}
</script>

<style>
.block {
  padding: 30px 20px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}
</style>
