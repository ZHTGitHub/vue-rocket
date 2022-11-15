import containerEvent from '../libs/containerEvent'
import tools from '../libs/tools'

export default {
  methods: {
    topBarEvent(eventName) {
      this.eventName = eventName

      switch (eventName) {
        case 'cut':
          this.eventCut()
          break;

        case 'rect':
          this.eventRect()
          break;

        case 'text':
          this.eventText()
          break;

        case 'zoomOut':
          this.eventZoomOut()
          break;

        case 'zoomIn':
          this.eventZoomIn()
          break;

        case 'rotateRight':
          this.eventRotateRight()
          break;

        case 'rotateLeft':
          this.eventRotateLeft()
          break;

        case 'rotateMinRight':
          this.eventRotateMinRight()
          break;

        case 'rotateMinLeft':
          this.eventRotateMinLeft()
          break;

        case 'restore':
          this.$emit('restore')
          break;

        case 'clear':
          this.eventClear()
          break;

        case 'done':
          this.eventDone()
          break;
      }
    },

    // 截图
    eventCut() {
      this.setContextsSelectable(false)

      this.isRect = false
      this.isText = false
      this.isCut = !this.isCut

      this.canvas.requestRenderAll()
    },

    // 方框
    eventRect() {
      this.clearCutKlass()
      this.setContextsSelectable(false)

      this.isCut = false
      this.isText = false
      this.isRect = !this.isRect

      this.canvas.requestRenderAll()
    },
    
    // 文字
    eventText() {
      this.clearCutKlass()
      this.setContextsSelectable(false)

      this.activeIndex = -1

      this.isCut = false
      this.isRect = false
      this.isText = !this.isText

      this.canvas.requestRenderAll()
    },

    // 放大
    eventZoomIn() {
      this.scale = containerEvent.zoomIn(this.params)
      this.scaling = true
      this.angling = false

      this.limitZoomIn()

      this.$emit('zoom', this.scale)

      this.transformContainer()

      this.canvas.requestRenderAll()
    },

    // 缩小
    eventZoomOut() {
      this.scale = containerEvent.zoomOut(this.params)
      this.scaling = true
      this.angling = false

      this.limitZoomOut()

      this.$emit('zoom', this.scale)

      this.transformContainer()

      this.canvas.requestRenderAll()
    },

    // 还原
    eventZoomOrigin() {
      this.scale = containerEvent.zoomOrigin(this.params)
      this.scaling = true
      this.angling = false

      this.$emit('zoom', this.scale)

      this.transformContainer()

      this.canvas.requestRenderAll()
    },

    // 右旋转
    eventRotateRight() {
      this.angling = true
      this.scaling = false

      tools.throttle(() => {
        this.rotateCanvas('RIGHT', void 0, true)
        this.canvas.requestRenderAll()
      })
    },

    // 左旋转
    eventRotateLeft() {
      this.angling = true
      this.scaling = false
      
      tools.throttle(() => {
        this.rotateCanvas('LEFT', void 0, true)
        this.canvas.requestRenderAll()
      })
    },

    // 微右旋转 
    eventRotateMinRight() {
      this.rotate += this.angle
      this.container.style['transform-origin'] = '50% 50% 0'
      this.container.style.transform = `rotate(${ this.rotate }deg)`
      this.container.style.transition = 'transform .16s ease-out'
    },

    // 微左旋转
    eventRotateMinLeft() {
      this.rotate -= this.angle
      this.container.style['transform-origin'] = '50% 50% 0'
      this.container.style.transform = `rotate(${ this.rotate }deg)`
      this.container.style.transition = 'transform .06s ease-out'
    },

    // 清空画布
    eventClear() {
      this.clearCanvas()

      this.canvas?.requestRenderAll()
    },

    // 完成
    eventDone() {
      this.save()
    },

    // 清空画布上当前操作对象
    eventClearActivatedCtx() {
      this.clearActivatedCtx()
    },

    // 向上平移
    eventMoveTop() {
      this.moveY = containerEvent.moveTop(this.params)
      this.initY = this.moveY
      this.transformContainer()
    },

    // 向右平移
    eventMoveRight() {
      this.moveX = containerEvent.moveRight(this.params)
      this.initX = this.moveX
      this.transformContainer()
    },

    // 向下平移
    eventMoveBottom() {
      this.moveY = containerEvent.moveBottom(this.params)
      this.initY = this.moveY
      this.transformContainer()
    },

    // 向左平移
    eventMoveLeft() {
      this.moveX = containerEvent.moveLeft(this.params)
      this.initX = this.moveX
      this.transformContainer()
    }
  }
}