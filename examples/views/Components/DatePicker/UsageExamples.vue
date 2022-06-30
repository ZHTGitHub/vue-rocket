<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-btn
          color="primary"
          @click="getDate"
        >获取日期
        </z-btn>

        <v-row>
          <v-col>
            <z-date-picker
              :formId="formId"
              formKey="day"
              label="日期"
              prepend-icon="mdi-calendar"
              picker-type="month"
              :immediate="true"
              defaultValue="2021-08-31"
              @confirm="confirmDate"
              @input="handleInput"
            ></z-date-picker>
          </v-col>

          <v-col>
            <z-date-picker
              :formId="formId"
              formKey="dayRange"
              :immediate="true"
              label="日期范围"
              prepend-icon="mdi-calendar"
              range
              :defaultValue="['2021-08-31', '2021-09-18']"
              @confirm="confirmDate"
              @input="handleInput"
            ></z-date-picker>
          </v-col>

          <v-col>
            <z-date-picker
              :formId="formId"
              formKey="time"
              label="时间"
              format="24hr"
              :immediate="false"
              mode="time"
              prepend-icon="mdi-alarm"
              time-use-seconds
              time-format="24hr"
              defaultValue=""
              @confirm="confirmDate"
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

  import { mapGetters } from 'vuex'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        formId: 'DatePickerUsageExample',
        code
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      getDate() {
        console.log(this.forms[this.formId])
      },

      confirmDate(value) {
        console.log(value)
      },

      handleInput(value) {
        console.log(value)
      }
    },

    computed: {
      ...mapGetters(['forms'])
    }
  }
</script>