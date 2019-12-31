<template>
  <el-dialog title="查看会员" :visible.sync="visible" @close="$emit('update:show', false)" width="1050px">
    <TableController :options="controllerOptions" />
    <router-view />
  </el-dialog>
</template>
<script>
  export default {
    name: 'Modal',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      show() {
        this.visible = this.show;
      }
    },
    data() {
      return {
        visible: this.show,
        controllerOptions: {
          tabArr: [
            {
              label: '记录',
              key: 'list',
              url: '/code/list',
            },
            {
              label: '广告图',
              key: 'banner',
              url: '/code/list/haha',
            }
          ],
          primaryText: '添加会员',
          form: {}
        },
      }
    },
    created() {
    }
  }
</script>
