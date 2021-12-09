<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
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
`

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        defaultValue: []
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    async created() {
      setTimeout(() => {
        this.defaultValue = [
          {
            year: 2021,
            month: 11,
            day: 8
          }
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

      onChangeDate(item, items) {
        console.log(item)
        console.log(items)
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
        this.defaultValue = [
          {
            year: 2021,
            month: 12,
            day: 8
          }
        ]
        console.log(item)
        console.log(items)
      }
    }
  }
</script>