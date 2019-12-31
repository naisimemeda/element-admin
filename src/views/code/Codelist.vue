<template>
  <div class="container">
    <div class="container--shadow">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column align="center" label="ID" width="80" prop="id"/>
          <el-table-column align="center" label="生成时间" width="120" prop="date"/>
          <el-table-column align="center" label="激活码" width="120" prop="code"/>
          <el-table-column align="center" label="使用状态" width="80" prop="status" :formatter="stateFormat"/>
          <el-table-column align="center" label="有效期" width="80" prop="validity"/>
          <el-table-column align="center" label="激活时间" width="120" prop="date"/>
          <el-table-column align="center" label="失效时间" width="120" prop="date"/>
          <el-table-column align="center" label="激活功能" width="100" prop="function"/>
          <el-table-column align="center" label="店铺名称" width="100" prop="shop_name"/>
          <el-table-column align="center" label="手机号" width="100" prop="telephone"/>
          <el-table-column label="操作" align="center" fixed="right" width="125">
            <template slot-scope="scope">
              <el-button size="mini" type="success" @click="modal = true">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      <div>
        <Modal :show.sync="modal"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Modal from './CodeModal'
  export default {
    components: {
      Modal
    },
    watch: {
      modal() {
      }
    },
    data() {
      return {
        modal: false,
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
        },
        tableData: [{
          id: 1,
          date: '2016-05-02',
          code: '213125125612651',
          validity: '1',
          name: '王小虎',
          status: 1,
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          function: '生意参谋',
          shop_name: '店铺',
          telephone: 18584864076,
          zip: 200333
        }, {
          id: 1,
          date: '2016-05-02',
          code: '213125125612651',
          validity: '1',
          name: '王小虎',
          status: 0,
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          function: '生意参谋',
          shop_name: '店铺',
          telephone: 18584864076,
          zip: 200333
        }]
      }
    },
    mounted() {
    },
    methods: {
      handleClick(row) {
        console.log(row)
      }
    },
    // eslint-disable-next-line no-dupe-keys
    methods: {
      stateFormat(row) {
        if (row.status === 1) {
          return '正常'
        } else {
          return '禁用'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
