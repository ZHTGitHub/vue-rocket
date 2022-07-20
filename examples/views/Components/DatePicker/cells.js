const datePickerCode =
`<v-row>
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
`

export default {
  datePickerCode
}