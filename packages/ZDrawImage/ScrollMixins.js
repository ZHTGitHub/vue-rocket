let [drawImage, drawing] = [null, null]
let [drawImageH, drawImageW, drawingH, drawingW] = [0, 0, 0, 0]
let [scrollLeft, scrollTop] = [0, 0]

export default {
  props: {
    scrollRange: {
      type: [Number, String],
      default: 50
    }
  },

  methods: {
    getWrapperInfo() {
      this.$nextTick(() => {
        // drawImage = document.getElementById('drawImage')
        // drawing = document.getElementById('drawing')

        drawImage = this.$refs.drawImage
        drawing = this.$refs.drawing
    
        drawImageH = drawImage.offsetHeight
        drawImageW = drawImage.offsetWidth
    
        drawingH = drawing.offsetHeight
        drawingW = drawing.offsetWidth

        console.log({ drawImageH, drawImageW })
        console.log({ drawingH, drawingW })

        this.setCanvasLeft()
      })
    },

    // 保证 canvas 在容器左侧
    setCanvasLeft() {
      // const max = Math.max(drawingH, drawingW)
      // drawImage.scrollLeft = (max - drawImageW) / 2

      drawImage.scrollLeft = 0
    },

    // 向左滚动
    scrollLeft() {
      scrollLeft -= this.scrollRange

      if(scrollLeft <= 0) {
        scrollLeft = 0
      }

      drawImage.scrollLeft = scrollLeft
    },

    // 向上滚动
    scrollTop() {
      scrollTop -= this.scrollRange

      if(scrollTop <= 0) {
        scrollTop = 0
      }

      drawImage.scrollTop = scrollTop
    },

    // 向右滚动
    scrollRight() {
      scrollLeft += this.scrollRange

      if(scrollLeft >= drawingW - drawImageW) {
        scrollLeft = drawingW - drawImageW
      }

      drawImage.scrollLeft = scrollLeft
    },

    // 向下滚动
    scrollBottom() {
      scrollTop += this.scrollRange
      
      if(scrollTop >= drawingH - drawImageH) {
        scrollTop = drawingH - drawImageH
      }

      drawImage.scrollTop = scrollTop
    }
  }
}