<template>
  <div 
    v-if="total > 0"
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
        class="mt-n4"
        dense
        hide-details
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
      :total-visible="totalVisible"
      @input="onInput"
      @next="onNext"
      @previous="onPrevious"
    ></v-pagination>

    <span class="z-flex align-center ml-6 z-pagination__jump">
      前往
      <z-text-field
        :formId="formId"
        formKey="pageNum"
        class="mt-n4 mx-2"
        dense
        hide-details
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
        type: Number,
        default: 0
      },

      totalVisible: {
        type: Number,
        default: 10
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

    methods: {
      /**
       * @description 选中分页按钮改变时触发
       */ 
      onInput() {
        this.$emit('input', this.num)
      },

      /**
       * @description 选中分页按钮转到下一个项目时触发
       */ 
      onNext() {
        this.$emit('next', this.num)
      },

      /**
       * @description 选中分页按钮转到上一个项目时触发
       */ 
      onPrevious() {
        this.$emit('previous', this.num)
      },

      /**
       * @description 改变每页条数时触发
       */ 
      onSizes(size) {
        this.size = size
        this.num = 1
        this.$emit('size', this.size)
      },

      /**
       * @description 输入框跳转时触发
       */ 
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

        this.$emit('jump', this.num)
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

      pageSize: {
        handler() {
          this.size = this.pageSize
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
        }
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