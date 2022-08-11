<template>
  <div class="toasted">
    <typing-title :title="$route.meta.title"></typing-title>

    <div>
      <p>
        提示：<span class="text-black">请先在项目中安装 <a class="text-blue" target="__blank" href="https://www.npmjs.com/package/vue-toasted">vue-toasted</a> 并引入；</span> Toasted 封装自 <span class="text-blue">vue-toasted</span> 插件，
        除 <span class="text-italic">toasted.dynamic</span> 第二个参数为“自定义对应 Toasted 类型的值”，其余参数的用法均与 <span class="text-blue">vue-toasted</span> 保持一致。
      </p>
    </div>

    <div class="mt-12">
      <p class="text-black">导入</p>
      <pre><code class="language-javascript" v-text="cells.code"></code></pre>
    </div>

    <div class="mt-12">
      <p class="toasted text-black" @click="openSuccess">打开成功提示/通知</p>
      <pre><code class="language-javascript">toasted.success('I am a Toasted!!', customOptions)</code></pre>
    </div>

    <div class="mt-12">
      <p class="toasted text-black" @click="openInfo">打开普通提示/通知</p>
      <pre><code class="language-javascript">toasted.info('I am a Toasted!!', customOptions)</code></pre>
    </div>

    <div class="mt-12">
      <p class="toasted text-black" @click="openWarning">打开警告提示/通知</p>
      <pre><code class="language-javascript">toasted.warning('I am a Toasted!!', customOptions)</code></pre>
    </div>

    <div class="mt-12">
      <p class="toasted text-black" @click="openError">打开错误提示/通知</p>
      <pre><code class="language-javascript">toasted.error('I am a Toasted!!', customOptions)</code></pre>
    </div>

    <div class="mt-12">
      <p class="toasted text-black" @click="openDynamic">打开动态提示/通知</p>
      <pre><code class="language-javascript">toasted.dynamic('I am a Toasted!!', 200, customOptions)</code></pre>
    </div>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.min.css'
  import Toasted from '../../../../packages/scripts/utils/toasted'
  import cells from './cells'

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
        cells
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      openSuccess() {
        toasted.success('I am a Toasted!!')
      },

      openInfo() {
        toasted.info('I am a Toasted!!')
      },

      openWarning() {
        toasted.warning('I am a Toasted!!')
      },

      openError() {
        toasted.error('I am a Toasted!!')
      },

      openDynamic() {
        toasted.dynamic('I am a Toasted!!', 200)
      }
    }
  }
</script>

<style scoped lang="scss">
    .toasted {
      cursor: pointer;
    }
</style>