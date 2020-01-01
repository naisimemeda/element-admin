<template>
  <div>
    {{ number }}
    <button @click="handleEmit"> 传值</button>
  </div>
</template>
<script>
  export default {
    name: 'bus',
    props: {
      number: {
        type: Number,
        default: 1
      }
    },
    created() {
      console.log(this.number)
    },
    methods: {
      handleEmit() {
        let num = Math.floor(Math.random() * 100 + 1 )
        this.$bus.emit('update', num)
      }
    }
  }
</script>
