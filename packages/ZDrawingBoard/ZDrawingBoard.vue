<template>
  <div class="z-drawing-board">
    <top-bar @topBarEvent="topBarEvent"></top-bar>

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
  import MoveMixins from './mixins/MoveMixins'
  import CutMixins from './mixins/CutMixins'
  import RectMixins from './mixins/RectMixins'
  import TextboxMixins from './mixins/TextboxMixins'
  import tools from './libs/tools'
  import containerEvent from './libs/containerEvent'
  import { TopBar } from './components'
  
  const moveSpace = 50

  const debounce = (() => {
    let timer = null

    return (fn, delay = 300) => {
      if(timer) {
        return
      }

      timer = setTimeout(() => {
        fn()
        timer = null
      }, delay)
    }
  })()

  export default {
    name: 'ZDrawingBoard',
    mixins: [MoveMixins, TextboxMixins, CutMixins, RectMixins],

    props: {
      shotArea: {
        type: Object,
        required: false
      },

      src: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        // view
        view: null,
        viewWidth: 0,
        viewHeight: 0,

        // image
        image: null,
        imageRealWidth: 0,
        imageRealHeight: 0,
        imageScale: 1,

        // container
        container: null,

        // canvas
        canvas: null,
        canvasWidth: 0,
        canvasHeight: 0,

        // retina
        retinaWidth: 0,
        retinaHeight: 0,

        // 
        isCut: false,
        isRect: false,
        isText: false,
        angle: 0,
        scale: 1,
        moveSpace,
        moveX: 0,
        moveY: 0,

        // text
        textboxCount: 0,
        textboxList: [],  
        textboxActiveIndex: -1,
        textboxIsActive: true,

        count: 0,
        ctxList: [],
        activeIndex: -1,

        cutArea: {},

        downPoint: null
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
          angle: this.angle,
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

      getContainer() {
        this.container = document.querySelector('#view .canvas-container')
      },

      transformContainer() {
        this.container.style.transform = `translate(${ this.moveX }px, ${ this.moveY }px) rotate(${ this.angle }deg) scale(${ this.scale })`
        this.container.style.transition = 'transform .16s ease-out'
      },

      // 创建画布
      createCanvas(source) {
        this.canvas?.dispose()

        const options = {
          enableRetinaScaling: true, 
          width: this.imageRealWidth, 
          height: this.imageRealHeight,
          backgroundColor: 'rgb(0, 0, 0)'
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

        this.getContainer()

        new fabric.Image.fromURL(source, (img) => {
          img.type = 'image'

          this.canvas.add(img)

          this.canvas.item(0)['hasControls'] = false
          this.canvas.item(0)['selectable'] = false
          this.canvas.item(0)['evented'] = false
        }, { crossOrigin: 'anonymous' })
      },

      // 更新画布
      updateCanvas() {
        this.clearCutCtx()
        this.setContextsSelectable(false)

        const [imageRealWidth, imageRealHeight] = [this.imageRealWidth, this.imageRealHeight]
        const [retinaWidth, retinaHeight] = [this.retinaWidth, this.retinaHeight]

        const image = new Image()
        image.src = this.canvas.toDataURL('image/png')

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

            ctx.translate(this.imageRealWidth, 0)
            ctx.rotate(90 * Math.PI / 180)

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
            })
          }
        }
      },

      // 鼠标按下
      canvasMouseDown(event) {
        const { pointer } = event

        this.downPoint = pointer

        const ctx = this.getActivatedCtx()

        if(ctx) {
          this.activeIndex = ctx.index
        }

        if(this.isText) {
          if(this.activeIndex === -1) {
            this.createTextbox(pointer.x, pointer.y)
            return
          }

          const activeObject = this.canvas.getActiveObject()

          if(!activeObject) {
            this.activeIndex = -1
          }

          console.log(activeObject)

          return
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
        }

        if(this.isCut) {
          // 只允许创建一次切图框
          const ctx = this.ctxList.find(c => c?.type === 'cut')
          if(ctx) return

          this.createCutRect(event.absolutePointer)
          // return
        }

        if(this.isRect) {
          this.createRect(event.absolutePointer)
          // return
        }
      },

      getActivatedCtx() {
        return this.canvas.getActiveObject()
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

      // 清空画布上当前操作对象
      clearActivatedCtx() {
        const ctx = this.getActivatedCtx()
        this.ctxList.splice(this.activeIndex, 1)
        this.canvas.remove(ctx)
      },

      // 清空画布上的切图操作痕迹
      clearCutCtx() {
        const cutCtx = this.ctxList.find(c => c?.type === 'cut')

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
        const cutCtx = this.clearCutCtx()
        const dataURL = this.canvas.toDataURL('image/png')

        let args = {}

        if(cutCtx) {
          args = {
            sx: this.cutArea.x, 
            sy: this.cutArea.y, 
            sw: this.cutArea.width, 
            sh: this.cutArea.height, 
            dx: 0, 
            dy: 0, 
            dw: this.cutArea.width, 
            dh: this.cutArea.height
          }
        }

        tools.generateImage(dataURL, args, (dataURL) => {
          tools.downloadImage(dataURL)
        })
      },
      
      topBarEvent(eventName) {
        this.eventName = eventName

        switch (eventName) {
          case 'cut':
            this.setContextsSelectable(false)

            this.isRect = false
            this.isText = false
            this.isCut = !this.isCut
            break;

          case 'rect':
            this.clearCutCtx()
            this.setContextsSelectable()

            this.isCut = false
            this.isText = false
            this.isRect = !this.isRect
            break;

          case 'text':
            this.clearCutCtx()
            this.setContextsSelectable()

            this.activeIndex = -1

            this.isCut = false
            this.isRect = false
            this.isText = !this.isText
            break;

          case 'move':
            break;

          case 'zoomOut':
            this.scale = containerEvent.zoomOut(this.params)
            this.transformContainer()
            break;

          case 'zoomIn':
            this.scale = containerEvent.zoomIn(this.params)
            this.transformContainer()
            break;

          case 'rotateRight':
            this.updateCanvas()
            break;

          case 'rotateLeft':
            this.updateCanvas()
            break;

          case 'clear':
            this.clearCanvas()
            break;

          case 'done':
            this.save()
            break;
        }

        this.canvas.requestRenderAll()
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