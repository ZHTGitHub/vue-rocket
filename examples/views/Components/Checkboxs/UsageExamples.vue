<template>
  <div class="usage-examples">
    <usage-demo :code="cells.code">
      <div slot="demo">
        <div class="z-flex align-center">
          <z-btn 
            class="mr-4 mb-2"
            color="primary"
            unlocked
            small
            @click="onToggle"
          >toggle</z-btn>

          <z-btn 
            class="mr-4 mb-2"
            color="primary"
            unlocked
            small
            @click="setDefaultValue"
          >设置默认值</z-btn>

          <z-checkboxs
            formId="hobbies"
            formKey="hobby"
            label="兴趣爱好"
            ref="hobbies"
            :rules="[{ required: true, message: '兴趣爱好为必选项.' }]"
            :options="hobbyOptions"
            :defaultValue="defaultValue"
            @change="selectItems"
          >
          </z-checkboxs>
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
  import cells from './cells'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        cells,
        hobbyOptions: [
          { label: '游泳', value: 1 },
          { label: '网球', value: 2 },
          { label: '乒乓球', value: 3 },
          { label: '羽毛球', value: 4 }
        ],
        defaultValue: [1]
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onToggle() {
        this.$refs.hobbies.onSelectAll()
      },

      setDefaultValue() {
        this.defaultValue = [1, 2]
      },

      selectItems(values) {
        console.log(values)
      }
    }
  }
</script>