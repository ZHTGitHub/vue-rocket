<template>
  <div class="session-storage">
    <typing-title :title="$route.meta.title"></typing-title>

    <div 
      class="rule" 
      v-for="(item, index) in cells.rules"
      :key="`rules_${ index }`"
    >
      <h6 class="text-h5">{{ item.name }}</h6>

      <p 
        v-for="(item, index) in item.intrs"
        :key="`intr_${ index }`"
        class="ma-0 pa-0 py-2"
      >{{ item.text }}</p>

      <h5 class="fw-black">参数</h5>

      <p 
        v-for="(item, index) in item.params"
        :key="`param_${ index }`"
        class="ma-0 pa-0"
      >{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
  import cells from './cells'

  export default {
    name: 'SessionStorage',

    data() {
      return {
        cells
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../style.scss";
</style>