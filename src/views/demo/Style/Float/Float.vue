<template>
  <div class="demo-float z-flex flex-wrap">
    <template v-for="(items, index) in float">
      <table class="mr-4 api-table" :key="`float_${ index }`">
        <thead>
          <tr>
            <th>类名</th>
            <th>效果</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in items" :key="`float_${ index }`">
            <td>{{ item.class }}</td>
            <td>{{ item.label }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
  import { float } from './cells'

  export default {
    name: 'DemoStyleFloat',
    data() {
      return {
        float
      }
    }
  }
</script>

<style scoped>

</style>