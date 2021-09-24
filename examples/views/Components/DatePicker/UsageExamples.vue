<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;v-row>
                &lt;v-col>
                  &lt;z-date-picker
                    formId="date"
                    formKey="day"
                    label="日期"
                    prepend-icon="mdi-calendar"
                    :immediate="false"
                    defaultValue="2021-09-11"
                  >&lt;/z-date-picker>
                &lt;/v-col>

                &lt;v-col>
                  &lt;z-date-picker
                    formId="date"
                    formKey="dayRange"
                    label="日期范围"
                    prepend-icon="mdi-calendar"
                    range
                  >&lt;/z-date-picker>
                &lt;/v-col>
              &lt;/v-row>
            &lt;/template>
          </code>
        </pre>
      </div>
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

  export default {
    name: 'UsageExamples',

    mounted() {
      Prism.highlightAll()
    }
  }
</script>