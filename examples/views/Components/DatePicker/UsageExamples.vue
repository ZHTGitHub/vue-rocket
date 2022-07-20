<template>
  <div class="usage-examples">
    <usage-demo :code="cells.datePickerCode">
      <div slot="demo">
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
  import { mapGetters } from 'vuex'
  import cells from './cells'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        formId: 'DatePickerUsageExample',
        cells
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
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