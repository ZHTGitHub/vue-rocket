const rules = [
  {
    rule: 'alpha',
    usage: '校验的字段只能由英文字母组成',
    validation: `<z-text-field :validation="[{ rule: 'alpha', message: '字段只能包含英文字母.' }]"></z-text-field>`
  },

  {
    rule: 'alpha_num',
    usage: '校验的字段只能由英文字母和自然数组成',
    validation: `<z-text-field :validation="[{ rule: 'alpha_num', message: '字段只能包含英文字母及自然数.' }]"></z-text-field>`
  },

  {
    rule: 'between',
    usage: '校验的字段必须有一个以最小值和最大值为界的数值',
    validation: `<z-text-field :validation="[{ rule: 'between:1,9', message: '输入字段必须介于1和9之间.' }]"></z-text-field>`
  },

  {
    rule: 'decimal',
    usage: '接受正小数和负小数',
    validation: `<z-text-field :validation="[{ rule: 'decimal', message: '允许字段为正数或负数.' }]"></z-text-field>`
  },

  {
    rule: 'email',
    usage: '接受有效的电子邮件地址',
    validation: `<z-text-field :validation="[{ rule: 'email', message: '电子邮件地址不合法.' }]"></z-text-field>`
  },

  {
    rule: 'excluded',
    usage: '校验的字段必须不含有指定列表的值 使用双等于进行检查',
    validation: `<z-text-field :validation="[{ rule: 'excluded:fuck|shit', message: '字段不允许包含fuck或shit.' }]"></z-text-field>`
  },

  {
    rule: 'included',
    usage: '校验的字段必须包含指定的值 使用双等于进行检查',
    validation: `<z-text-field :validation="[{ rule: 'included:vue-rocket', message: '字段需包含vue-rocket.' }]"></z-text-field>`
  },

  {
    rule: 'integer',
    usage: '接受正整数和负整数',
    validation: `<z-text-field :validation="[{ rule: 'integer', message: '允许字段为正整数或负整数.' }]"></z-text-field>`
  },

  {
    rule: 'is',
    usage: '校验的字段必须为指定的值 使用三等于进行检查',
    validation: `<z-text-field :validation="[{ rule: 'is:vue-rocket', message: '字段必须为vue-rocket.' }]"></z-text-field>`
  },

  {
    rule: 'is_not',
    usage: '校验的字段必须不为指定的值 使用三等于进行检查',
    validation: `<z-text-field :validation="[{ rule: 'is_not:fuck', message: '字段必须不为fuck.' }]"></z-text-field>`
  },

  {
    rule: 'length',
    usage: '校验的字段必须为指定长度',
    validation: `<z-text-field :validation="[{ rule: 'length:8', message: '字段长度为8.' }]"></z-text-field>`
  },

  {
    rule: 'min',
    usage: '校验的字段长度不得小于指定长度',
    validation: `<z-text-field :validation="[{ rule: 'min:8', message: '字段长度不得小于8.' }]"></z-text-field>`
  },

  {
    rule: 'max',
    usage: '校验的字段长度不得大于指定长度',
    validation: `<z-text-field :validation="[{ rule: 'max:8', message: '字段长度不得大于8.' }]"></z-text-field>`
  },

  {
    rule: 'min_value',
    usage: '校验的字段不得小于指定值',
    validation: `<z-text-field :validation="[{ rule: 'min_value:1', message: '字段不得小于1.' }]"></z-text-field>`
  },

  {
    rule: 'max_value',
    usage: '校验的字段不得大于指定值',
    validation: `<z-text-field :validation="[{ rule: 'max_value:9', message: '字段不得大于9.' }]"></z-text-field>`
  },

  {
    rule: 'numeric',
    usage: '接受正整数',
    validation: `<z-text-field :validation="[{ rule: 'numeric', message: '允许字段为正整数.' }]"></z-text-field>`
  },

  {
    rule: 'phone',
    usage: '接受有效的手机号',
    validation: `<z-text-field :validation="[{ rule: 'phone', message: '手机号不合法.' }]"></z-text-field>`
  },

  {
    rule: 'regex',
    usage: '正则表达式',
    validation: `<z-text-field :validation="[{ regex: /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/, message: '手机格式不正确.' }]"></z-text-field>`
  },

  {
    rule: 'required',
    usage: '需要非空字段 检查空数组和仅包含空格的字符串',
    validation: `<z-text-field :validation="[{ rule: 'required', message: '字段不允许为空.' }]"></z-text-field>`
  }
]

export default {
  rules
}