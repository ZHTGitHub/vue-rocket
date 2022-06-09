<template>
  <div class="list-attributes">
    <v-card>
      <v-card-title>
        <span>List Attributes</span>
        <v-spacer></v-spacer>
        <z-text-field
          :formId="searchFormId"
          formKey="search"
          append-icon="mdi-magnify"
          @keydown="onLocalSearch"
        ></z-text-field>
      </v-card-title>

      <v-data-table
        :headers="attributesHeaders"
        :hide-default-footer="hideDefaultFooter"
        :items-per-page="itemsPerPage"
        :items="desserts"
        :loading="loading"
        :loadingText="loadingText"
        :search="search"
      >
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
  import TableMixins from '../../../mixins/table'
  import ExamplesMixins from '../mixins'

  export default {
    name: 'ListAttributes',
    mixins: [TableMixins, ExamplesMixins],

    data() {
      return {
        formId: 'ListAttributes',
        getHandler: 'GET_LIST_ATTRIBUTES'
      }
    }
  }
</script>