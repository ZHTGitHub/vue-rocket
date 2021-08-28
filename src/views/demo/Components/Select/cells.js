export const select = [
  {
    title: 'Select Attributes',
    titles: ['参数', '必须', '类型', '可选值', '默认值', '说明'],
    apis: [
      {
        name: 'formId',
        required: '是',
        type: 'String',
        acceptedValues: '—',
        default: '—',
        description: '选择器所在表单的 id'
      },

      {
        name: 'formKey',
        required: '是',
        type: 'String',
        acceptedValues: '—',
        default: '—',
        description: '选择器的 key 值'
      },

      {
        name: 'readonly',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '是否只读状态'
      },

      {
        name: 'disabled',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '是否禁用状态'
      },

      {
        name: 'required',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '是否必填'
      },

      {
        name: 'label',
        required: '否',
        type: 'String',
        acceptedValues: '—',
        default: '—',
        description: '选择器关联的 label 文字'
      },

      {
        name: 'defaultValue',
        required: '否',
        type: 'Number | String',
        acceptedValues: '—',
        default: '—',
        description: '选择器的默认值'
      },

      {
        name: 'options',
        required: '是',
        type: '{ label, value }[ ]',
        acceptedValues: '—',
        default: '—',
        description: '选择器的下拉框内容'
      }
    ]
  },

  {
    title: 'Select Methods',
    titles: ['名称', '参数', '说明'],
    apis: [
      {
        name: 'blur',
        parameters: '-',
        description: '失去焦点时触发'
      },

      {
        name: 'change',
        parameters: '-',
        description: '选中值发生变化时触发'
      },

      {
        name: 'click',
        parameters: '-',
        description: '点击时触发'
      },

      {
        name: 'focus',
        parameters: '-',
        description: '获取焦点时触发'
      },
    ]
  }
]