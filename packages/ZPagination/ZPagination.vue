<template>
  <div v-show="total > pageSize" class="z-pagination">
    <v-pagination
      v-model="page"
      :class="position"
      :length="length"
      :circle="circle"
      @input="onInput"
      @next="onNext"
      @previous="onPrevious"
    ></v-pagination>
  </div>
</template>

<script>
  export default {
    name: 'ZPagination',

    props: {
      total: {
        type: Number,
        required: true
      },

      length: {
        type: Number,
        default: 1
      },

      pageSize: {
        type: Number,
        default: 10
      },

      pageNum: {
        type: Number,
        default: 1
      },

      circle: {
        type: Boolean,
        default: false
      },

      position: {
        validator(value) {
          return ~['start', 'center', 'end'].indexOf(value)
        },
        default: 'start'
      }
    },

    data() {
      return {
        page: 1
      }
    },

    created() {
      this.page = this.pageNum
    },

    methods: {
      onInput() {
        console.log(this.page)
        this.$emit('input', this.page)
      },

      onNext() {
        console.log(this.page)
        this.$emit('next', this.page)
      },

      onPrevious() {
        console.log(this.page)
        this.$emit('previous', this.page)
      }
    }
  }
</script>

<style scoped lang="css">
  @import url("../styles/styles.css");
</style>