<template>
  <div class="z-pagination" :class="className">
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

      className: {
        type: String,
        required: false
      },

      position: {
        validator(value) {
          return ['start', 'center', 'end'].indexOf(value) !== -1
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
      },

      onNext() {
        console.log(this.page)
      },

      onPrevious() {
        console.log(this.page)
      }
    }
  }
</script>

<style>
  .z-pagination nav.start {
    float: left;
  }

  .z-pagination nav.center {
    float: none;
  }

  .z-pagination nav.end {
    float: right;
  }
</style>