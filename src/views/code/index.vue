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
    <BaseCheckbox :checked.sync="lovingVue" />
  </div>
</template>

<script>
  import BaseCheckbox from './base-checkbox'
  export default {
    name: 'index',
    watch : {
      lovingVue(val){
        console.info(val)
      }
    },
    components: {
      BaseCheckbox
    },
    data() {
      return {
        activeName: 'list',
        lovingVue: "",
        controllerOptions: {
          tabArr: [
            {
              label: '激活码',
              key: 'code',
              name: 'code',
            },
            {
              label: '广告图',
              key: 'banner',
              name: 'bannerList',
            }
          ],
          primaryText: '添加会员',
          form: {}
        }
      }
    },
    created() {
      this.hah()
    },
    methods: {
      xxx(value){
        console.info(this.lovingVue)
      },
      hah(){
        this.lovingVue = "dasd"
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

