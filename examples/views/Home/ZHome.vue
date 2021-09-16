<template>
  <div class="z-home">
    <main-layout>
      <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>
      
      <h6 class="text-h5">介绍</h6>
      <p class="mb-12 intro"><a target="_blank" href="">Vur Rocket</a> 是一个后台前端解决方案，它基于 <a target="_blank" href="https://cn.vuejs.org/index.html">vue</a> 和 <a target="_blank" href="https://vuetifyjs.com/">vuetify</a> 实现。它使用了最新的前端技术栈，对表单进行全局统一处理，提供了丰富的全局样式，它可以帮助你快速搭建企业级中后台产品原型。</p>
    
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
        <a target="_blank" href="https://router.vuejs.org/zh/">vue-router</a>、
        <a target="_blank" href="https://github.com/vuejs/vue-cli">vue-cli</a>、
        <a target="_blank" href="https://github.com/axios/axios">axios</a> 
        和 
        <a target="_blank" href="https://vuetifyjs.com/">vuetify</a>，提前了解和学习这些知识会对使用本项目有很大的帮助。</p>

        <h6 class="text-h5">安装</h6>
        <v-subheader>使用 vue-rocket 前需预安装vue、vue-router、vuex、vuetify、lodash，否则项目无法正常运行。</v-subheader>
        <pre class="rounded-md line-numbers"><code class="language-bash">{{ install }}</code></pre>
    </main-layout>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

  const install = ` # 安装 vue-rocket
    npm install vue-rocket
  `

  export default {
    name: 'ZHome',

    data() {
      return {
        install
      }
    },

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
  }
</style>