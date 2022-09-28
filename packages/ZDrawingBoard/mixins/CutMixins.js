export default {
  methods: {
    // 创建剪裁方框
    createCutRect(pointer) {
      if(JSON.stringify(this.downPoint) === JSON.stringify(pointer)) return

      const activeObject = this.canvas.getActiveObject()

      if(activeObject) {
        return
      }

      let top = Math.min(this.downPoint.y, pointer.y)
      let left = Math.min(this.downPoint.x, pointer.x)
      let width = Math.abs(this.downPoint.x - pointer.x)
      let height = Math.abs(this.downPoint.y - pointer.y)

      const coverRect = new fabric.Rect({
        top: 0,
        left: 0,
        width: this.imageRealWidth,
        height: this.imageRealHeight,
        fill: 'rgba(0, 0, 0, .5)'
      })

      const rect = new fabric.Rect({
        top,
        left,
        width,
        height,
        fill: 'transparent',
        stroke: '#4caf50',
        strokeWidth: 1.5 / this.imageScale,

        hasRotatingPoint: false,
        lockRotation: true,
        cornerColor: '#4caf50',
        cornerSize: 6 / this.imageScale,
        transparentCorners: false,
        
        // fillRule: 'nonzero',
        globalCompositeOperation: 'source-over',
      })

      rect.setControlsVisibility({ mtr: false })

      this.canvas.add(coverRect)
      this.canvas.add(rect).setActiveObject(rect)

      this.downPoint = null
    }
  }
}