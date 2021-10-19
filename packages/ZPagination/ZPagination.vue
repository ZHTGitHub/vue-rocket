<template>
  <div 
    v-show="total > sizes" 
    class="z-pagination z-flex align-center" 
    :class="`justify-${ position }`"
  >
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
        :defaultValue="defaultValue"
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

      defaultValue: {
        type: [String, Number],
        default: 10
      },

      options: {
        type: Array,
        default: () => []
      },

      pageNum: {
        type: Number,
        default: 1
      },

      pageSize: {
        type: Number,
        default: 10
      },

      position: {
        validator(value) {
          return ~['start', 'center', 'end'].indexOf(value)
        },
        default: 'end'
      },

      total: {
        type: [Number, String],
        default: 0
      }
    },

    data() {
      return {
        formId: 'pagination',
        page: 1,
        sizes: 10,
        length: 1,
        pagination: {
          pageSize: 1,
          pageNum: 10
        }
      }
    },

    created() {
      this.page = this.pageNum
      this.sizes = this.pageSize
    },

    methods: {
      onInput() {
        this.$emit('input', this.pagination)
      },

      onNext() {
        this.$emit('next', this.pagination)
      },

      onPrevious() {
        this.$emit('previous', this.pagination)
      },

      onSizes(sizes) {
        this.sizes = sizes
        this.page = 1
        this.$emit('sizes', this.pagination)
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

        this.$emit('jump', this.pagination)
      },
       
      setLength() {
        this.length = Math.ceil(this.total / this.sizes)
      },

      setPagination() {
        this.pagination = {
          pageSize: this.sizes,
          pageNum: this.page
        }
      }
    },
    
    watch: {
      total: {
        handler() {
          this.setLength()
        },
        immediate: true
      },

      page: {
        handler() {
          this.setPagination()
        },
        immediate: true
      },

      sizes() {
        this.setPagination()
        this.setLength()
      },

      pagination: {
        handler() {
          this.$emit('pagination', this.pagination)
        },
        immediate: true,
        deep: true
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