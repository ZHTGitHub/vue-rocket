<template>
  <div class="toasted">
    <typing-title :title="$route.meta.title"></typing-title>

    <div>
      <p>
        提示：<span class="text-black">请先在项目中安装 <a class="text-blue" target="__blank" :href="href">vue-toastification</a> 并引入；</span> Toasted 封装自 <span class="text-blue">vue-toastification</span> 插件，
        除 <span class="text-italic">toasted.dynamic</span> 第二个参数为“自定义对应 Toasted 类型的值”，其余参数的用法均与 <span class="text-blue">vue-toastification</span> 保持一致。
      </p>
    </div>

    <div class="mt-12">
      <p class="text-black">导入</p>
      <pre><code class="language-javascript" v-text="code"></code></pre>
    </div>

    <div class="mt-12">
      <p class="text-black">打开成功提示/通知</p>
      <pre><code class="language-javascript">toasted.success('I am a Toasted!!', customOptions)</code></pre>
    </div>

    <div class="mt-12">
      <p class="text-black">打开普通提示/通知</p>
      <pre><code class="language-javascript">toasted.info('I am a Toasted!!', customOptions)</code></pre>
    </div>

    <div class="mt-12">
      <p class="text-black">打开警告提示/通知</p>
      <pre><code class="language-javascript">toasted.warning('I am a Toasted!!', customOptions)</code></pre>
    </div>

    <div class="mt-12">
      <p class="text-black">打开错误提示/通知</p>
      <pre><code class="language-javascript">toasted.error('I am a Toasted!!', customOptions)</code></pre>
    </div>

    <div class="mt-12">
      <p class="text-black">打开动态提示/通知</p>
      <pre><code class="language-javascript">toasted.dynamic('I am a Toasted!!', 200, customOptions)</code></pre>
    </div>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.min.css'

  import Toasted from '../../../../packages/scripts/utils/toasted'

  const customTypes = new Map([
    [200, 'success'],
    [300, 'info'],
    [400, 'warning'],
    [500, 'error']
  ])
  
  const toasted = new Toasted(customTypes)

  const code = 
` import { Toasted } from 'vue-rocket'

  // 自定义对应 Toasted 类型的值
  const customTypes = new Map([
    [200, 'success'],
    [300, 'info'],
    [400, 'warning'],
    [500, 'error']
  ])

  // 默认值
  const defaultOptions = {
    closeButton: 'button',
    closeOnClick: true,
    draggable: true,
    draggablePercent: 0.6,
    hideProgressBar: true,
    icon: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    position: 'top-right',
    rtl: false,
    showCloseButtonOnHover: false,
    timeout: 5000
  }

  // 可直接 const toasted = new Toasted()
  const toasted = new Toasted(customTypes, defaultOptions)

  // 与 vue-toastification 的 options 保持一致
  const customOptions = {}
`

  export default {
    name: 'Toasted',

    data() {
      return {
        href: 'https://vue-toastification.maronato.dev',
        code
      }
    },

    mounted() {
      Prism.highlightAll()
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