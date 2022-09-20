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
  import tools from './libs/tools'
  import imageEvent from './libs/imageEvents'
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
        // view
        view: null,
        viewWidth: 0,
        viewHeight: 0,

        // image
        image: null,
        imageRealWidth: 0,
        imageRealHeight: 0,
        imageScale: 1,

        // canvas
        canvas: null,
        canvasWidth: 0,
        canvasHeight: 0,

        // img canvas
        imgCanvas: null,

        // 
        degree: 0,
        scale: 1,

        // text
        textboxCount: 0,
        textboxList: [],  
        textboxActiveIndex: -1,
        textboxIsActive: true
      }
    },

    mounted() {
      this.init()

      this.canvas = new fabric.Canvas('canvas')

      this.canvas.on('mouse:down', this.handleMousedown)

      new fabric.Image.fromURL(this.src, (img) => {
        this.imgCanvas = img

        console.log(this.imgCanvas)

        this.setCanvas()

        // this.setImage({ width: this.imgCanvas.width, height: this.imgCanvas.height })

        this.setImgCanvas()

        this.canvas.add(this.imgCanvas)

        this.canvas.item(0)['hasControls'] = false
        this.canvas.item(0)['selectable'] = false
        this.canvas.item(0)['evented'] = false
      }, { crossOrigin: 'anonymous' })
    },

    computed: {
      params() {
        return {
          viewWidth: this.viewWidth,
          viewHeight: this.viewHeight,
          imageRealWidth: this.imageRealWidth,
          imageRealHeight: this.imageRealHeight,
          imageScale: this.imageScale,
          degree: this.degree,
          scale: this.scale
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
      init() {
        // view
        this.view = this.$refs.view
        this.viewWidth = this.view.offsetWidth
        this.viewHeight = this.view.offsetHeight
      },

      setCanvas() {
        // this.canvas = this.$refs.canvas
        // this.canvas.setAttribute('width', this.viewWidth)
        // this.canvas.setAttribute('height', this.viewHeight)
      },

      // 设置图片信息
      setImage(width, height) {
        this.imageRealWidth = width
        this.imageRealHeight = height

        const scaleWidth = this.viewWidth / this.imageRealWidth
        const scaleHeight = this.viewHeight / this.imageRealHeight

        this.imageScale = Math.min(scaleWidth, scaleHeight)
      },

      setImgCanvas() {
        this.imgCanvas.scaleToWidth(this.imgCanvas.width * this.imageScale * this.scale)
        this.imgCanvas.left = this.viewWidth / 2 - this.imgCanvas.width * this.imageScale * this.scale / 2
      },

      handleMousedown({ pointer }) {
        console.log(this.textboxActiveIndex)

        if(this.textboxActiveIndex === -1) {
          this.addTextbox(pointer.x, pointer.y)
          return
        }

        const activeObject = this.canvas.getActiveObject()

        if(!activeObject) {
          this.textboxActiveIndex = -1
        }

        console.log(activeObject)
      },

      addTextbox(x, y) {
        // if(!this.textboxIsActive) return

        const textbox = new fabric.Textbox('', {
          width: 80,
          top: y,
          left: x,
          padding: 4,
          borderColor: '#f00',
          editingBorderColor: '#f00',
          fill: '#f00',
          fontSize: 20,
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

      save() {
        const url = this.canvas.toDataURL()
        const blob = tools.dataURLtoBlob(url)
        const file = tools.blobToFile(blob, 'screenshot.png')

        const anchor = document.createElement('a')

        anchor.download = 'screenshot.png'
        anchor.style.display = 'none'
        anchor.href = URL.createObjectURL(blob)
        document.body.appendChild(anchor)
        anchor.click()
        document.body.removeChild(anchor)
      },
      
      topBarEvent(eventName) {
        this.eventName = eventName

        switch (eventName) {
          case 'cut':
            
            break;

          case 'rect':
            
            break;

          case 'text':
            // this.canvas.remove(this.textbox)
            break;

          case 'move':
            
            break;

          case 'zoomOut':
            this.scale = imageEvent.zoomOut(this.params)
            this.setImgCanvas()
            break;

          case 'zoomIn':
            this.scale = imageEvent.zoomIn(this.params)
            this.setImgCanvas()
            break;

          case 'rotateRight':
            this.degree = imageEvent.rotateRight(this.params)
            this.imgCanvas.rotate(this.degree)
            break;

          case 'rotateLeft':
            this.degree = imageEvent.rotateLeft(this.params)
            this.imgCanvas.rotate(this.degree)
            break;

          case 'clear':

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