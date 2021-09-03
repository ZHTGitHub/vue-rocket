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
        name: 'btnType',
        required: '否',
        type: 'String',
        acceptedValues: 'normal/new/modify/detail/delete/reset/clear/submit',
        default: 'normal',
        description: '设置按钮类型'
      },

      {
        name: 'lockedTime',
        required: '否',
        type: 'Number | String',
        acceptedValues: '—',
        default: 2500,
        description: '防止恶意点击间隔'
      },

      {
        name: 'absolute',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '按钮 position: absolute'
      },

      {
        name: 'block',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '块级按钮可填满全部可以用宽度'
      },

      {
        name: 'bottom',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '按钮向底部对齐'
      },

      {
        name: 'color',
        required: '否',
        type: 'String',
        acceptedValues: 'normal/primary/success/warning/error...',
        default: '—',
        description: 'material color 的名称（例如 success 或者 purple）或 css 颜色 (#033 或 rgba(255, 0, 0, 0.5))'
      },

      {
        name: 'depressed',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '移除按钮的阴影效果'
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
        name: 'elevation',
        required: '否',
        type: 'Number | String',
        acceptedValues: '—',
        default: '—',
        description: '组件的海拔可接受 0 到 24 之间的值'
      },

      {
        name: 'fab',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '将按钮指定为浮动操作按钮，按钮将变圆'
      },

      {
        name: 'fixed',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '按钮 position: fixed'
      },

      {
        name: 'height',
        required: '否',
        type: 'Number | String',
        acceptedValues: '—',
        default: '—',
        description: '设定按钮的高度'
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
        name: 'large',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '使按钮尺寸变的巨大'
      },

      {
        name: 'larger',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '使按钮尺寸变的无比巨大'
      },

      {
        name: 'left',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '将按钮向左对齐'
      },

      {
        name: 'outlined',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '使背景透明并使用薄边框'
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
        name: 'right',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '将按钮向右对齐'
      },

      {
        name: 'rounded',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '在按钮上应用较大的边框半径'
      },

      {
        name: 'small',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '使按钮尺寸变小'
      },

      {
        name: 'smaller',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '使按钮尺寸变的更小'
      },

      {
        name: 'tile',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '删除按钮的 border-radius 样式'
      },

      {
        name: 'top',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '将按钮向顶部对齐'
      }
    ]
  },

  {
    title: 'Button Methods',
    titles: ['名称', '参数', '说明'],
    apis: [
      {
        name: 'click',
        parameters: '-',
        description: '单击按钮时发出的事件'
      }
    ]
  }
]