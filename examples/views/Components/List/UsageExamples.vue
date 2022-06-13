<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <div class="box">
          <z-text-field 
            formId="list" 
            formKey="list"
            :autofocus="autofocus"
            :defaultValue="value"
            @blur="onBlur"
            @focus="onFocus"
            @input="onInput"
          ></z-text-field>

          <div 
            v-if="show" 
            class="dropdown"
          >
            <z-list 
              :dataSource="list"
              :elevation="1"  
              :defaultValue="value"
              @input="handleInput"
            >
              <template v-slot:default="{ item }">
                <div class="item" style="height: 30px;">
                  {{ item }}
                </div>
              </template>
            </z-list>
          </div>
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
        show: false,
        value: 15,
        autofocus: false
      }
    },

    created() {
      setTimeout(() => {
        for(let i = 0; i < 30; i+=1) {
          this.list.push(i)
        }
      }, 1000)
    },

    mounted() {
      Prism.highlightAll()

      document.body.addEventListener('click', (event) => {
        // event.stopPropagation()

        console.log(event)
        console.log(event.target.nodeName)

        if(event.target.className !== 'item' && event.target.nodeName !== 'INPUT') {
          this.show = false
        }
      })
    },

    methods: {
      onBlur() {
        // this.show = false 
      },

      onFocus() {
        this.show = true
      },

      onInput() {
        this.show = true
        console.log('change')
      },

      handleInput({ item: value }) {
        this.value = value
        this.show = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .box {
    position: relative;

    .dropdown {
      position: absolute;
      width: 300px;
      height: 300px;
      z-index: 1;
    }
  }
</style>