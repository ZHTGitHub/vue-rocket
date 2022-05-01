export default {
  methods: {
    // 框图
    drawRectangle() {
      const that = this

      this._clearEventListener()

      this.drawingCtx.lineWidth = 3
      this.drawingCtx.strokeStyle = this.rectColor

      let startXY = null

      this.drawingCanvas.onmousedown = function(event) {
        startXY = {
          x: event.offsetX,
          y: event.offsetY
        }
      }

      this.drawingCanvas.onmousemove = function(event) {
        if(startXY) {
          const { x: startX, y: startY } = startXY
          const rectW = event.offsetX - startX
          const rectH = event.offsetY - startY

          that.fillRectangle({ startX, startY, rectW, rectH, ctx: that.drawingCtx })
        }
      }

      document.addEventListener('mouseup', function() {
        if(startXY) {
          startXY = null
          that.createDrewFile()
        }
      })
    }
  }
}