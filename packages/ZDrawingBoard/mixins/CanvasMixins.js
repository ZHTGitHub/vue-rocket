import { moveSpace } from '../libs/constants'

export default {
  methods: {
    // 设置图像默认坐标
    setDefaultCoord() {
      if(!this.coord) return

      this.moveX = this.coord.x
      this.moveY = this.coord.y

      this.transformContainer('move')
    },

    // 设置图像默认方向
    setDefaultDirection(func) {
      switch (this.direction) {
        case 'TOP': 
          func && func()
          break;
      
        case 'RIGHT': 
          this.rotateCanvas('RIGHT', () => {
            func && func()
          })
          break;

        case 'BOTTOM': 
          this.rotateCanvas('RIGHT', () => {
            this.rotateCanvas('RIGHT', () => {
              func && func()
            })
          })
          break;

        case 'LEFT': 
          this.rotateCanvas('LEFT', () => {
            func && func()
          })
          break;

        default:
          func && func()
          break;
      }
    },

    // 设置图像默认截图区域
    setDefaultCutArea() {
      const { x = 0, y = 0, width = 0, height = 0 } = this.shotArea || {}

      if(!width || !height) {
        this.clearCutKlass()
        return
      }

      this.downPoint = { x, y }

      const pointer = {
        x: x + width,
        y: y + height
      }

      this.createCutRect(pointer)
    },

    // 设置默认操作
    setDefaultOption() {
      if(this.shot) {
        this.eventCut()
        return
      }

      if(this.rect) {
        this.eventRect()
        return
      }

      if(this.text) {
        this.eventText()
      }
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

      this.ctxList = []
      this.activeIndex = -1

      // 鼠标按下的坐标
      this.downPoint = null

      // 记录旋转状态
      this.rotated = false
      this.directionCount = 0

      this.initX = 0
      this.initY = 0
    },

    // 暂未使用
    setDefaultValues() {
      this.resetValues()

      this.view = null
      this.viewWidth = 0
      this.viewHeight = 0

      // container
      this.container = null

      // 截图区域
      this.cutArea = {}
    }
  }
}