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
    <BaseCheckbox v-model="lovingVue"  />
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
        lovingVue: 1,
        controllerOptions: {
          tabArr: [
            {
              label: '激活码',
              key: 'list',
              url: '/code/index/list',
            },
            {
              label: '广告图',
              key: 'banner',
              url: '/code/index/banner',
            }
          ],
          primaryText: '添加会员',
          form: {}
        }
      }
    },
    created() {
    },
    methods: {
      xxx(value){
        console.info(this.lovingVue)
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

