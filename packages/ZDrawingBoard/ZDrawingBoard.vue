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
  import RectMixins from './mixins/RectMixins'
  import CutMixins from './mixins/CutMixins'
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
    mixins: [MoveMixins, RectMixins, CutMixins],

    props: {
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

        // img canvas
        imgCanvas: null,

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

        this.createCanvas()
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
      },

      createCanvas() {
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

        new fabric.Image.fromURL(this.src, (img) => {
          this.imgCanvas = img

          this.canvas.add(this.imgCanvas)

          this.canvas.item(0)['hasControls'] = true
          this.canvas.item(0)['selectable'] = false
          this.canvas.item(0)['evented'] = false
        }, { crossOrigin: 'anonymous' })

        // console.log(this.canvas)
      },

      // 鼠标按下
      canvasMouseDown(event) {
        const { absolutePointer, pointer } = event

        this.downPoint = absolutePointer

        console.log(event)

        if(this.isText) {
          if(this.textboxActiveIndex === -1) {
            this.addTextbox(pointer.x, pointer.y)
            return
          }

          const activeObject = this.canvas.getActiveObject()

          if(!activeObject) {
            this.textboxActiveIndex = -1
          }

          console.log(activeObject)

          return
        }

        
      },

      canvasMouseMove(event) {
        debounce(() => {
          console.log(event)
        })
      },

      // 鼠标抬起
      canvasMouseUp(event) {
        if(this.isCut) {
          this.createCutRect(event.absolutePointer)
          return
        }

        if(this.isRect) {
          this.createRect(event.absolutePointer)
          return
        }
      },

      // 添加文本输入框
      addTextbox(x, y) {
        // if(!this.textboxIsActive) return

        const textbox = new fabric.Textbox('', {
          width: 80 / this.imageScale,
          top: y,
          left: x,
          padding: 4 / this.imageScale,
          borderScaleFactor: 1 / this.imageScale,
          borderColor: '#f00',
          editingBorderColor: '#f00',
          fill: '#f00',
          fontSize: 20 / this.imageScale,
          hasControls: false
        })

        textbox.id = this.textboxCount

        textbox.on('selected', () => {
          this.textboxActiveIndex = textbox.id
          // this.textboxIsActive = false
        })

        this.canvas.add(textbox).setActiveObject(textbox)
        textbox.enterEditing()

        this.textboxList[this.textboxCount] = textbox
        ++this.textboxCount
      },

      // 保存编辑后的图片
      save() {
        this.downloadCanvas()
      },

      downloadCanvas() {
        const image = new Image()
        image.src = this.canvas.toDataURL('image/png')

        image.onload = async () => {
          const canvas = document.createElement('canvas')
          canvas.width = image.height
          canvas.height = image.width

          const ctx = canvas.getContext('2d')

          ctx.translate(image.height, 0)
          ctx.rotate(90 * Math.PI / 180)

          ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height)
        
          const dataURL = canvas.toDataURL('image/png')
          
          const anchor = document.createElement('a')

          anchor.style.display = 'none'
          anchor.href = dataURL
          anchor.download = 'screenshot.png'
          document.body.appendChild(anchor)
          anchor.click()
          document.body.removeChild(anchor)
        }
      },
      
      topBarEvent(eventName) {
        this.eventName = eventName

        switch (eventName) {
          case 'cut':
            this.isRect = false
            this.isText = false
            this.isCut = !this.isCut
            break;

          case 'rect':
            this.isCut = false
            this.isText = false
            this.isRect = !this.isRect
            break;

          case 'text':
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
            this.angle = containerEvent.rotateRight(this.params)
            this.transformContainer()
            break;

          case 'rotateLeft':
            this.angle = containerEvent.rotateLeft(this.params)
            this.transformContainer()
            break;

          case 'clear':
            for(let textbox of this.textboxList) {
              this.canvas.remove(textbox)
            }
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
      position: relative;
      background-color: #4c4c4c;
      overflow: hidden;

      /* .canvas {
        position: absolute;
        transition: transform 160ms linear;
      } */
    }
  }
</style>