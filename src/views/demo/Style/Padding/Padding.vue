<template>
  <div class="demo-padding z-flex flex-wrap">
    <template v-for="(items, index) in padding">
      <table :key="`padding_${ index }`">
        <thead>
          <tr>
            <th>类名</th>
            <th>效果</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, i) in items" :key="`padding_${ i }`">
            <td>{{ item.class }}</td>
            <td>{{ item.label }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
  import { padding } from './cells'

  export default {
    name: 'DemoStylePadding',
    data() {
      return {
        padding
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