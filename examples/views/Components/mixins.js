export default {
  data() {
    return {
      itemsPerPage: 100,
      hideDefaultFooter: true,

      attributesHeaders: [
        { text: '参数', value: 'name' },
        { text: '必须', value: 'required', sortable: false, width: 60 },
        { text: '类型', value: 'type', sortable: false },
        { text: '可选值', value: 'acceptedValues', sortable: false },
        { text: '默认值', value: 'default', sortable: false, width: 70 },
        { text: '说明', value: 'description', sortable: false }
      ],

      methodsHeaders: [
        { text: '名称', value: 'name' },
        { text: '参数', value: 'parameters', sortable: false },
        { text: '说明', value: 'description', sortable: false }
      ]
    }
  }
}
