export default {
  data() {
    return {
      
    }
  },

  methods: {
    // 放大
    zoomIn() {
      this.width = 1000
      this.initialize()
    },

    // 缩小
    zoomOut() {
      this.width = 500
      this.initialize()
    }
  },
}