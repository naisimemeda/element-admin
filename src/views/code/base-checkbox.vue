<template>
  <input
    :value="checked"
    @change="xxx($event.target)"
  >
</template>

<script>
  export default {
    // model: {
    //   prop: 'value',
    //   event: 'change'
    // },
    props: {
      checked: String
    },
    name: 'base-checkbox',
    data(){
      return {

      }
    },
    created() {
      console.log(this.checked)
    },
    methods: {
      xxx(val){
        this.$emit('update:checked', val.value)
      }
    }
  }
</script>
