<template>
  <div class="mt-12 input-slots">
    <v-card>
      <v-card-title>
        <span>File Input Slots</span>
        <v-spacer></v-spacer>
        <z-text-field
          :formId="searchFormId"
          formKey="search"
          append-icon="mdi-magnify"
          @keydown="onLocalSearch"
        ></z-text-field>
      </v-card-title>

      <v-data-table
        :headers="slotsHeaders"
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
    name: 'FileInputSlots',
    mixins: [TableMixins, ExamplesMixins],

    data() {
      return {
        formId: 'FileInputSlots',
        getHandler: 'GET_FILE_INPUT_SLOTS'
      }
    }
  }
</script>