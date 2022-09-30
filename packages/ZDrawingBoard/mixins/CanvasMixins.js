export default {
  methods: {
    // 设置图像默认方向
    setDefaultDirection() {
      
    },

    // 设置默认截图区域
    setDefaultCutArea() {
      if(!this.shotArea) return

      const { x, y, width, height } = this.shotArea

      this.downPoint = { x, y }

      const pointer = {
        x: x + width,
        y: y + height
      }

      this.createCutRect(pointer)
    }
  }
}