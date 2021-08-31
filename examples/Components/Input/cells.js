export const input = [
  {
    title: 'Input Attributes',
    titles: ['参数', '必须', '类型', '可选值', '默认值', '说明'],
    apis: [
      {
        name: 'formId',
        required: '是',
        type: 'String',
        acceptedValues: '—',
        default: '—',
        description: '输入框所在表单的 id'
      },

      {
        name: 'formKey',
        required: '是',
        type: 'String',
        acceptedValues: '—',
        default: '—',
        description: '输入框的 key 值'
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
        description: '输入框关联的 label 文字'
      },

      {
        name: 'defaultValue',
        required: '否',
        type: 'Any',
        acceptedValues: '—',
        default: '—',
        description: '输入框的默认值'
      }
    ]
  },

  {
    title: 'Input Methods',
    titles: ['名称', '参数', '说明'],
    apis: [
      {
        name: 'keydown',
        parameters: '-',
        description: '键盘按下'
      },

      {
        name: 'keyup',
        parameters: '-',
        description: '键盘抬起'
      },

      {
        name: 'blur',
        parameters: '-',
        description: '失去焦点'
      }
    ]
  }
]