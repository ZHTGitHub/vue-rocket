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
      // 设置图片信息
      setImage(width, height) {
        this.getView()

        this.imageRealWidth = width
        this.imageRealHeight = height

        const scaleWidth = this.viewWidth / this.imageRealWidth
        const scaleHeight = this.viewHeight / this.imageRealHeight

        this.imageScale = Math.min(scaleWidth, scaleHeight)

        this.setCanvas()

        this.fabricCanvas()
      },

      // 获取画布视图的宽高
      getView() {
        this.view = this.$refs.view
        this.viewWidth = this.view.offsetWidth
        this.viewHeight = this.view.offsetHeight
      },

      // 设置画布的真实宽高
      setCanvas() {
        // this.canvas = this.$refs.canvas

        // this.canvas.setAttribute('width', this.imageRealWidth)
        // this.canvas.setAttribute('height', this.imageRealHeight)

        // this.canvas.style.transform = `scale(${ this.imageScale })`
        // this.canvas.style.width = this.imageRealWidth * this.imageScale
        // this.canvas.style.height = this.imageRealHeight * this.imageScale
      },

      setImgCanvas() {
        this.imgCanvas.scale(this.imageScale)

        // this.canvas.setDimensions({
        //   width: this.imageRealWidth * this.imageScale,
        //   height: this.imageRealHeight * this.imageScale
        // })

        // this.canvas.setZoom(this.imageScale)
      },

      fabricCanvas() {
        const options = {
          enableRetinaScaling: true, 
          width: this.imageRealWidth * this.imageScale, 
          height: this.imageRealHeight * this.imageScale
        }

        this.canvas = new fabric.Canvas('canvas', options)

        this.canvas.on('mouse:down', this.handleMousedown)

        new fabric.Image.fromURL(this.src, (img) => {
          this.imgCanvas = img

          this.setImgCanvas()

          this.canvas.add(this.imgCanvas)

          this.canvas.item(0)['hasControls'] = false
          this.canvas.item(0)['selectable'] = false
          this.canvas.item(0)['evented'] = false
        }, { crossOrigin: 'anonymous' })
      },

      // 鼠标按下
      handleMousedown({ pointer }) {
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

      // 添加文本输入框
      addTextbox(x, y) {
        // if(!this.textboxIsActive) return

        const textbox = new fabric.Textbox('', {
          width: 80,
          top: y,
          left: x,
          padding: 4,
          // borderScaleFactor: 1,
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

      // 保存编辑后的图片
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