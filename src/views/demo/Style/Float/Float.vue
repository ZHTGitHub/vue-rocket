<template>
  <div class="demo-float z-flex flex-wrap">
    <template v-for="(items, index) in float">
      <table :key="`float_${ index }`">
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
  table {
    display: block;
    margin: 0 18px 18px 0;
    border-collapse: collapse;
    overflow-x: auto;
  }

  tr {
    border-top: 1px solid #dfe2e5;
  }

  tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  td, th {
    padding: 8px 18px;
    border: 1px solid #dfe2e5;
  }
</style>