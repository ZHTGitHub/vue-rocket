<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .api-table {
    display: block;
    margin: 1rem 0;
    border-collapse: collapse;
    overflow-x: auto;
  }

  .api-table tr {
    border-top: 1px solid #dfe2e5;
  }

  .api-table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  .api-table td, .api-table th {
    padding: 8px 18px;
    border: 1px solid #dfe2e5;
    text-align: left;
    font-size: 14px;
  }  
</style>