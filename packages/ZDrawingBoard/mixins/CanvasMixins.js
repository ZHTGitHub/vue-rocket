  import { moveSpace } from '../libs/constants'

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

        default:
          func && func()
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
    },

    // 切换图像后初始化部分值
    resetValues() {
      // image
      this.imageRealWidth = 0
      this.imageRealHeight = 0
      this.imageScale = 1

      // canvas
      this.canvas = null
      this.canvasWidth = 0
      this.canvasHeight = 0

      // retina
      this.retinaWidth = 0
      this.retinaHeight = 0

      // 记录当前操作对象的状态
      this.isCut = false
      this.isRect = false
      this.isText = false
      this.scale = 1
      this.moveSpace = moveSpace
      this.moveX = 0
      this.moveY = 0

      this.count = 0
      this.ctxList = []
      this.activeIndex = -1

      // 鼠标按下的坐标
      this.downPoint = null

      this.initX = 0
      this.initY = 0
    },

    // 暂未使用
    setDefaultValues() {
      this.view = null
      this.viewWidth = 0
      this.viewHeight = 0

      // image
      this.imageRealWidth = 0
      this.imageRealHeight = 0
      this.imageScale = 1

      // container
      this.container = null

      // canvas
      this.canvas = null
      this.canvasWidth = 0
      this.canvasHeight = 0

      // retina
      this.retinaWidth = 0
      this.retinaHeight = 0

      // 记录当前操作对象的状态
      this.isCut = false
      this.isRect = false
      this.isText = false
      this.scale = 1
      this.moveSpace = moveSpace
      this.moveX = 0
      this.moveY = 0

      this.count = 0
      this.ctxList = []
      this.activeIndex = -1

      // 截图区域
      this.cutArea = {}

      // 鼠标按下的坐标
      this.downPoint = null
    }
  }
}