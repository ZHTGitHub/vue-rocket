export default {
  methods: {
    // 截图
    drawScreenshot() {
      const that = this 

      this._clearEventListener()

      this.drawingCtx.fillStyle = 'rgba(0, 0, 0, .46)'
      this.drawingCtx.lineWidth = 2
      this.drawingCtx.strokeStyle = '#1aad19'

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

          that.fillRectangle({ startX, startY, rectW, rectH, ctx: that.drawingCtx, overlay: true })
        }
      }

      document.addEventListener('mouseup', () => {
        if(startXY) {
          startXY = null
          this.createScreenshotFile()
        }
      })
    }
  }
}