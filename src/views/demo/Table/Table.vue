<template>
  <div class="demo-table px-4">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      show-select
      item-key="name"
      hide-default-footer
      :loading="loading"
      :loading-text="loadingText"
    >
      <template v-slot:item.options="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="modifyItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import TableMixins from '@/mixins/table'

  export default {
    name: 'ZDemoTable',
    mixins: [TableMixins],
    data() {
      return {
        selected: [],
        headers: [
          { text: '邮箱', value: 'email', sortable: false },
          { text: '手机', value: 'phone', sortable: false },
          { text: '姓名', value: 'name', sortable: false },
          { text: '年龄', value: 'age' },
          { text: '居住城市', value: 'area', sortable: false },
          { text: '性别', value: 'gender', sortable: false },
          { text: '兴趣', value: 'hobby', sortable: false },
          { text: '激活', value: 'active', sortable: false },
          { text: '操作', value: 'options', sortable: false }
        ],
        desserts: [
          {
            email: 'chat195@163.com',
            phone: 17520256801,
            name: 'Leslie',
            age: 18,
            area: '珠海',
            gender: 1,
            hobby: ['游泳', '乒乓球'],
            active: false
          },
          {
            email: 'chat687@163.com',
            phone: 18718120597,
            name: 'ZHT',
            age: 16,
            area: '广州',
            gender: 1,
            hobby: ['网球', '羽毛球'],
            active: true
          }
        ]
      }
    },

    created() {
      this.util.storage.set('zht', 123)
      this.util.storage.del('zht')
      console.log(this.util.storage.get('zht'))
    },

    methods: {
      modifyItem(item) {
        console.log(item)
      },

      deleteItem(item) {
        console.log(item)
      },
    },

    watch: {
      selected(items) {
        console.log(items)
      }
    }
  }
</script>