<template>
  <div class="toasted">
    <typing-title :title="$route.meta.title"></typing-title>
    
    <z-btn class="mr-2" color="success" @click="onSuccess">打开成功消息框</z-btn>
    <z-btn class="mr-2" color="primary" @click="onInfo">打开普通消息框</z-btn>
    <z-btn class="mr-2" color="warning" @click="onWarning">打开警告消息框</z-btn>
    <z-btn class="mr-2" color="error" @click="onError">打开错误消息框</z-btn>
    <z-btn @click="onDynamic">打开动态消息框</z-btn>
  </div>
</template>

<script>
  import Toasted from '../../../../packages/scripts/utils/toasted'

  const customTypes = new Map([
    [200, 'success'],
    [300, 'info'],
    [400, 'warning'],
    [500, 'error']
  ])
  
  const toasted = new Toasted(customTypes)

  export default {
    name: 'Toasted',

    data() {
      return {

      }
    },

    created() {
      
    },

    methods: {
      onSuccess() {
        toasted.success('成功消息提示')
      },

      onInfo() {
        toasted.info('消息提示')
      },

      onWarning() {
        toasted.warning('警告消息提示')
      },

      onError() {
        toasted.error('错误消息提示')
      },

      onDynamic() {
        toasted.dynamic('动态消息提示', 500)
      }
    },
  }
</script>