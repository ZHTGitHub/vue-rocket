<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <div class="box">
          <z-text-field 
            formId="list" 
            formKey="list"
            :defaultValue="value"
            @blur="onBlur"
            @focus="onFocus"
          ></z-text-field>

          <z-list 
            v-if="focus"
            :dataSource="list"
            :elevation="1"
            position="absolute"
            width="300"
            :defaultValue="value"
            @input="handleInput"
          >
            <template v-slot:default="{ item }">
              <div style="height: 30px;">
                {{ item }}
              </div>
            </template>
          </z-list>
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

  const code = 
`

`

  export default {
    name: 'UsageExamples',

    data() {  
      return {
        code,
        list: [],
        focus: false,
        value: 15
      }
    },

    created() {
      for(let i = 0; i < 30; i+=1) {
        this.list.push(i)
      }
    },

    mounted() {
      Prism.highlightAll()

      document.addEventListener('click', function(event) {
        console.log(event)
        console.log(event.target.nodeName)
      }, true)
    },

    methods: {
      onBlur() {
        // this.focus = false
      },

      onFocus() {
        this.focus = true
      },

      handleInput({ item: value }) {
        this.value = value
        this.focus = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .box {
    position: relative;
  }
</style>