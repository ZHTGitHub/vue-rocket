export default {
  methods: {
    zoom(zoom) {
      switch (zoom) {
        // 放大
        case 'grow':
          this.imageWidth += this.zoomWidth
          this.imageHeight += this.zoomHeight

          const maxWidth = this.zoomWidth * this.blocks * this.maxTimes
          const maxHeight = this.zoomHeight * this.blocks * this.maxTimes

          if(this.imageWidth >= maxWidth) {
            this.imageWidth = maxWidth
            this.imageHeight = maxHeight
          }
          break;
        
        // 缩小
        case 'shrink':
          this.imageWidth -= this.zoomWidth
          this.imageHeight -= this.zoomHeight

          const minWidth = this.zoomWidth * this.blocks * this.minTimes
          const minHeight = this.zoomHeight * this.blocks * this.minTimes

          if(this.imageWidth <= minWidth) {
            this.imageWidth = minWidth
            this.imageHeight = minHeight
          }
          break;
        
        // 还原
        case 'origin':
          this.imageWidth = this.zoomWidth * this.blocks
          this.imageHeight = this.zoomHeight * this.blocks
          break;
      }

      this.setDynamicSize()
    }
  }
}