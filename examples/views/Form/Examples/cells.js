const fields = [
  {
    inputType: 'text',
    formKey: 'name',
    label: '姓名',
    prependOuter: '*',
    prependOuterClass: 'error--text',
    cols: 12,
    colsClass: 'pb-0',
    validation: [
      { rule: 'required', message: '姓名为必填项.' },
      { rule: 'min:4', message: '字段长度不得小于4.' }
    ]
  },

  {
    inputType: 'text',
    formKey: 'phone',
    label: '手机',
    cols: 12,
    colsClass: 'py-0',
    validation: [
      { regex: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/, message: '手机格式不正确.' }
    ]
  },

  // {
  //   inputType: 'select',
  //   formKey: 'area',
  //   label: '居住城市',
  //   cols: 12,
  //   colsClass: 'py-0',
  //   prependOuter: '*',
  //   prependOuterClass: 'error--text',
  //   options: [
  //     { label: '广州', value: 1 },
  //     { label: '深圳', value: 2 },
  //     { label: '珠海', value: 3 }
  //   ],
  //   validation: [
  //     { rule: 'required', message: '居住城市为必选项.' }
  //   ]
  // },

  // {
  //   inputType: 'autocomplete',
  //   formKey: 'country',
  //   label: '国家',
  //   cols: 12,
  //   colsClass: 'py-0',
  //   prependOuter: '*',
  //   prependOuterClass: 'error--text',
  //   options: [
  //     { label: '广州', value: 1 },
  //     { label: '深圳', value: 2 },
  //     { label: '珠海', value: 3 }
  //   ],
  //   validation: [
  //     { rule: 'required', message: '国家为必选项.' }
  //   ]
  // },

  // {
  //   inputType: 'date',
  //   formKey: 'date',
  //   label: '生日',
  //   prependOuter: '*',
  //   prependOuterClass: 'error--text',
  //   validation: [
  //     { rule: 'required', message: '生日为必选项.' }
  //   ],
  //   defaultValue: '2021-09-20'
  // },

  // {
  //   inputType: 'radios',
  //   formKey: 'gender',
  //   label: '性别',
  //   cols: 12,
  //   colsClass: 'py-0',
  //   options: [
  //     { label: '男性', value: 1 },
  //     { label: '女性', value: 2 }
  //   ],
  //   prepend: '*',
  //   prependClass: 'error--text',
  //   validation: [
  //     { rule: 'required', message: '请选择性别.' }
  //   ]
  // },

  // {
  //   inputType: 'checkboxs',
  //   formKey: 'hobby',
  //   label: '兴趣',
  //   cols: 12,
  //   colsClass: 'py-0',
  //   options: [
  //     { label: '游泳', value: 1 },
  //     { label: '乒乓球', value: 2 },
  //     { label: '羽毛球', value: 3 }
  //   ],
  //   prepend: '*',
  //   prependClass: 'error--text',
  //   validation: [
  //     { rule: 'required', message: '请选择兴趣.' }
  //   ]
  // },

  // {
  //   inputType: 'btnToggle',
  //   formKey: 'sexual',
  //   label: '视力',
  //   mandatory: true,
  //   options: [
  //     { label: '正常', value: 1 },
  //     { label: '近视', value: 2 },
  //     { label: '远视', value: 3 }
  //   ],
  //   validation: [
  //     { rule: 'required', message: '视力为必选项.' }
  //   ]
  // },

  // {
  //   inputType: 'textarea',
  //   formKey: 'intr',
  //   label: '介绍',
  //   cols: 12,
  //   colsClass: 'pb-0',
  //   validation: [
  //     { rule: 'min:20', message: '介绍长度不得小于20.' }
  //   ]
  // },

  // {
  //   inputType: 'switch',
  //   formKey: 'active',
  //   label: '激活',
  //   validation: [
  //     { rule: 'required', message: '请勾选激活.' }
  //   ]
  // }
]

export default {
  fields
}