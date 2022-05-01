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
        drawImage = document.getElementById('drawImage')
        drawing = document.getElementById('drawing')
    
        drawImageH = drawImage.offsetHeight
        drawImageW = drawImage.offsetWidth
    
        drawingH = drawing.offsetHeight
        drawingW = drawing.offsetWidth

        // console.log({ drawImageH, drawImageW })
        // console.log({ drawingH, drawingW })

        this.setCanvasCenter()
      })
    },

    // 保证 canvas 在容器内水平居中
    setCanvasCenter() {
      const max = Math.max(drawingH, drawingW)
      drawImage.scrollLeft = (max - drawImageW) / 2
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
  },
}