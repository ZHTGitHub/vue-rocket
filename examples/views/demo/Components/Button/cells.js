export const button = [
  {
    title: 'Button Attributes',
    titles: ['参数', '必须', '类型', '可选值', '默认值', '说明'],
    apis: [
      {
        name: 'formId',
        required: '是',
        type: 'String',
        acceptedValues: '—',
        default: '—',
        description: '按钮所在表单的 id'
      },

      {
        name: 'color',
        required: '否',
        type: 'String',
        acceptedValues: 'normal/primary/success/warning/error',
        default: 'primary',
        description: '设置按钮主题'
      },

      {
        name: 'block',
        required: '否',
        type: 'Boolean',
        acceptedValues: '-',
        default: 'false',
        description: '块级按钮可填满全部可以用宽度'
      },

      {
        name: 'btnType',
        required: '否',
        type: 'String',
        acceptedValues: 'normal/new/modify/detail/delete/reset/clear/submit',
        default: 'normal',
        description: '设置按钮类型'
      },

      {
        name: 'plain',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '朴素按钮'
      },

      {
        name: 'small',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '小型按钮'
      },

      {
        name: 'large',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '大型按钮'
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
        name: 'icon',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '将按钮指定为图标'
      },

      {
        name: 'fab',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '将按钮指定为浮动操作按钮，按钮将变圆'
      },
    ]
  },

  {
    title: 'Button Methods',
    titles: ['名称', '参数', '说明'],
    apis: [
      {
        name: 'click',
        parameters: '-',
        description: '鼠标点击'
      }
    ]
  }
]