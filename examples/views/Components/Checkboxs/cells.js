const code = 
`
<div class="z-flex align-center">
  <z-btn 
    class="mr-4 mb-2"
    color="primary"
    small
    @click="onToggle"
  >toggle</z-btn>

  <z-checkboxs
    formId="hobbies"
    formKey="hobby"
    label="兴趣爱好"
    ref="hobbies"
    :rules="[{ required: true, message: '兴趣爱好为必选项.' }]"
    :options="hobbyOptions"
    :defaultValue="[1]"
  >
  </z-checkboxs>
</div>
`

export default {
  code
}