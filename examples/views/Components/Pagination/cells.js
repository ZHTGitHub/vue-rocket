export const pagination = [
  {
    title: 'Pagination Attributes',
    titles: ['参数', '必须', '类型', '可选值', '默认值', '说明'],
    apis: [
      {
        name: 'total',
        required: '是',
        type: 'Number',
        acceptedValues: '—',
        default: '—',
        description: '数据总数'
      },

      {
        name: 'length',
        required: '否',
        type: 'Number',
        acceptedValues: '—',
        default: '—',
        description: '分页组件的长度'
      },

      {
        name: 'pageSize',
        required: '否',
        type: 'Number',
        acceptedValues: '—',
        default: '—',
        description: '每页条数'
      },

      {
        name: 'pageNum',
        required: '否',
        type: 'Number',
        acceptedValues: '—',
        default: '—',
        description: '当前页数'
      },

      {
        name: 'circle',
        required: '否',
        type: 'Boolean',
        acceptedValues: '—',
        default: 'false',
        description: '设置分页按钮为圆形'
      }
    ]
  },

  {
    title: 'Input Methods',
    titles: ['名称', '参数', '说明'],
    apis: [
      {
        name: 'input',
        parameters: '-',
        description: '跳转时触发'
      },

      {
        name: 'next',
        parameters: '-',
        description: '跳转到下一页时触发'
      },

      {
        name: 'previous',
        parameters: '-',
        description: '跳转到上一页时触发'
      }
    ]
  }
]