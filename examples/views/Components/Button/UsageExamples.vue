<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-btn
                class="mr-4"
                color="normal"
              >默认按钮&lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                color="primary"
              >主要按钮&lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                color="error"
              >报错按钮&lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                color="warning"
              >警告按钮&lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                color="success"
              >成功按钮&lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                color="primary"
                disabled
              >禁用按钮&lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                color="primary"
                outlined
              >
                &lt;v-icon left>
                  mdi-pencil
                &lt;/v-icon>
                编辑
              &lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                color="primary"
                icon
              >
                &lt;v-icon>mdi-thumb-up&lt;/v-icon>
              &lt;/z-btn>

              &lt;z-btn
                color="error"
                small
                fab
              >
                &lt;v-icon>mdi-heart&lt;/v-icon>
              &lt;/z-btn>
            &lt;/template>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <div class="z-flex">
          <z-btn
            class="mr-4"
            color="normal"
          >默认按钮</z-btn>

          <z-btn
            class="mr-4"
            color="primary"
          >主要按钮</z-btn>

          <z-btn
            class="mr-4"
            color="error"
          >报错按钮</z-btn>

          <z-btn
            class="mr-4"
            color="warning"
          >警告按钮</z-btn>

          <z-btn
            class="mr-4"
            color="success"
          >成功按钮</z-btn>

          <z-btn
            class="mr-4"
            color="primary"
            disabled
          >禁用按钮</z-btn>

          <z-btn
            class="mr-4"
            color="primary"
            outlined
          >
            <v-icon left>
              mdi-pencil
            </v-icon>
            编辑
          </z-btn>

          <z-btn
            class="mr-4"
            color="primary"
            icon
          >
            <v-icon>mdi-thumb-up</v-icon>
          </z-btn>

          <z-btn
            color="error"
            small
            fab
          >
            <v-icon>mdi-heart</v-icon>
          </z-btn>
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

    mounted() {
      Prism.highlightAll()
    }
  }
</script>