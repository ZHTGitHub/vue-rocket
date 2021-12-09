<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <v-row>
          <v-col>
            <z-date-picker
              formId="date"
              formKey="day"
              label="日期"
              prepend-icon="mdi-calendar"
              :immediate="false"
              defaultValue="2021-08-31"
            ></z-date-picker>
          </v-col>

          <v-col>
            <z-date-picker
              formId="date"
              formKey="dayRange"
              label="日期范围"
              prepend-icon="mdi-calendar"
              range
              :defaultValue="['2021-08-31', '2021-09-18']"
            ></z-date-picker>
          </v-col>
        </v-row>
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
<v-row>
  <v-col>
    <z-date-picker
      formId="date"
      formKey="day"
      label="日期"
      prepend-icon="mdi-calendar"
      :immediate="false"
      defaultValue="2021-08-31"
    ></z-date-picker>
  </v-col>

  <v-col>
    <z-date-picker
      formId="date"
      formKey="dayRange"
      label="日期范围"
      prepend-icon="mdi-calendar"
      range
      :defaultValue="['2021-08-31', '2021-09-18']"
    ></z-date-picker>
  </v-col>
</v-row>
`

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>