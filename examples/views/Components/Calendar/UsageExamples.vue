<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-calendar 
                @change:year="onChangeYear"
                @change:month="onChangeMonth"
                @previous:month="onPreviousMonth"
                @next:month="onNextMonth"
                @back:today="onBackToday"
                @change="onChange"
              >&lt;/z-calendar>
            &lt;/template>

            &lt;script>
              export default {
                methods: {
                  onChangeYear(value) {
                    console.log(value)
                  },
                  
                  onChangeMonth(value) {
                    console.log(value)
                  },

                  onPreviousMonth(value) {
                    console.log(value)
                  },

                  onNextMonth(value) {
                    console.log(value)
                  },

                  onBackToday(value) {
                    console.log(value)
                  },

                  onChange(event, items) {
                    const { customValue } = event
                    console.log(customValue)
                    console.log(items)
                  }
                }
              }
            &lt;/script>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <div>
          <z-calendar 
            clearSelectedItems
            disabledGray
            @change:year="onChangeYear"
            @change:month="onChangeMonth"
            @change:date="onChangeDate"
            @previous:month="onPreviousMonth"
            @next:month="onNextMonth"
            @back:today="onBackToday"
            @change="onChange"
          ></z-calendar>
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
        
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onChangeYear(value) {
        // console.log(value)
      },
      
      onChangeMonth(value) {
        // console.log(value)
      },

      onChangeDate(value) {
        console.log(value)
      },

      onPreviousMonth(value) {
        // console.log(value)
      },

      onNextMonth(value) {
        // console.log(value)
      },

      onBackToday(value) {
        // console.log(value)
      },

      onChange(item) {
        console.log(item)
      }
    }
  }
</script>