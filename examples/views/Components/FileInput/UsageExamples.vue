<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-file-input
                formId="files"
                formKey="file"
                label="File input"
              >
              &lt;/z-file-input>
            &lt;/template>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <!-- action="http://113.106.108.93:13000/api/pro-config/sys-template/update-images" -->

        <z-file-input
          formId="files"
          formKey="file"
          prependIcon="mdi-file-excel-outline"
          action="http://113.106.108.93:13000/api/pro-config/sys-template/update-images"
          :effectData="{ 
            sysProTempId: '900709761157169152',
            proCode: 2
          }"
          :fileList="[
            {
              url: '',
              name: 'demo.png'
            },
            {
              url: '',
              name: 'demo1.png'
            },
          ]"
          name="tempImages"
          label="File input"
          parcel
          :multiple="false"
          :deleteIcon="false"
          @response="onResponse"
          @delete="onRemove"
        >
        </z-file-input>
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
        
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onResponse(result) {
        console.log(result)
      },

      onRemove(event) {
        console.log(event)
      }
    }
  }
</script>