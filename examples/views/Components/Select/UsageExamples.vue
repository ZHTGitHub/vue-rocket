<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-select
          formId="cities"
          formKey="city"
          label="居住城市"
          :return-object="false"
          :rules="[{ required: true, message: '居住城市为必选项.' }]"
          :options="cityOptions"
          defaultValue="1"
          @blur="handleBlur"
          @change="handleChange"
        ></z-select>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

  const code = 
`
<z-select
  formId="cities"
  formKey="city"
  label="居住城市"
  :rules="[{ required: true, message: '居住城市为必选项.' }]"
  :options="cityOptions"
  :defaultValue="1"
></z-select>
`

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        cityOptions: [
          { label: '广州', value: '1' },
          { label: '深圳', value: 2 },
          { label: '珠海', value: 3 },
          { label: '佛山', value: 4 }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      handleBlur(value) {
        console.log(value)
      },

      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>