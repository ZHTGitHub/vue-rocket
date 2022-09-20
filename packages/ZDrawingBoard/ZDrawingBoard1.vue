<template>
  <div class="z-drawing-board">
    <top-bar @topBarEvent="topBarEvent"></top-bar>

    <div class="view" id="view" ref="view">
      <canvas 
        class="canvas" 
        id="imageCanvas" 
        ref="imageCanvas"
      >
        The browser does not support canvas
      </canvas>

      <canvas 
        class="canvas" 
        id="canvas" 
        ref="canvas"
        @mousedown="canvasMousedown"
      >
        The browser does not support canvas
      </canvas>
    </div>
  </div>
</template>

<script>
  import tools from './libs/tools'
  import imageEvent from './libs/imageEvents'
  import drawText from './draw/drawText'
  import { TopBar } from './components'

  export default {
    name: 'ZDrawingBoard',

    props: {
      src: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        canvas: null,
        imageCanvas: null,

        canvasCtx: null,
        imageCtx: null,

        imageWidth: void 0,
        imageHeight: void 0,
        imgRealWidth: void 0,
        imgRealHeight: void 0,

        view: null,

        viewWidth: void 0,
        viewHeight: void 0,

        imageScale: 0,
        scale: 1,
        imageXOffset: 0,
        imageYOffset: 0,
        degree: 0,

        mouseStartPoint: null,
        mouseEndPoint: null,

        throttleFn: null,

        move: false,
        eventName: void 0
      }
    },

    computed: {
      params() {
        return {
          viewWidth: this.viewWidth,
          viewHeight: this.viewHeight,  
          imageWidth: this.imageWidth,
          imageHeight: this.imageHeight,
          imgRealWidth: this.imgRealWidth,
          imgRealHeight: this.imgRealHeight,
          imageXOffset: this.imageXOffset,
          imageYOffset: this.imageYOffset,
          imageScale: this.imageScale,
          scale: this.scale,
          degree: this.degree
        }
      }
    },

    created() {
      this.handleThrottle()
    },

    mounted() {
      this.init()
    },

    methods: {
      init() {
        this.canvas = this.$refs.canvas
        this.imageCanvas = this.$refs.imageCanvas

        this.canvasCtx = this.canvas.getContext('2d')
        this.imageCtx = this.imageCanvas.getContext('2d')

        // view
        this.view = this.$refs.view
        this.viewWidth = this.view.offsetWidth
        this.viewHeight = this.view.offsetHeight

        this.src && this.loadImage(this.src)
      },

      loadImage(src) {
        if(this.imageCanvas) {
          tools.generateImage(src, this.imageCanvas, this.getImageInfo)
          return
        }

        this.$nextTick(() => {
          tools.generateImage(src, this.imageCanvas, this.getImageInfo)
        })
      },

      getImageInfo({ imgRealWidth, imgRealHeight }) {
        this.imgRealWidth = imgRealWidth
        this.imgRealHeight = imgRealHeight

        const scaleWidth = this.viewWidth / this.imgRealWidth
        const scaleHeight = this.viewHeight / this.imgRealHeight

        this.imageScale = Math.min(scaleWidth, scaleHeight)

        this.setCanvas()
      },

      setCanvas() {
        this.canvas.setAttribute('width', this.viewWidth)
        this.canvas.setAttribute('height', this.viewHeight)

        this.canvas.style.cursor = 'crosshair'

        this.imageCanvas.setAttribute('width', this.imgRealWidth)
        this.imageCanvas.setAttribute('height', this.imgRealHeight)

        this.imageWidth = this.imgRealWidth * this.imageScale
        this.imageHeight = this.imgRealHeight * this.imageScale

        this.imageCanvas.style.width = this.imageWidth + 'px'
        this.imageCanvas.style.height = this.imageHeight + 'px'

        this.imageXOffset = (this.viewWidth / 2) - (this.imgRealWidth * this.imageScale / 2)
        this.imageYOffset = (this.viewHeight / 2) - (this.imgRealHeight * this.imageScale / 2)

        console.log({ imageXOffset: this.imageXOffset, imageYOffset: this.imageYOffset })

        this.updateImage()
      },
      
      topBarEvent(eventName) {
        this.eventName = eventName
        this.canvas.style.cursor = 'auto'

        switch (eventName) {
          case 'cut':
            this.canvas.style.cursor = 'crosshair'
            
            break;

          case 'rect':
            this.canvas.style.cursor = 'crosshair'
            
            break;

          case 'text':

            break;

          case 'move':
            this.canvas.style.cursor = 'move'
            break;

          case 'zoomOut':
            this.scale = imageEvent.zoomOut(this.params)
            this.updateImage()
            break;

          case 'zoomIn':
            this.scale = imageEvent.zoomIn(this.params)
            this.updateImage()
            break;

          case 'rotateRight':
            this.degree = imageEvent.rotateRight(this.params)
            this.updateImage()
            break;

          case 'rotateLeft':
            this.degree = imageEvent.rotateLeft(this.params)
            this.updateImage()
            break;

          case 'clear':

            break;

          case 'done':
            
            break;
        }
      },

      updateImage() {
        this.imageCanvas.style.transform = `translate(${ this.imageXOffset }px, ${ this.imageYOffset }px) scale(${ this.scale }) rotateZ(${ this.degree }deg)`
      },

      // 鼠标按下
      canvasMousedown(event) {
        this.mouseStartPoint = tools.getCoordinatesOnCanvas(this.canvas, event.clientX, event.clientY)

        if(this.eventName === 'text')
          drawText({
            canvas: this.canvas,
            imageCanvas: this.imageCanvas,
            coordinates: this.mouseStartPoint,
            color: '#ff1e10',
            params: this.params
          })

        this.canvas.addEventListener('mousemove', this.throttleFn, false)
        this.canvas.addEventListener('mouseup', this.canvasMouseup, false)
      },

      // 鼠标移动
      canvasMouseMove(event) {
        this.mouseEndPoint = tools.getCoordinatesOnCanvas(this.canvas, event.clientX, event.clientY)

        // 拖拽
        if(this.eventName === 'move') {
          const { imageXOffset, imageYOffset } = tools.getImageTranslate(this.imageXOffset, this.imageYOffset, this.mouseStartPoint, this.mouseEndPoint)

          this.imageCanvas.style.transform = `translate(${ imageXOffset }px, ${ imageYOffset }px) scale(${ this.scale }) rotateZ(${ this.degree }deg)`
        }
      },

      // 鼠标抬起
      canvasMouseup() {
        if(this.eventName === 'move') {
          const { imageXOffset, imageYOffset } = tools.getImageTranslate(this.imageXOffset, this.imageYOffset, this.mouseStartPoint, this.mouseEndPoint)

          this.imageXOffset = imageXOffset
          this.imageYOffset = imageYOffset
        }
        
        this.canvas.removeEventListener('mousemove', this.throttleFn, false)
        this.canvas.removeEventListener('mouseup', this.canvasMouseup, false)
      },

      handleThrottle() {
       this.throttleFn = tools.throttle(this.canvasMouseMove)
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
      position: relative;
      background-color: #4c4c4c;
      overflow: hidden;

      .canvas {
        position: absolute;
        transition: transform 160ms linear;
      }

      ::v-deep #field {
        position: absolute;
        padding: 4px 8px;
        min-width: 100px;
        font-size: 18px;
        font-weight: 550;
        outline: none;
      }
    }
  }
</style>