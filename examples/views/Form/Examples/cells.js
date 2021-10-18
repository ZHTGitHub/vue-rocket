const fields = [
  {
    inputType: 'text',
    formKey: 'name',
    label: '姓名',
    validation: [
      { rule: 'required', message: '姓名为必填项.' },
      { rule: 'min:4', message: '字段长度不得小于4.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'text',
    formKey: 'phone',
    label: '手机',
    validation: [
      { regex: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/, message: '手机格式不正确.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'select',
    formKey: 'area',
    label: '居住城市',
    options: [
      { label: '广州', value: 1 },
      { label: '深圳', value: 2 },
      { label: '珠海', value: 3 }
    ],
    validation: [
      { rule: 'required', message: '居住城市为必选项.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'date',
    formKey: 'date',
    label: '生日',
    validation: [
      { rule: 'required', message: '生日为必选项.' }
    ],
    defaultValue: '2021-09-20'
  },

  {
    inputType: 'radios',
    formKey: 'gender',
    label: '性别',
    options: [
      { label: '男性', value: 1 },
      { label: '女性', value: 2 }
    ],
    validation: [
      { rule: 'required', message: '请选择性别.' }
    ],
    defaultValue: undefined
  },

  {
    inputType: 'checkboxs',
    formKey: 'hobby',
    label: '兴趣',
    options: [
      { label: '游泳', value: 1 },
      { label: '乒乓球', value: 2 },
      { label: '羽毛球', value: 3 }
    ],
    validation: [
      { rule: 'required', message: '请选择兴趣.' }
    ],
    defaultValue: [2]
  },

  {
    inputType: 'btnToggle',
    formKey: 'sexual',
    label: '性取向',
    options: [
      { label: '异性恋', value: 1, icon: 'mdi-heart-outline' },
      { label: '同性恋', value: 2, icon: 'mdi-heart-multiple-outline ' },
      { label: '双性恋', value: 3, icon: 'mdi-heart-half-full' },
      { label: '无性', value: 4, }
    ],
    validation: [
      { rule: 'required', message: '性取向为必选项.' }
    ],
    defaultValue: 1
  },

  {
    inputType: 'switch',
    formKey: 'active',
    label: '激活',
    validation: [
      { rule: 'required', message: '请勾选激活.' }
    ],
    defaultValue: undefined
  }
]

export default {
  fields
}