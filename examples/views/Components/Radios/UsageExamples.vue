<template>
  <div class="usage-examples">
    <usage-demo :code="code">
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

  const code = 
`
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

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        genderOptions: [
          { label: '男性', value: 1 },
          { label: '女性', value: 2 }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>