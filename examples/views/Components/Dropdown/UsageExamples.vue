<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-dropdown
                color="primary"
                offset-y
                :options="menusOptions"
              >
                下拉菜单
                &lt;v-icon>mdi-chevron-down&lt;/v-icon>
              &lt;/z-dropdown>
            &lt;/template>

            &lt;script>
              export default {
                data() {
                  return {
                    menusOptions: [
                      { value: 1, label: '牛扒' },
                      { value: 2, label: '猪扒' },
                      { value: 3, label: '鸡扒' }
                    ]
                  }
                }
              }
            &lt;/script>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <div class="z-flex">
          <z-dropdown
            color="primary"
            offset-y
            :options="menusOptions"
          >
          下拉菜单
          <v-icon>mdi-chevron-down</v-icon>
          </z-dropdown>
        </div>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        menusOptions: [
          { value: 1, label: '牛扒' },
          { value: 2, label: '猪扒' },
          { value: 3, label: '鸡扒' }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>