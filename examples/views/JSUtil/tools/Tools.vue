<template>
  <div class="form-rules">
    <typing-title :title="$route.meta.title"></typing-title>

    <div 
      class="rule" 
      v-for="(item, index) in cells.rules"
      :key="`rules_${ index }`"
    >
      <h6 class="text-h5">{{ item.name }}</h6>
      <p>{{ item.intr }}</p>

      <h5 class="fw-black">参数</h5>

      <p 
        v-for="(item, index) in item.params"
        :key="index"
        class="ma-0 pa-0"
      >{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
  import cells from './cells'

  export default {
    name: 'Tools',

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