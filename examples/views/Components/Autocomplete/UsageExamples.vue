<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-autocomplete
                formId="auto"
                formKey="auto"
                :options="cityOptions"
              >&lt;/z-autocomplete>
            &lt;/template>

            &lt;script>
              export default {
                data() {
                  return {
                    cityOptions: [
                      { label: '广州', value: 1 },
                      { label: '深圳', value: 2 },
                      { label: '珠海', value: 3 },
                      { label: '佛山', value: 4 }
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
          <z-autocomplete
            formId="auto"
            formKey="auto"
            :options="cityOptions"
          ></z-autocomplete>
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
        cityOptions: [
          { label: '广州', value: 1 },
          { label: '深圳', value: 2 },
          { label: '珠海', value: 3 },
          { label: '佛山', value: 4 }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>