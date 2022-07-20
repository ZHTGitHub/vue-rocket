const checkboxCode =
`<z-checkbox
  :formId="formId"
  formKey="red"
  label="红色"
  :true-value="true"
  :false-value="false"
  :indeterminate="indeterminate"
  :defaultValue="defaultValue"
>
</z-checkbox>

<z-checkbox
  :formId="formId"
  formKey="blue"
  :true-value="true"
  :false-value="false"
  label="蓝色"
>
</z-checkbox>
`

export default {
  checkboxCode
}