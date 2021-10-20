<template>
  <div 
    v-if="total > size" 
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
        :defaultValue="pageSize"
        @change="onSizes"
      ></z-select>
    </span>

    <v-pagination
      v-model="num"
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
        :defaultValue="num"
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
        size: 10,
        num: 1,
        length: 1,
        page: {
          pageSize: 10,
          pageNum: 1
        }
      }
    },

    created() {
      this.num = this.pageNum
      this.size = this.pageSize
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

      onSizes(size) {
        this.size = size
        this.num = 1
        this.$emit('size', this.page)
      },

      onJump(event) {
        let pageNum = Math.floor(event.customValue)

        if(isNaN(pageNum)) {
          pageNum = 1
        }

        if(pageNum > this.length) {
          this.num = this.length
        }
        else if(pageNum < 1) {
          this.num = 1
        }
        else {
          this.num = pageNum
        }

        this.$emit('jump', this.page)
      },
       
      setLength() {
        this.length = Math.ceil(this.total / this.size)
      },

      setPagination() {
        this.page = {
          pageSize: this.size,
          pageNum: this.num
        }
      }
    },
    
    watch: {
      pageNum: {
        handler() {
          this.num = this.pageNum
        },
        immediate: true
      },

      total: {
        handler() {
          this.setLength()
        },
        immediate: true
      },

      num: {
        handler() {
          this.setPagination()
        },
        immediate: true
      },

      size: {
        handler() {
          this.setPagination()
          this.setLength()
        },
        immediate: true
      },

      page: {
        handler() {
          this.$emit('page', this.page)
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