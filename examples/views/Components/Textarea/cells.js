export const textarea = [
  {
    title: 'Textarea Attributes',
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
        name: 'append-icon',
        required: '否',
        type: 'String',
        acceptedValues: '—',
        default: '—',
        description: '在组件上附加一个图标'
      },

      {
        name: 'defaultValue',
        required: '否',
        type: 'Any',
        acceptedValues: '—',
        default: '—',
        description: '输入框的默认值'
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
        name: 'error',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '将输入框设置为手动错误状态'
      },

      {
        name: 'hint',
        required: '否',
        type: 'String',
        acceptedValues: '—',
        default: '—',
        description: '提示文本'
      },

      {
        name: 'label',
        required: '否',
        type: 'String',
        acceptedValues: '—',
        default: '—',
        description: '设置输入标签'
      },

      {
        name: 'prepend-icon',
        required: '否',
        type: 'String',
        acceptedValues: '—',
        default: '—',
        description: '在组件前添加一个图标'
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
        name: 'reverse',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '反转输入方向'
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
        name: 'success',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '将输入设置为手动成功状态'
      }
    ]
  },

  {
    title: 'Textarea Methods',
    titles: ['名称', '参数', '说明'],
    apis: [
      {
        name: 'blur',
        parameters: '-',
        description: '当失去焦点时发出'
      },

      {
        name: 'click',
        parameters: '-',
        description: '在单击输入时发出'
      },

      {
        name: 'change',
        parameters: '-',
        description: '当用户交互更改输入时发出'
      },

      {
        name: 'focus',
        parameters: '-',
        description: '当得到焦点时发出'
      },

      {
        name: 'keydown',
        parameters: '-',
        description: '按下任何键时发送'
      },

      {
        name: 'keyup',
        parameters: '-',
        description: '键盘抬起'
      }
    ]
  }
]