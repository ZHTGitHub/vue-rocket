<template>
  <div v-show="total > pageSize" class="z-pagination z-flex justify-center align-center">
    <span class="mr-3 z-pagination__total">
      共 {{ total }} 条
    </span>

    <span class="mr-3 z-pagination__sizes">
      <z-select
        :formId="formId"
        formKey="pageSize"
        dense
        :options="options"
        width="105"
        @change="onSizes"
      ></z-select>
    </span>

    <v-pagination
      v-model="page"
      :length="length"
      :circle="circle"
      @input="onInput"
      @next="onNext"
      @previous="onPrevious"
    ></v-pagination>

    <span class="z-flex align-center ml-6 z-pagination__jump">
      前往
      <z-text-field
        :formId="formId"
        formKey="pageNum"
        class="mx-2"
        dense
        width="50"
        :defaultValue="page"
       @enter="onJump"
       @blur="onJump"
      ></z-text-field>
      页
    </span>
  </div>
</template>

<script>
  export default {
    name: 'ZPagination',
    props: {
      circle: {
        type: Boolean,
        default: false
      },

      options: {
        type: Array,
        default: () => [{ label: 10, value: 10 }]
      },

      pageNum: {
        type: Number,
        default: 1
      },

      pageSize: {
        type: Number,
        default: 10
      },

      total: {
        type: Number,
        required: true
      },
    },

    data() {
      return {
        formId: 'pagination',
        page: 1,
        length: 1
      }
    },

    created() {
      this.page = this.pageNum
      this.length = Math.ceil(this.total / this.pageSize)
    },

    methods: {
      onInput() {
        this.$emit('input', this.page)
      },

      onNext() {
        this.$emit('next', this.page)
      },

      onPrevious() {
        this.$emit('previous', this.page)
      },

      onSizes(sizes) {
        this.$emit('sizes', sizes)
      },

      onJump(event) {
        let pageNum = Math.floor(event.customValue)

        if(isNaN(pageNum)) {
          pageNum = 1
        }

        if(pageNum > this.length) {
          this.page = this.length
        }
        else if(pageNum < 1) {
          this.page = 1
        }
        else {
          this.page = pageNum
        }

        this.$emit('jump', this.page)
      }
    }
  }
</script>

<style lang="scss">
  .z-pagination {
    color: #333;
    font-size: 14px;
  }
</style>