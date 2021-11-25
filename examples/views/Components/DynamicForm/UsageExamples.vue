<template>
  <div class="usage-examples">
    <div class="z-flex justify-end filters">
      <z-btn
        class="mb-8"
        color="primary"
        outlined
        small
        :lockedTime="0"
        @click="onOpen"
      >
        open
      </z-btn>
    </div>

    <z-dynamic-form 
      ref="dynamic" 
      title="动态表单"
      :fieldList="cells.fields"
      :detail="{ sexual: 1 }"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    ></z-dynamic-form>
  </div>
</template>

<script>
  import cells from './cells'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        cells
      }
    },

    methods: {
      onOpen() {
        this.$refs.dynamic.open({ status: -1 })
      },

      handleCancel(effect, form) {
        console.log(effect)
        console.log(form)
      },

      handleConfirm(effect, form) {
        console.log(effect)
        console.log(form)
      }
    }
  }
</script>