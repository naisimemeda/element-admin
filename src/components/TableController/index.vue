<template>
  <div class="table__controller">
    <el-button v-if="options.primary && closePrimary === false" class="primary__btn" size="small" type="success" @click.stop="$emit('primary')">
      {{ options.primaryText || '未定义' }}
    </el-button>
    <el-tabs v-model="activeName" @tab-click="handleChange">
      <el-tab-pane
        v-for="item in options.tabArr"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
      </el-tab-pane>
    </el-tabs>
    <div v-if="options.form">
      <slot />
      <el-button-group v-if="closeSearch">
        <el-button type="primary" @click.stop="$emit('search')">搜索</el-button>
        <el-button @click.stop="$emit('cancel')">取消</el-button>
      </el-button-group>
      <el-button v-if="closeExport" type="success" @click.stop="$emit('export')">导出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => ({
        tabArr: [{ label: '未定义', key: '0' }]
      })
    },
    closeExport: {
      type: Boolean,
      default: false
    },
    closePrimary: {
      type: Boolean,
      default: false
    },
    closeSearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeName: ''
    }
  },
  created() {
    if (!this.options.activeName) {
      this.activeName = this.options.tabArr[0].key
    }
    if(this.$route.query.table) {
      this.activeName = this.$route.query.table;
    }
  },
  methods: {
    handleChange(val) {
      let table = this.options.tabArr[val.index].url
      let urlTable = `${table}?table=${val.name}`
      this.$router.push(urlTable)
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-tabs__header {
  margin: 0 0 8px;
}
.table__controller {
  box-sizing: border-box;
  padding: 10px 0;
  position: relative;
}
.primary__btn {
  position: absolute;
  z-index: 99;
  top: 10px;
  right: 14px;
}
</style>
