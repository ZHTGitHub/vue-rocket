<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-list 
          :dataSource="list"
          :elevation="1"
          @input="handleInput"
        >
          <template v-slot:default="{ item }">
            <div style="height: 30px;">
              {{ item }}
            </div>
          </template>
        </z-list>
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
        list: []
      }
    },

    created() {
      for(let i = 0; i < 30; i+=1) {
        this.list.push(i)
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      handleInput(value) {
        console.log(value)
      }
    }
  }
</script>