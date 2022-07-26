export default {
  props: {
    blocks: {
      type: [Number, String],
      default: 5
    },

    maxTimes: {
      type: [Number, String],
      default: 2
    },

    minTimes: {
      type: [Number, String],
      default: .25
    }
  },

  data() {
    return {
      zoomWidth: 0,
      zoomHeight: 0
    }
  },

  methods: {
    zoom(zoom) {
      this.clear()

      switch (zoom) {
        // 放大
        case 'grow': 
          this.imgWidth += this.zoomWidth
          this.imgHeight += this.zoomHeight
    
          const maxWidth = this.zoomWidth * this.blocks * this.maxTimes
          const maxHeight = this.zoomHeight * this.blocks * this.maxTimes
    
          if(this.imgWidth >= maxWidth) {
            this.imgWidth = maxWidth
            this.imgHeight = maxHeight
          }

          if(this.imgWidth <= maxWidth) {
            this.initialize({})
          }
          break;

        // 缩小
        case 'shrink': 
          this.imgWidth -= this.zoomWidth
          this.imgHeight -= this.zoomHeight

          const minWidth = this.zoomWidth * this.blocks * this.minTimes
          const minHeight = this.zoomHeight * this.blocks * this.minTimes

          if(this.imgWidth <= minWidth) {
            this.imgWidth = minWidth
            this.imgHeight = minHeight
          }

          if(this.imgWidth >= minWidth) {
            this.initialize({})
          }
          break;

        // 还原
        case 'origin': 
          this.imgWidth = this.zoomWidth * this.blocks
          this.imgHeight = this.zoomHeight * this.blocks
          this.initialize({})
          break;
      }
    }
  },

  watch: {
    imageWidth: {
      handler(imageWidth) {
        this.imgWidth = imageWidth ? +imageWidth : 0
      },
      immediate: true
    },

    imageHeight: {
      handler(imageHeight) {
        this.imgHeight = imageHeight ? +imageHeight : 0
      },
      immediate: true
    }
  }
}