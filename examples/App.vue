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
  html, body {
    font-size: 14px !important;
    overflow: hidden !important;
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

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

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
  ::-webkit-scrollbar  
  {  
    width: 5px;  
    height: 5px;  
    background-color: #F5F5F5;  
  }  

  /*定义滚动条轨道 内阴影+圆角*/  
  ::-webkit-scrollbar-track  
  {  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    border-radius: 10px;  
    background-color: #F5F5F5;  
  }    

  /*定义滑块 内阴影+圆角*/  
  ::-webkit-scrollbar-thumb  
  {  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: #bdbdbd;  
  }  
  
  /*滑块效果*/
  ::-webkit-scrollbar-thumb:hover
  {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.4);
  }
</style>