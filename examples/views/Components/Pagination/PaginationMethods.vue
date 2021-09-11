<template>
  <div class="mt-12 pagination-methods">
    <v-card>
      <v-card-title>
        <span>Pagination Methods</span>
        <v-spacer></v-spacer>
        <z-text-field
          :formId="searchFormId"
          formKey="search"
          append-icon="mdi-magnify"
          @keydown="onLocalSearch"
        ></z-text-field>
      </v-card-title>

      <v-data-table
        :headers="methodsHeaders"
        :hide-default-footer="hideDefaultFooter"
        :items-per-page="itemsPerPage"
        :items="desserts"
        :loading="loading"
        :loadingText="loadingText"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
  import TableMixins from '../../../mixins/table'
  import ExamplesMixins from '../mixins'

  export default {
    name: 'PaginationMethods',
    mixins: [TableMixins, ExamplesMixins],

    data() {
      return {
        formId: 'PaginationMethods',
        getHandler: 'GET_PAGINATION_METHODS'
      }
    }
  }
</script>