<template>
  <div class="z-drawing-board">
    <top-bar @topBarEvent="topBarEvent"></top-bar>

    <img :src="blobSrc" width="100">

    <div class="view" id="view" ref="view">
      <canvas 
        class="canvas" 
        id="canvas" 
        ref="canvas"
      >
        The browser does not support canvas
      </canvas>
    </div>
  </div>
</template>

<script>
  import { fabric } from 'fabric'
  import CanvasMixins from './mixins/CanvasMixins'
  import CutMixins from './mixins/CutMixins'
  import RectMixins from './mixins/RectMixins'
  import TextboxMixins from './mixins/TextboxMixins'
  import EventMixins from './mixins/EventMixins'
  import tools from './libs/tools'
  import containerEvent from './libs/containerEvent'
  import { TopBar } from './components'
  import { moveSpace, cutRectStrokeWidth } from './libs/constants'
   
  export default {
    name: 'ZDrawingBoard',
    mixins: [CanvasMixins, TextboxMixins, CutMixins, RectMixins, EventMixins],

    props: {
      // 图像默认方向
      direction: {
        validator(value) {
          return !!~['top', 'right', 'bottom', 'left'].indexOf(value)
        },
        default: 'top'
      },

      // 下载
      download: {
        type: Boolean,
        default: false
      },

      // 图像名
      name: {
        type: String,
        default: 'screenshot'
      },

      // 默认截图区域
      shotArea: {
        type: Object,
        required: false
      },

      // 图像源路径
      src: {
        type: String,
        required: true
      },
      
      // 缩放
      zoom: {
        type: Number,
        default: 1
      }
    },

    data() {
      return {
        // view
        view: null,
        viewWidth: 0,
        viewHeight: 0,

        // image
        imageRealWidth: 0,
        imageRealHeight: 0,
        imageScale: 1,

        // container
        container: null,

        // canvas
        canvas: null,
        canvasWidth: 0,
        canvasHeight: 0,

        // 视网膜
        retinaWidth: 0,
        retinaHeight: 0,

        // 记录当前操作对象的状态
        isCut: false,
        isRect: false,
        isText: false,
        scale: 1,
        moveSpace,
        moveX: 0,
        moveY: 0,

        // 记录画布操作状态
        count: 0,
        ctxList: [],
        activeIndex: -1,

        // 截图区域
        cutArea: {},

        // 鼠标按下的坐标
        downPoint: null,

        // 记录旋转状态
        directionCount: 0,

        blobSrc: ''
      }
    },

    computed: {
      params() {
        return {
          viewWidth: this.viewWidth,
          viewHeight: this.viewHeight,
          imageRealWidth: this.imageRealWidth,
          imageRealHeight: this.imageRealHeight,
          imageScale: this.imageScale,
          isRect: this.isRect,
          isText: this.isText,
          scale: this.scale,
          moveSpace: this.moveSpace,
          moveX: this.moveX,
          moveY: this.moveY
        }
      }
    },

    watch: {
      src: {
        handler(src) {
          if(this.canvas) {
            this.canvas?.dispose()
            this.resetValues()
          }

          tools.loadImage(src, this.setImage)
        },
        immediate: true
      }
    },

    methods: {
      // 设置图片信息
      setImage(width, height) {
        this.getView()

        this.imageRealWidth = width
        this.imageRealHeight = height

        const scaleWidth = this.viewWidth / this.imageRealWidth
        const scaleHeight = this.viewHeight / this.imageRealHeight

        this.imageScale = Math.min(scaleWidth, scaleHeight)

        this.retinaWidth = this.imageRealWidth * this.imageScale
        this.retinaHeight = this.imageRealHeight * this.imageScale

        this.createCanvas(this.src)
      },

      // 获取画布视图的宽高
      getView() {
        this.view = this.$refs.view
        this.viewWidth = this.view.offsetWidth
        this.viewHeight = this.view.offsetHeight
      },

      // 获取画布容器的实例
      getContainer() {
        this.container = document.querySelector('#view .canvas-container')
      },

      // 设置画布移动、旋转动画
      transformContainer() {
        this.container.style.transform = `translate(${ this.moveX }px, ${ this.moveY }px) scale(${ this.scale })`
        this.container.style.transition = 'transform .16s ease-out'
      },

      // 创建画布
      createCanvas(source) {
        const options = {
          enableRetinaScaling: true, 
          width: this.imageRealWidth, 
          height: this.imageRealHeight,
          backgroundColor: 'rgb(0, 0, 0)',
          crossOrigin: 'anonymous'
        }

        const dimensions = {
          width: this.retinaWidth + 'px',
          height: this.retinaHeight + 'px'
        }

        this.canvas = new fabric.Canvas('canvas', options)
        this.canvas.setDimensions(dimensions, { cssOnly: true })
        
        this.canvas.on('mouse:down', this.canvasMouseDown)
        this.canvas.on('mouse:move', this.canvasMouseMove)
        this.canvas.on('mouse:up', this.canvasMouseUp)

        this.canvas.on('mouse:wheel', this.canvasWheel)

        this.getContainer()

        fabric.Image.fromURL(source + '?' + Date.now(), img => {
          img.type = 'image'
          // img.crossOrigin = 'anonymous'

          this.canvas.add(img)

          this.canvas.item(0)['hasControls'] = false
          this.canvas.item(0)['selectable'] = false
          this.canvas.item(0)['evented'] = false

          // 设置画布默认方向
          this.setDefaultDirection(() => {
            // 设置默认截图区域
            this.setDefaultCutArea()

            // 设置默认缩放
            if(this.zoom !== 1) {
              this.scale = this.zoom
              this.transformContainer()
            }

            // 画布完成初始化
            this.$emit('load')
          })
        }, { crossOrigin: 'anonymous' })
      },  

      // 旋转画布
      rotateCanvas(direction, func) {
        this.setDirection(direction)

        if(!direction) return

        this.clearCutCtx()
        this.setContextsSelectable(false)

        const [imageRealWidth, imageRealHeight] = [this.imageRealWidth, this.imageRealHeight]
        const [retinaWidth, retinaHeight] = [this.retinaWidth, this.retinaHeight]

        const image = new Image()
        image.setAttribute('crossOrigin', 'anonymous')

        image.onload = () => {
          // 旋转后交换画布的宽高
          {
            this.imageRealWidth = imageRealHeight
            this.imageRealHeight = imageRealWidth

            this.retinaWidth = retinaHeight
            this.retinaHeight = retinaWidth
          }

          // 生成旋转后的图片
          const canvas = document.createElement('canvas')

          {
            canvas.width = this.imageRealWidth
            canvas.height = this.imageRealHeight

            const ctx = canvas.getContext('2d')
            
            switch (direction) {
              case 'RIGHT':
                ctx.translate(this.imageRealWidth, 0)
                ctx.rotate(90 * Math.PI / 180)
                break;
            
              case 'LEFT': 
                ctx.translate(0, this.imageRealHeight)
                ctx.rotate(-90 * Math.PI / 180)
                break;
            }

            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height)
          }

          const dataURL = canvas.toDataURL('image/png')

          this.clearCanvas()

          // 旋转后重新设置画布的宽高，重新绘制图片
          {
            this.canvas.setWidth(this.imageRealWidth)
            this.canvas.setHeight(this.imageRealHeight)

            const dimensions = {
              width: this.retinaWidth + 'px',
              height: this.retinaHeight + 'px'
            }

            this.canvas.setDimensions(dimensions, { cssOnly: true })

            const imgCtx = this.canvas.getObjects()[0]
            imgCtx.setSrc(dataURL, () => {
              this.canvas.renderAll()

              func && func()
            }, { crossOrigin: 'anonymous' })
          }
        }

        image.src = this.canvas.toDataURL('image/png')
      },

      // 鼠标按下
      canvasMouseDown(event) {
        const { pointer } = event

        this.downPoint = pointer

        const ctx = this.getActivatedCtx()

        if(ctx) {
          this.activeIndex = ctx.index
        }

        // 文字
        if(this.isText) {
          if(this.activeIndex === -1) {
            this.createTextbox(pointer.x, pointer.y)
            return
          }

          const activeObject = this.canvas.getActiveObject()

          if(!activeObject) {
            this.activeIndex = -1
          }

          if(!activeObject) {
            this.clearEmptyTextbox()
          }
        }
      },

      // 鼠标移动
      canvasMouseMove(event) {
        // debounce(() => {
        //   console.log(event)
        // })
      },

      // 鼠标抬起
      canvasMouseUp(event) {
        const ctx = this.getActivatedCtx() 

        // 计算截图区域
        if(ctx?.type === 'cut') {
          const { left, top, width, height } = ctx

          this.cutArea = {
            x: left,
            y: top,
            width,
            height
          }

          this.$emit('cut', this.cutArea)
        }

        // 切图
        if(this.isCut) {
          // 只允许创建一次切图框
          const ctx = this.ctxList.find(c => c?.type === 'cut')
          if(ctx) return

          this.createCutRect(event.pointer)
          return
        }

        // 画框
        if(this.isRect) {
          this.createRect(event.pointer)
        }
      },

      // 滚轮滚动
      canvasWheel(event) {
        tools.throttle(() => {
          this.scale = event.e.wheelDelta > 0 ? containerEvent.zoomOut(this.params) : containerEvent.zoomIn(this.params)
          this.transformContainer()
        }, 10)
      },

      // 获取当前操作对象
      getActivatedCtx() {
        return this.canvas.getActiveObject()
      },

      // 获取画布上的切图对象
      getCutCtx() {
        return this.ctxList.find(c => c?.type === 'cut')
      },
      
      // 设置所有对象均不可操作/可操作(截图对象保留当前状态)
      setContextsSelectable(selectable = true) {
        const len = this.ctxList.length

        for(let i = 1; i <= len; i++) {
          const ctx = this.ctxList[i]

          if(ctx?.type === 'cut') continue

          if(!this.canvas.item(i)) continue

          this.canvas.item(i)['selectable'] = selectable
          this.canvas.item(i)['evented'] = selectable
        }
      },

      // 设置画布方向
      setDirection(direction) {
        switch (direction) {
          case 'RIGHT':
            ++this.directionCount

            if(this.directionCount > 3) {
              this.directionCount = 0
            }
            break;
        
          case 'LEFT':
            --this.directionCount

            if(this.directionCount < -3) {
              this.directionCount = 0
            }
            break;
        }

        this.$emit('direction', tools.setDirection(this.directionCount))
      },

      // 清空画布上当前操作对象
      clearActivatedCtx() {
        const ctx = this.getActivatedCtx()
        this.ctxList.splice(this.activeIndex, 1)
        this.canvas.remove(ctx)
      },

      // 清空未输入文字的文本框
      clearEmptyTextbox() {
        const len = this.ctxList.length

        for(let i = 0; i < len; i++) {
          const ctx = this.ctxList[i]

          if(ctx?.type === 'textbox' && !ctx.text) {
            this.ctxList.splice(i, 1)
            this.canvas.remove(ctx)
            break
          }
        }
      },

      // 清空画布上的切图操作痕迹
      clearCutCtx() {
        const cutCtx = this.getCutCtx()

        if(cutCtx) {
          const index = this.ctxList.findIndex(c => c?.type === 'cut')
          this.ctxList.splice(index, 1)
          this.canvas.remove(cutCtx)
        }

        return cutCtx
      },

      // 清空画布上的操作痕迹
      clearCanvas() {
        for(let ctx of this.ctxList) {
          this.canvas.remove(ctx)
        }
      },

      // 保存编辑后的图片
      save() {
        this.downloadCanvas()
      },

      // 下载
      downloadCanvas() {
        const cutCtx = this.getCutCtx()
        const dataURL = this.canvas.toDataURL('image/png')

        let args = {}

        if(cutCtx) {
          const realStrokeWidth = cutRectStrokeWidth / this.imageScale

          args = {
            sx: this.cutArea.x + realStrokeWidth, 
            sy: this.cutArea.y + realStrokeWidth, 
            sw: this.cutArea.width - realStrokeWidth, 
            sh: this.cutArea.height - realStrokeWidth, 
            dx: 0, 
            dy: 0, 
            dw: this.cutArea.width - realStrokeWidth, 
            dh: this.cutArea.height - realStrokeWidth
          }
        }

        tools.generateImage(dataURL, args, (_dataURL) => {
          if(this.download) {
            tools.downloadImage(_dataURL)
          }

          const file = tools.base64ToFile(_dataURL, this.name)
          this.$emit('done', file)
        })
      }
    },

    components: {
      TopBar
    }
  }
</script>

<style scoped lang="scss">
  .z-drawing-board {
    display: flex;
    flex-direction: column;
    height: inherit;

    .view {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      background-color: #4c4c4c;
      overflow: hidden;
    }
  }
</style>