export default {
  methods: {
    // 创建方框
    createRect(pointer) {
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
        fill: 'transparent',
        stroke: '#f00',
        strokeWidth: 3 / this.imageScale,

        hasRotatingPoint: false,
        hasBorders: false,
        lockRotation: true,
        cornerStyle: 'circle',
        cornerStrokeColor: '#f00',
        cornerColor: '#fff',
        cornerSize: 6 / this.imageScale,
        transparentCorners: false
      })

      rect.setControlsVisibility({ mtr: false })

      this.canvas.add(rect).setActiveObject(rect)

      this.downPoint = null
    }
  },
}