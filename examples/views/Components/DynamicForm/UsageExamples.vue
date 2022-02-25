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

      <z-btn
        class="mb-8"
        color="primary"
        outlined
        small
        :lockedTime="0"
        @click="onOpen1"
      >
        open1
      </z-btn>
    </div>

    <z-dynamic-form
      ref="dynamic" 
      title="动态表单"
      :fieldList="cells.fields"
      :detail="{ name: 'Leslie', sexual: 1, country: 1 }"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    ></z-dynamic-form>

    <z-dynamic-form
      ref="dynamic1" 
      formId="dynamic1"
      title="动态表单"
      :fieldList="cells.fields"
      :detail="{ name: 'ZHT', sexual: 2, country: 2 }"
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

      onOpen1() {
        this.$refs.dynamic1.open({ status: -1 })
      },

      handleCancel(effect, form) {
        console.log(effect)
        console.log(form)
      },

      handleConfirm(effect, form) {
        console.log(effect)
        console.log(form)
        this.$refs.dynamic.close()
      }
    }
  }
</script>