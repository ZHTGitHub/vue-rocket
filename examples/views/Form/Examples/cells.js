export const InfoFormCells = [
  {
    inputType: 'number',
    formKey: 'phone',
    label: '手机',
    validation: [
      { rule: 'required', message: '手机为必填项.' },
      { regex: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/, message: '手机格式不正确.' }
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
    inputType: 'btnToggle',
    formKey: 'sexual',
    label: '性取向',
    validation: [
      { rule: 'required', message: '性取向为必选项.' }
    ],
    defaultValue: 1
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
    inputType: 'textarea',
    formKey: 'intro',
    label: '自我介绍',
    validation: [
      { rule: 'required', message: '自我介绍为必填项.' },
      { rule: 'min:10', message: '自我介绍至少十个字.' },
    ],
    defaultValue: undefined
  },

  {
    inputType: 'switch',
    formKey: 'active',
    label: '激活',
    defaultValue: true
  }
]