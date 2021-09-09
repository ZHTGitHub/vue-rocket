<template>
  <div class="demo-table">
    <main-layout>
      <div class="filters flex">
        <v-spacer></v-spacer>
        <z-text-field
          :formId="searchFormId"
          formKey="keyword"
          label="搜索"
          append-icon="mdi-magnify"
        ></z-text-field>
      </div>

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
        <template #[`item.options`]="{ item }">
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

      <z-pagination
        :total="pagination.total"
      ></z-pagination>
    </main-layout>
  </div>
</template>

<script>
  import TableMixins from '../../mixins/table'

  export default {
    name: 'ZDemoTable',
    mixins: [TableMixins],
    data() {
      return {
        formId: 'Table',
        getHandler: 'GET_USERS',
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
        ]
      }
    },

    async created() {
      this.util.storage.set('zht', 123)
      this.util.storage.del('zht')
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
    },

    components: {
      'main-layout': () => import('../../layouts/MainLayout')
    }
  }
</script>