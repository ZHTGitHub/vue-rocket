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
                :options="directionOptions"
                :defaultValue="3"
              >&lt;/z-btn-toggle>
            &lt;/template>

            &lt;script>
              export default {
                data() {
                  return {
                    directionOptions: [
                      { label: '东', value: 1, icon: 'mdi-arrow-right-bold' },
                      { label: '西', value: 2, icon: 'mdi-arrow-left-bold' },
                      { label: '南', value: 3, icon: 'mdi-arrow-down-bold' },
                      { label: '北', value: 4, icon: 'mdi-arrow-up-bold' }
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
            mandatory
            :options="directionOptions"
            @change="onChange($event)"
            @click="onClick"
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
        directionOptions: [
          { label: '东', value: 1, icon: 'mdi-arrow-right-bold' },
          { label: '西', value: 2, icon: 'mdi-arrow-left-bold' },
          { label: '南', value: 3, icon: 'mdi-arrow-down-bold' },
          { label: '北', value: 4, icon: 'mdi-arrow-up-bold' }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onChange(value) {
        console.log(value)
      },

      onClick(event) {
        const { customValue } = event
        console.log(customValue)
      }
    }
  }
</script>