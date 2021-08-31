export const radios = [
  {
    title: 'Radios Attributes',
    titles: ['参数', '必须', '类型', '可选值', '默认值', '说明'],
    apis: [
      {
        name: 'formId',
        required: '是',
        type: 'String',
        acceptedValues: '—',
        default: '—',
        description: '单选框所在表单的 id'
      },

      {
        name: 'formKey',
        required: '是',
        type: 'String',
        acceptedValues: '—',
        default: '—',
        description: '单选框的 key 值'
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
        description: '单选框关联的 label 文字'
      },

      {
        name: 'defaultValue',
        required: '否',
        type: 'Number | String',
        acceptedValues: '—',
        default: '—',
        description: '单选框的默认值'
      },

      {
        name: 'options',
        required: '是',
        type: '{ label, value }[ ]',
        acceptedValues: '—',
        default: '—',
        description: '单选框的选项内容'
      },

      {
        name: 'column',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '垂直布局'
      },

      {
        name: 'row',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'true',
        description: '水平布局'
      }
    ]
  }
]