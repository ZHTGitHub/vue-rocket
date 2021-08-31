<template>
  <div class="demo-margin z-flex flex-wrap">
    <template v-for="(items, index) in margin">
      <table class="mr-4 api-table" :key="`margin_${ index }`">
        <thead>
          <tr>
            <th>类名</th>
            <th>效果</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, i) in items" :key="`margin_${ i }`">
            <td>{{ item.class }}</td>
            <td>{{ item.label }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
  import { margin } from './cells'

  export default {
    name: 'DemoStyleMargin',
    data() {
      return {
        margin
      }
    }
  }
</script>

<style scoped>

</style>