export const InfoFormCells = [
  {
    inputType: 'text',
    formKey: 'email',
    label: '邮箱',
    rules: [
      { required: true, message: '邮箱为必填项.' },
      { email: true, message: '邮箱格式不正确.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'number',
    formKey: 'phone',
    label: '手机',
    rules: [
      { required: true, message: '手机为必填项.' },
      { phone: true, message: '手机格式不正确.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'text',
    formKey: 'name',
    label: '姓名',
    rules: [
      { required: true, message: '姓名为必填项.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'number',
    formKey: 'age',
    label: '年龄',
    rules: [
      { required: true, message: '年龄为必填项.' },
      { numeric: true, message: '年龄为正整数.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'select',
    formKey: 'area',
    label: '居住城市',
    rules: [
      { required: true, message: '居住城市为必选项.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'radios',
    formKey: 'gender',
    label: '性别',
    rules: [
      { required: true, message: '请选择性别.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'checkboxs',
    formKey: 'hobby',
    label: '兴趣',
    rules: [
      { required: true, message: '请选择兴趣.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'switch',
    formKey: 'active',
    label: '激活',
    defaultValue: undefined
  }
]