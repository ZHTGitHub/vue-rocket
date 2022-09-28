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

      const rect = new fabric.Rect({
        top,
        left,
        width,
        height,
        fill: 'rgba(255, 255, 255, .5)',
        stroke: '#4caf50',
        strokeWidth: 1.5 / this.imageScale,

        hasRotatingPoint: false,
        hasBorders: false,
        lockRotation: true,
        cornerColor: '#4caf50',
        cornerSize: 6 / this.imageScale,
        transparentCorners: false
      })

      rect.setControlsVisibility({ mtr: false })

      this.canvas.add(rect).setActiveObject(rect)

      this.downPoint = null
    }
  }
}