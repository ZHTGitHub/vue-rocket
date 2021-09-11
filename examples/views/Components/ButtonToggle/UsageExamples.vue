<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-btn-toggle
                formId="sexuals"
                formKey="sexual"
                color="primary"
                flip
                label="性取向"
                :validation="[
                  { rule: 'required', message: '性取向为必选项.' }
                ]"
                :options="sexualOptions"
                :defaultValue="3"
              >&lt;/z-btn-toggle>
            &lt;/template>

            &lt;script>
              export default {
                data() {
                  return {
                    sexualOptions: [
                      { label: '异性', value: 1, icon: 'mdi-heart-outline' },
                      { label: '同性', value: 2, icon: 'mdi-heart-multiple-outline ' },
                      { label: '双性', value: 3, icon: 'mdi-heart-half-full' },
                      { label: '无性', value: 4, }
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
          <z-btn-toggle
            formId="sexuals"
            formKey="sexual"
            color="primary"
            flip
            label="性取向"
            :validation="[
              { rule: 'required', message: '性取向为必选项.' }
            ]"
            :options="sexualOptions"
            :defaultValue="3"
          ></z-btn-toggle>
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
        sexualOptions: [
          { label: '异性', value: 1, icon: 'mdi-heart-outline' },
          { label: '同性', value: 2, icon: 'mdi-heart-multiple-outline ' },
          { label: '双性', value: 3, icon: 'mdi-heart-half-full' },
          { label: '无性', value: 4, }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>