<template>
  <div class="z-home">
    <div class="container">
      <typing-title :title="$route.meta.title"></typing-title>
  
      <h6 class="text-h5">介绍</h6>

      <p class="mb-12 intro">
        <a target="_blank" href="https://www.npmjs.com/package/vue-rocket">Vue Rocket</a> 
        是一个后台前端解决方案，它基于 
        <a target="_blank" href="https://cn.vuejs.org/index.html">vue</a> 和
        <a target="_blank" href="https://vuetifyjs.com/">vuetify</a> 实现；统一管理表单数据，常用JS方法封装，提供丰富的全局样式；它可以帮助你快速搭建企业级中后台产品。</p>
    
      <h6 class="text-h5">前序准备</h6>

      <p class="mb-12">
        你需要在本地安装 
        <a target="_blank" href="https://nodejs.org/">node</a> 
        和 
        <a target="_blank" href="https://git-scm.com/">git</a>。
        本项目技术栈基于 
        <a target="_blank" href="https://es6.ruanyifeng.com/">ES2015+</a>、
        <a target="_blank" href="https://cn.vuejs.org/index.html">vue</a>、
        <a target="_blank" href="https://vuex.vuejs.org/zh-cn/">vuex</a>、
        <a target="_blank" href="https://github.com/vuejs/vue-cli">vue-cli</a>
        和 
        <a target="_blank" href="https://vuetifyjs.com/">vuetify</a>，提前了解和学习这些知识会对使用本项目有很大的帮助。</p>

        <h6 class="text-h5">安装</h6>
        <pre><code class="language-md">npm i vue-rocket</code></pre>

        <p>使用&nbsp;<a target="_blank" href="https://www.npmjs.com/package/vue-rocket">Vue Rocket</a>&nbsp;前需预安装&nbsp;
          <a target="_blank" href="https://cn.vuejs.org/index.html">vue</a>、
          <a target="_blank" href="https://vuex.vuejs.org/zh-cn/">vuex</a>、
          <a target="_blank" href="https://vuetifyjs.com/">vuetify</a>， 
          否则项目无法正常运行。</p>

      <p>安装完 vue-rocket 需在项目的状态管理引入管理表单的 forms</p>
        
      <div class="pl-4 pb-12">
        <img src="../../../public/images/home/forms.jpg">
      </div>
    </div>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism.css'

  export default {
    name: 'ZHome',

    mounted() {
      Prism.highlightAll()
    },
    
    components: {
      'main-layout': () => import('../../layouts/MainLayout')
    }
  }
</script>

<style scoped lang="scss">
  .z-home {
    .container {
      margin: 0 auto;
      max-width: 1200px;
    }

    h6 {
      padding-bottom: 4px;
      border-bottom: 1px solid rgba($color: #000000, $alpha: .12);
    }

    p {
      padding: 12px 0 12px 24px;
    }

    a {
      color: #67c23a;
      text-decoration: none;
    }

    code {
      display: block;
      margin-left: 16px;
    }
  }
</style>