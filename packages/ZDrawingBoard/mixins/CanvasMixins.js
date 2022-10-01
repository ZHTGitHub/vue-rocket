export default {
  methods: {
    // 设置画布默认方向
    setDefaultDirection(func) {
      switch (this.direction) {
        case 'top': 
          func && func()
          break;
      
        case 'right': 
          this.rotateCanvas('RIGHT', () => {
            func && func()
          })
          break;

        case 'bottom': 
          this.rotateCanvas('RIGHT', () => {
            this.rotateCanvas('RIGHT', () => {
              func && func()
            })
          })
          break;

        case 'left': 
          this.rotateCanvas('LEFT', () => {
            func && func()
          })
          break;
      }
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