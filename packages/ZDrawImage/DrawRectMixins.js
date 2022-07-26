export default {
  methods: {
    // 框图
    drawRectangle() {
      this._clearEventListener()

      this.drawingCtx.lineWidth = 3
      this.drawingCtx.strokeStyle = this.rectColor

      let startXY = null

      this.drawingCanvas.onmousedown = (event) => {
        startXY = {
          x: event.offsetX,
          y: event.offsetY
        }
      }

      this.drawingCanvas.onmousemove = (event) => {
        if(startXY) {
          const { x: startX, y: startY } = startXY
          const rectW = event.offsetX - startX
          const rectH = event.offsetY - startY

          this.fillRectangle({ startX, startY, rectW, rectH, ctx: this.drawingCtx })
        }
      }

      document.addEventListener('mouseup', () => {
        if(startXY) {
          startXY = null
          this.createDrewFile()
        }
      })
    }
  }
}