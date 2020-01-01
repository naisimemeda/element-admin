<template>
  <div>
    <Counter :number="xxx" />
  </div>
</template>
<script>
  import Counter from './Bus'
  export default {
    components: {
      Counter
    },
    data() {
      return {
        xxx: 111,
        qqq: 0
      }
    },
    watch: {
      qqq(val) {
        console.log(`哈哈${val}`)
      }
    },
    created() {
      this.$bus.on('update', num => {
        this.qqq = num
      })
    }
  }
</script>
