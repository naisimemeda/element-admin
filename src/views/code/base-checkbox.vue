<template>
  <input
    type="number"
    :value="checked"
    @click="xxx(1)"
  >
</template>

<script>
  export default {
    model: {
      prop: 'value',
      event: 'click'
    },
    props: {
      checked: String
    },
    name: 'base-checkbox',
    data(){
      return {

      }
    },
    methods: {
      xxx(val){
        this.$emit('click', 12123)
        console.log(`子组件${val}`)
        return val
      }
    }
  }
</script>
