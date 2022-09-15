<template>
  <div class="z-drawing-board">
    <top-bar @topBarEvent="topBarEvent"></top-bar>

    <div class="view" ref="view">
      <canvas 
        class="canvas" 
        id="image" 
        ref="image"
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
        image: null,

        canvasCtx: null,
        imageCtx: null,

        imageHeight: void 0,
        imageWidth: void 0,

        view: null,
        viewHeight: void 0,
        viewWidth: void 0,

        scale: 1,
        imageXOffset: 0,
        imageYOffset: 0,
        degree: 0,
        rotate: 0,

        testH: 0,
        testW: 0,

        mouseStartPoint: null,
        mouseEndPoint: null
      }
    },

    mounted() {
      this.init()
    },

    methods: {
      init() {
        this.canvas = this.$refs.canvas
        this.image = this.$refs.image

        this.canvasCtx = this.canvas.getContext('2d')
        this.imageCtx = this.image.getContext('2d')

        // view
        this.view = this.$refs.view
        this.viewHeight = this.view.offsetHeight
        this.viewWidth = this.view.offsetWidth

        this.src && this.loadImage(this.src)
      },

      getImageInfo({ imageHeight, imageWidth }) {
        this.imageHeight = imageHeight
        this.imageWidth = imageWidth

        const scaleHeight = +(this.viewHeight / this.imageHeight).toFixed(2)
        const scaleWidth = +(this.viewWidth / this.imageWidth).toFixed(2)

        const scale = Math.min(scaleHeight, scaleWidth)

        this.setCanvas(scale)
      },

      setCanvas(scale) {
        this.canvas.setAttribute('height', this.viewHeight)
        this.canvas.setAttribute('width', this.viewWidth)

        this.image.setAttribute('height', this.imageHeight)
        this.image.setAttribute('width', this.imageWidth)

        this.image.style.height = this.imageHeight * scale + 'px'
        this.image.style.width = this.imageWidth * scale + 'px'

        this.imageXOffset = (this.viewWidth / 2) - (this.imageWidth * scale / 2)
        this.imageYOffset = (this.viewHeight / 2) - (this.imageHeight * scale / 2)

        this.updateImage()

        // 测试
        this.testH = this.imageHeight * scale
        this.testW = this.imageWidth * scale
      },

      loadImage(src) {
        if(this.image) {
          tools.generateImage(src, this.image, this.getImageInfo)
          return
        }

        this.$nextTick(() => {
          tools.generateImage(src, this.image, this.getImageInfo)
        })
      },

      topBarEvent(eventName) {
        switch (eventName) {
          case 'cut':
            
            break;

          case 'rect':
            
            break;

          case 'text':
            
            break;

          case 'zoomOut':
            this.scale = +(this.scale * 1.1).toFixed(2)

            this.imageXOffset = (this.viewWidth / 2) - this.image.offsetWidth * this.scale / 2
            this.imageYOffset = (this.viewHeight / 2) - this.image.offsetHeight * this.scale / 2 

            console.log({ viewWidth: this.viewWidth, imageWidth: this.image.offsetWidth })
            console.log({ imageXOffset: this.imageXOffset })

            this.updateImage()
            break;

          case 'zoomIn':
            this.scale = +(this.scale * 0.9).toFixed(2)
            this.updateImage()
            break;

          case 'rotateRight':
            this.rotate += 90
            this.updateImage()
            break;

          case 'rotateLeft':
            this.rotate -= 90
            this.updateImage()
            break;

          case 'clear':

            break;

          case 'done':
            
            break;
        }
      },

      updateImage() {
        this.image.style.transform = `translate(${ this.imageXOffset }px, ${ this.imageYOffset }px) scale(${ this.scale }) rotateZ(${ this.rotate }deg)`
      },

      canvasMousedown(event) {
        this.mouseStartPoint = tools.getCoordinatesOnCanvas(this.canvas, event.clientX, event.clientY)

        console.log(this.imageXOffset)

        this.canvas.addEventListener('mousemove', this.canvasMouseMove, false)
        this.canvas.addEventListener('mouseup', this.canvasMouseup, false)
      },

      canvasMouseMove(event) {
        this.mouseEndPoint = tools.getCoordinatesOnCanvas(this.canvas, event.clientX, event.clientY)

        let translateX = this.imageXOffset + (this.mouseEndPoint.x - this.mouseStartPoint.x)
        let translateY = this.imageYOffset = (this.mouseEndPoint.y - this.mouseStartPoint.y)

        this.image.style.transform = `scale(${ this.scale }) translate(${ translateX }px, ${ translateY }px) rotateZ(${ this.rotate }deg)`
      },

      canvasMouseup() {
        this.canvas.removeEventListener('mousemove', this.canvasMouseMove, false)
        this.canvas.removeEventListener('mouseup', this.canvasMouseup, false)
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
    }
  }
</style>