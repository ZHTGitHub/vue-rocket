<template>
  <div class="z-demo-button">
    <h4 class="mb-8 text-h4">Button 按钮</h4>

    <usage-examples></usage-examples>

    <v-card>
      <v-card-title>
        <span>Button Attributes</span>
        <v-spacer></v-spacer>
        <z-text-field
          formId="apis"
          formKey="search"
          append-icon="mdi-magnify"
          @keydown="onApisLocalSearch"
        ></z-text-field>
      </v-card-title>

      <v-data-table
        :headers="apisHeaders"
        hide-default-footer
        :items-per-page="100"
        :items="apisDesserts"
        :search="apisSearch"
      ></v-data-table>
    </v-card>

    <v-card class="mt-12">
      <v-card-title>
        <span>Button Methods</span>
        <v-spacer></v-spacer>
        <z-text-field
          formId="methods"
          formKey="search"
          append-icon="mdi-magnify"
          @keydown="onMethodsLocalSearch"
        ></z-text-field>
      </v-card-title>

      <v-data-table
        :headers="methodsHeaders"
        hide-default-footer
        :items-per-page="100"
        :items="methodsDesserts"
        :search="methodsSearch"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ZDemoButton',

    data() {
      return {
        apisSearch: '',
        apisHeaders: [
          { text: '参数', value: 'name' },
          { text: '必须', value: 'required', sortable: false },
          { text: '类型', value: 'type', sortable: false },
          { text: '可选值', value: 'acceptedValues', sortable: false },
          { text: '默认值', value: 'default', sortable: false },
          { text: '说明', value: 'description', sortable: false }
        ],
        apisDesserts: [],

        methodsSearch: '',
        methodsHeaders: [
          { text: '名称', value: 'name' },
          { text: '参数', value: 'parameters', sortable: false },
          { text: '说明', value: 'description', sortable: false }
        ],
        methodsDesserts: [],
      }
    },

    created() {
      this.getButtonApis()
      this.getButtonMethods()
    },

    methods: {
      onApisLocalSearch() {
        const searchForm = this.forms.apis
			  this.apisSearch = searchForm.search
      },

      onMethodsLocalSearch() {
        const searchForm = this.forms.methods
			  this.methodsSearch = searchForm.search
      },

      async getButtonApis() {
        const result = await this.$store.dispatch('GET_BUTTON_APIS')
        this.apisDesserts = result.data
      },

      async getButtonMethods() {
        const result = await this.$store.dispatch('GET_BUTTON_METHODS')
        this.methodsDesserts = result.data
      }
    },

    computed: {
      ...mapState(['forms'])
    },

    components: {
      'usage-examples': () => import('./UsageExamples.vue')
    }
  }
</script>

<style scoped>
  
</style>