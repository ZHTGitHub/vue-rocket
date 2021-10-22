<template>
  <v-dialog
    v-model="previewDialog"
    max-width="520"
  >
    <v-card>
      <v-card-title class="pt-1 pr-1 pb-0">
        <v-spacer></v-spacer>
        <v-icon @click="onPreviewClose">mdi-close</v-icon>
      </v-card-title>

      <v-card-text>
        <img 
          :alt="targetImage.name"
          :src="targetImage.base64" 
          width="100%"
        >
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'ZPreviewDialog',

    props: {
      targetImage: {
        type: Object,
        default: () => {}
      }
    },

    data() {
      return {
        previewDialog: false
      }
    },

    methods: {
      onPreviewClose() {
        this.toggle()
      },

      toggle() {
        this.previewDialog = !this.previewDialog
      }
    }
  }
</script>