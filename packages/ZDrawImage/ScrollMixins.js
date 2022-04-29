let [drawing, rotate] = [null, null]
let [drawingH, drawingW, rotateH, rotateW] = [0, 0, 0, 0]
let [scrollLeft, scrollTop] = [0, 0]

export default {
  props: {
    scrollRange: {
      type: [Number, String],
      default: 50
    }
  },

  data() {
    return {
      
    }
  },

  methods: {
    getWrapperInfo() {
      this.$nextTick(() => {
        drawing = document.getElementById('drawing')
        rotate = document.getElementById('rotate')
    
        drawingH = drawing.offsetHeight
        drawingW = drawing.offsetWidth
    
        rotateH = rotate.offsetHeight
        rotateW = rotate.offsetWidth

        // console.log({ drawingH, drawingW })
        // console.log({ rotateH, rotateW })

        this.setCanvasCenter()
      })
    },

    // 保证 canvas 在容器内水平居中
    setCanvasCenter() {
      const max = Math.max(rotateH, rotateW)
      drawing.scrollLeft = (max - drawingW) / 2
    },

    // 向左滚动
    scrollLeft() {
      scrollLeft -= this.scrollRange

      if(scrollLeft <= 0) {
        scrollLeft = 0
      }

      drawing.scrollLeft = scrollLeft
    },

    // 向上滚动
    scrollTop() {
      scrollTop -= this.scrollRange

      if(scrollTop <= 0) {
        scrollTop = 0
      }

      drawing.scrollTop = scrollTop
    },

    // 向右滚动
    scrollRight() {
      scrollLeft += this.scrollRange

      if(scrollLeft >= rotateW - drawingW) {
        scrollLeft = rotateW - drawingW
      }

      drawing.scrollLeft = scrollLeft
    },

    // 向下滚动
    scrollBottom() {
      scrollTop += this.scrollRange
      
      if(scrollTop >= rotateH - drawingH) {
        scrollTop = rotateH - drawingH
      }

      drawing.scrollTop = scrollTop
    }
  },
}