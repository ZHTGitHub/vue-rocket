<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-btn 
                class="mr-4 mb-2"
                color="primary"
                small
                @click="onToggle"
              >toggle&lt;/z-btn>

              &lt;z-checkboxs
                formId="hobbies"
                formKey="hobby"
                label="兴趣爱好"
                ref="hobbies"
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
                },

                methods: {
                  onToggle() {
                    this.$refs.hobbies.onSelectAll()
                  }
                }
              }
            &lt;/script>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <div class="z-flex align-center">
          <z-btn 
            class="mr-4 mb-2"
            color="primary"
            small
            @click="onToggle"
          >toggle</z-btn>

          <z-checkboxs
            formId="hobbies"
            formKey="hobby"
            label="兴趣爱好"
            ref="hobbies"
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
    },

    methods: {
      onToggle() {
        this.$refs.hobbies.onSelectAll()
      }
    }
  }
</script>