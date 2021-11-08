<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-calendar 
                clearSelectedItems
                disabledGray
                :defaultValue="[{ id: '2021105' }]"
                @change:year="onChangeYear"
                @change:month="onChangeMonth"
                @change:date="onChangeDate"
                @prev="onPreviousMonth"
                @next="onNextMonth"
                @click:today="onBackToday"
                @select="onSelect"
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

                  onChangeDate(value) {
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

                  onSelect(item) {
                    console.log(item)
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
            :defaultValue="defaultValue"
            @change:year="onChangeYear"
            @change:month="onChangeMonth"
            @change:date="onChangeDate"
            @prev="onPreviousMonth"
            @next="onNextMonth"
            @click:today="onBackToday"
            @select="onSelect"
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
        defaultValue: []
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    async created() {
      setTimeout(() => {
        this.defaultValue = [
          // {
          //   year: 2021,
          //   month: 11,
          //   day: 8
          // }
        ]
      })
    },

    methods: {
      onChangeYear(value) {
        // console.log(value)
      },
      
      onChangeMonth(value) {
        // console.log(value)
      },

      onChangeDate(value) {
        // console.log(value)
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

      onSelect(item, items) {
        console.log(item)
        console.log(items)
      }
    }
  }
</script>