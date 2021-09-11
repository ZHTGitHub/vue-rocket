<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-checkboxs
                formId="hobbies"
                formKey="hobby"
                label="兴趣爱好"
                :rules="[{ required: true, message: '兴趣爱好为必选项.' }]"
                :options="hobbyOptions"
                :defaultValue="[1]"
              >
              &lt;/z-checkboxs>
            &lt;/template>

            &lt;script>
              export default {
                data() {
                  return {
                    hobbyOptions: [
                      { label: '游泳', value: 1 },
                      { label: '网球', value: 2 },
                      { label: '乒乓球', value: 3 },
                      { label: '羽毛球', value: 4 }
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
          <z-checkboxs
            formId="hobbies"
            formKey="hobby"
            label="兴趣爱好"
            :rules="[{ required: true, message: '兴趣爱好为必选项.' }]"
            :options="hobbyOptions"
            :defaultValue="[1]"
          ></z-checkboxs>
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
        hobbyOptions: [
          { label: '游泳', value: 1 },
          { label: '网球', value: 2 },
          { label: '乒乓球', value: 3 },
          { label: '羽毛球', value: 4 }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>