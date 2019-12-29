<template>
  <div>
  <div class="container">
      <TableController :options="controllerOptions">
      <div class="search__item">
        <el-input  class="width--120" clearable placeholder="会员手机号" />
      </div>
      </TableController>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'index',
    watch : {
      // activeName(val) {
      //   let urlStr = `/code/index/${val}`
      //   this.$router.push(urlStr)
      // },
    },
    created() {
      if(this.$route.query.table) {
        this.activeName = this.$route.query.table;
      }
    },
    data() {
      return {
        activeName: 'list',
        controllerOptions: {
          tabArr: [
            {
              label: '激活码',
              key: '/code/index/list'
            },
            {
              label: '广告图',
              key: '/code/index/banner'
            }
          ],
          primaryText: '添加会员',
          form: {}
        }
      }
    },
    methods: {
      handleClick(val, event){
        let url = `/code/index/${val.name}?table=${val.name}`
        this.$router.push(url)
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
  .search__item {
    display: inline-block;
    margin-right: 12px;
    margin-top: 8px;
    input {
      max-width: 300px;
    }
  }
</style>

