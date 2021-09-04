export const InfoFormCells = [
  {
    inputType: 'text',
    formKey: 'email',
    label: '邮箱',
    validation: [
      { rule: 'required', message: '邮箱不能为空.' },
      { rule: 'email', message: '邮箱格式不正确.' },
    ],
    defaultValue: 'chat195@163.com'
  },

  {
    inputType: 'number',
    formKey: 'phone',
    label: '手机',
    validation: [
      { rule: 'required', message: '手机为必填项.' },
      { rule: 'phone', message: '手机格式不正确.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'text',
    formKey: 'name',
    label: '姓名',
    validation: [
      { rule: 'required', message: '姓名为必填项.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'number',
    formKey: 'age',
    label: '年龄',
    validation: [
      { rule: 'required', message: '年龄为必填项.' },
      { rule: 'numeric', message: '年龄为正整数.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'select',
    formKey: 'area',
    label: '居住城市',
    validation: [
      { rule: 'required', message: '居住城市为必选项.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'date',
    formKey: 'date',
    label: '日期',
    validation: [
      { rule: 'required', message: '日期为必选项.' }
    ],
    defaultValue: '2021-09-20'
  },

  {
    inputType: 'radios',
    formKey: 'gender',
    label: '性别',
    validation: [
      { rule: 'required', message: '请选择性别.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'checkboxs',
    formKey: 'hobby',
    label: '兴趣',
    validation: [
      { rule: 'required', message: '请选择兴趣.' }
    ],
    defaultValue: [2]
  },

  {
    inputType: 'switch',
    formKey: 'active',
    label: '激活',
    defaultValue: true
  }
]