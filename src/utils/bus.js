import Vue from 'vue'
const VueBus = (Vue) => {
  const Bus = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(event, ...args)
      },
      on(event, callback) {
        this.$on(event, callback)
      },
      off(event, callback) {
        this.$off(event, callback)
      }
    }
  })

  Vue.prototype.$bus = Bus
}

export default VueBus
