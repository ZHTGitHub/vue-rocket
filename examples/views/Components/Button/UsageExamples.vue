<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-btn
                class="mr-4"
                color="primary"
              >默认按钮&lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                color="primary"
                disabled
              >禁用按钮&lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                btnType="modify"
                color="success"
              >
                &lt;v-icon left>
                  mdi-pencil
                &lt;/v-icon>
                编辑
              &lt;/z-btn>

              &lt;z-btn
                class="mr-4"
                color="warning"
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

        <div class="mb-4">
          <z-btn
            class="mr-4"
            formId="formId"
            color="primary"
            block
          >块级按钮</z-btn>
        </div>

        <div class="z-flex">
          <z-btn
            class="mr-4"
            formId="formId"
            color="normal"
          >默认按钮</z-btn>

          <z-btn
            class="mr-4"
            formId="formId"
            color="primary"
          >主要按钮</z-btn>

          <z-btn
            class="mr-4"
            formId="formId"
            color="error"
          >报错按钮</z-btn>

          <z-btn
            class="mr-4"
            formId="formId"
            color="warning"
          >警告按钮</z-btn>

          <z-btn
            class="mr-4"
            formId="formId"
            color="success"
          >成功按钮</z-btn>

          <z-btn
            class="mr-4"
            formId="formId"
            color="primary"
            disabled
          >禁用按钮</z-btn>

          <z-btn
            class="mr-4"
            formId="formId"
            color="cyan"
          >
            <v-icon left>
              mdi-pencil
            </v-icon>
            编辑
          </z-btn>

          <z-btn
            class="mr-4"
            formId="formId"
            color="warning"
            icon
          >
            <v-icon>mdi-thumb-up</v-icon>
          </z-btn>

          <z-btn
            formId="formId"
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