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
                    formId="dates"
                    formKey="date"
                    label="日期"
                    prepend-icon="mdi-calendar"
                    :validation="[
                      { rule: 'required', message: '日期为必选项.' }
                    ]"
                    defaultValue="2021-09-11"
                  >&lt;/z-date-picker>
                &lt;/v-col>

                &lt;v-col>
                  &lt;z-date-picker
                    formId="dateRange"
                    formKey="date"
                    label="日期范围"
                    prepend-icon="mdi-calendar"
                    range
                    :validation="[
                      { rule: 'required', message: '日期范围为必选项.' }
                    ]"
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
              formId="dates"
              formKey="date"
              label="日期"
              prepend-icon="mdi-calendar"
              :validation="[
                { rule: 'required', message: '日期为必选项.' }
              ]"
              defaultValue="2021-09-11"
            ></z-date-picker>
          </v-col>

          <v-col>
            <z-date-picker
              formId="dateRange"
              formKey="date"
              label="日期范围"
              prepend-icon="mdi-calendar"
              range
              :validation="[
                { rule: 'required', message: '日期范围为必选项.' }
              ]"
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

    data() {
      return {
        hobbyOptions: [
          { label: '游泳', value: 1 },
          { label: '网球', value: 2 },
          { label: '乒乓球', value: 3 },
          { label: '羽毛球', value: 4 }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>