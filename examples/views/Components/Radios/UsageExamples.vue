<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-radios
                formId="genders"
                formKey="gender"
                label="性别"
                :rules="[{ required: true, message: '请选择性别.' }]"
                :options="genderOptions"
                :defaultValue="[1]"
              >
              &lt;/z-radios>
            &lt;/template>

            &lt;script>
              export default {
                data() {
                  return {
                    genderOptions: [
                      { label: '男性', value: 1 },
                      { label: '女性', value: 2 }
                    ]
                  }
                }
              }
            &lt;/script>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <z-radios
          formId="genders"
          formKey="gender"
          label="性别"
          :rules="[{ required: true, message: '请选择性别.' }]"
          :options="genderOptions"
          :defaultValue="1"
        >
        </z-radios>
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
        genderOptions: [
          { label: '男性', value: 1 },
          { label: '女性', value: 2 }
        ],
        code: `
          <z-radios
            formId="genders"
            formKey="gender"
            label="性别"
            :rules="[{ required: true, message: '请选择性别.' }]"
            :options="genderOptions"
            :defaultValue="1"
          >
          </z-radios>
        `
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>