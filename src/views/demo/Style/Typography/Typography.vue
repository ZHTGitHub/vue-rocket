<template>
  <div class="demo-typography z-flex flex-wrap">
    <template v-for="(items, index) in typography">
      <table class="api-table" :key="`typography_${ index }`">
        <thead>
          <tr>
            <th>类名</th>
            <th>效果</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, i) in items" :key="`typography_${ i }`">
            <td>{{ item.class }}</td>
            <td>{{ item.label }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
  import { typography } from './cells'

  export default {
    name: 'DemoStyleTypography',
    data() {
      return {
        typography
      }
    }
  }
</script>

<style scoped>

</style>