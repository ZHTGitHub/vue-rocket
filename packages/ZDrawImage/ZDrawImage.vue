<template>
  <div id="drawImage" class="z-draw-image">
    <div 
      id="drawing" 
      class="drawing"
      :style="{ 
        width: `${ dynamicSize }px`,
        height: `${ dynamicSize }px`
      }"
    >
      <div 
        id="rotate"
        class="rotate"
        :style="{ 
          width: `${ rotatedWidth }px`,
          height: `${ rotatedHeight }px`
        }"
      >
        <canvas ref="drewCanvas" class="drewCanvas"></canvas>

        <canvas ref="drawingCanvas" class="drawingCanvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
  import RotateMixins from './RotateMixins'
  import ScrollMixins from './ScrollMixins'

  import ScreenshotMixins from './ScreenshotMixins'
  import DrawRectMixins from './DrawRectMixins'
  import DrawTextMixins from './DrawTextMixins'

  import { base64ToFile, base64ToBlob, rotatedDirectionMap } from './tools'

  const defaultStartXY = { x: null, y: null }

  export default {
    name: 'ZDrawImage',
    mixins: [RotateMixins, ScrollMixins, ScreenshotMixins, DrawRectMixins, DrawTextMixins],

    props: {
      direction: {
        validator(value) {
          return !!~['top', 'right', 'bottom', 'left'].indexOf(value)
        },
        default: 'top'
      },

      fileName: {
        type: String,
        default: 'file'
      },

      imageWidth: {
        type: [Number, String],
        required: false
      },

      imageType: {
        validator(value) {
          return !!~['image/png', 'image/jpeg', 'image/webp'].indexOf(value)
        },
        default: 'image/png'
      },

      download: {
        type: Boolean,
        default: false
      },

      rectColor: {
        type: String,
        default: '#ff1e10'
      },

      src: {
        type: String,
        required: false
      }
    },

    data() {
      return {
        image: new Image(),
        ratio: 1,
        width: 'auto',

        dynamicHeight: 0,
        dynamicSize: 0,

        // 记录旋转次数、角度及旋转后宽高
        rotateCount: 0,
        rotateDegrees: 0,
        rotatedWidth: 0, 
        rotatedHeight: 0,

        drawingCanvas: {},
        drewCanvas: {},

        drawingCtx: {},
        drewCtx: {},

        // 记录矩形开始坐标
        startXY: { ...defaultStartXY },

        // 绘制区域
        drewArea: {},

        // 文件
        file: '',

        // 截图后生成的文件
        screenshotDataURL: '',

        // 绘制后生成的文件
        drewImageDataURL: '',
        
        // 当前输入的文字
        inputValue: '',

        // 记录文字开始坐标，及最大宽度
        textArea: {}
      }
    },

    methods: {
      // 初始化
      initialize() {
        this.rotateCount = 0
        this.rotateDegrees = 0

        this.startXY = { ...defaultStartXY }

        this.drewArea = {}

        this.file = ''
        this.screenshotDataURL = ''
        this.drewImageDataURL = ''

        this.inputValue = ''
        this.textArea = {}

        this.image = new Image()
        this.image.src = `${ this.src }?${ Date.now() }`
        this.image.setAttribute('crossOrigin', '')

        this.image.onload = () => {
          if(this.imageWidth) {
            this.width = this.imageWidth
          }
          else {
            this.width = this.image.width
          }

          this.ratio = this.image.width / this.width
          this.dynamicHeight = this.image.height / this.ratio

          this.rotatedWidth = this.width
          this.rotatedHeight = this.dynamicHeight

          this.dynamicSize = Math.max(this.width, this.dynamicHeight)

          this.getWrapperInfo()

          // drawing
          this.drawingCanvas = this.$refs.drawingCanvas

          this.drawingCanvas.width = this.width
          this.drawingCanvas.height = this.dynamicHeight
          this.drawingCanvas.style.top = 0
          this.drawingCanvas.style.transform = 'rotate(0)'

          this.drawingCtx = this.drawingCanvas.getContext('2d')

          // drew
          this.drewCanvas = this.$refs.drewCanvas

          this.drewCanvas.width = this.width
          this.drewCanvas.height = this.dynamicHeight
          this.drewCanvas.style.top = 0
          this.drewCanvas.style.transform = 'rotate(0)'

          this.drewCtx = this.drewCanvas.getContext('2d')

          // 初始化图片
          this.drewCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.width, this.dynamicHeight)

          this.setImageDirection()
        }
      },      

      // 保存
      onSave() {
        this.download && this.downloadDrewImage()

        this.drawingCanvas.onmousedown = undefined
        this.drawingCanvas.onmousemove = undefined

        this.$emit('save', {
          dataURL: this.screenshotDataURL || this.drewImageDataURL,
          file: this.file
        })

        // this.clear()
      },

      // 清除
      clear() {
        this.drawingCtx.clearRect && this.drawingCtx.clearRect(0, 0, this.drawingCanvas.width, this.drawingCanvas.height)
        this.drewCtx.clearRect && this.drewCtx.clearRect(0, 0, this.drewCanvas.width, this.drewCanvas.height)
        
        this.drawingCanvas.onmousedown = undefined
        this.drawingCanvas.onmousemove = undefined

        this.screenshotDataURL = ''
        this.drewImageDataURL = ''

        this.drewArea = {}
        this.textArea = {}

        this.image.src = `${ this.src }?${ Date.now() }`
        this.image.setAttribute('crossOrigin', '')

        this.image.onload = () => {
          this.drawingCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.width, this.dynamicHeight)
          this.drewCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.width, this.dynamicHeight)
        }
      },

      /**
       * @description 绘制矩形
       * @param startX 起点X坐标
       * @param startY 起点Y坐标
       * @param rectW 宽
       * @param rectH 高
       * @param ctx 绘图环境
       * @param overlay 遮罩
       */
      fillRectangle({ startX, startY, rectW, rectH, ctx, overlay }) {
        ctx.clearRect(0, 0, this.width, this.dynamicHeight)

        ctx.beginPath()

        // 遮罩
        if(overlay) {
          ctx.globalCompositeOperation = 'source-over'
          ctx.fillRect(0, 0, this.width,this.dynamicHeight)
        }

        // 边框
        ctx.globalCompositeOperation = 'destination-out'
        ctx.fillRect(startX, startY, rectW, rectH)

        // 描边
        ctx.globalCompositeOperation = 'source-over'
        ctx.moveTo(startX, startY)
        ctx.lineTo(startX + rectW, startY)
        ctx.lineTo(startX + rectW, startY + rectH)
        ctx.lineTo(startX, startY + rectH)
        ctx.lineTo(startX, startY)
        ctx.stroke()

        ctx.closePath()

        // 绘制区域
        this.drewArea = {
          startX,
          startY,
          rectW,
          rectH
        }
      },
      
      // 生成切图文件
      createScreenshotFile() {
        const { startX, startY, rectW, rectH } = this.drewArea

        if(!startX || !startY || !rectW || !rectH) return

        // canvas
        const canvas = document.createElement('canvas')
        canvas.width = Math.abs(rectW)
        canvas.height = Math.abs(rectH)
        const data = this.drewCtx.getImageData(startX, startY, rectW, rectH)

        const ctx = canvas.getContext('2d')
        ctx.putImageData(data, 0, 0)

        const dataURL = canvas.toDataURL(this.imageType)

        this.file = base64ToFile(dataURL, this.fileName)
        this.screenshotDataURL = dataURL
        this.drewArea = {}

        this.$emit('drew', {
          dataURL: this.screenshotDataURL,
          file: this.file
        })
      },

      // 生成已绘制(框图/文字)文件
      createDrewFile() { 
        const { startX, startY, rectW, rectH } = this.drewArea
        
        this.drewCtx = this.drewCanvas.getContext('2d')

        this.image.src = this.drewImageDataURL || `${ this.src }?${ Date.now() }`
        this.image.setAttribute('crossOrigin', '')

        this.image.onload = () => {
          // this.drewCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.width, this.dynamicHeight)
          this.writeText(this.textArea.startX, this.textArea.startY, 250, this.inputValue, this.drewCtx)
          this.inputValue = ''

          this.drewCtx.strokeStyle = this.rectColor
          this.drewCtx.strokeRect(startX, startY, rectW, rectH)

          // canvas
          const canvas = document.createElement('canvas')
          canvas.width = this.width
          canvas.height = this.dynamicHeight
          const data = this.drewCtx.getImageData(0, 0, this.width, this.dynamicHeight)

          const context = canvas.getContext('2d')
          context.putImageData(data, 0, 0)

          const dataURL = canvas.toDataURL(this.imageType)

          this.file = base64ToFile(dataURL, this.fileName)
          this.drewImageDataURL = dataURL

          this.$emit('drew', {
            dataURL: this.drewImageDataURL,
            file: this.file
          })
        }
      },

      // 下载已绘制图片
      downloadDrewImage() {
        const downloadImage = new Image()
        downloadImage.src = this.screenshotDataURL || this.drewImageDataURL

        downloadImage.onload = () => {
          const direction = rotatedDirectionMap.get(this.rotateCount)
          const [width, height] = [downloadImage.width, downloadImage.height]
          let [canvasW, canvasH] = [0, 0]

          if(direction === 'top' || direction === 'bottom') {
            canvasW = width
            canvasH = height
          }
          else {
            canvasW = height
            canvasH = width
          }

          const downloadCanvas = document.createElement('canvas')
          downloadCanvas.width = canvasW
          downloadCanvas.height = canvasH

          const downloadCtx = downloadCanvas.getContext('2d')

          switch(direction) {
            case 'top':
              downloadCtx.translate(0, 0)
              downloadCtx.rotate(0)
              break;
          
            case 'right':
              downloadCtx.translate(canvasW, 0)
              downloadCtx.rotate(90 * Math.PI / 180)
              break;

            case 'bottom':
              downloadCtx.translate(canvasW, canvasH)
              downloadCtx.rotate(180 * Math.PI / 180)
              break;

            case 'left':
              downloadCtx.translate(0, canvasH)
              downloadCtx.rotate(-90 * Math.PI / 180)
              break;
          }

          downloadCtx.drawImage(downloadImage, 0, 0, width, height, 0, 0, width, height)

          // 动态创建 a 标签，并下载绘制后的图片
          {
            const anchor = document.createElement('a')
            const dataURL = downloadCanvas.toDataURL('image/png')

            let base64 = dataURL.split(',')[1]
            base64ToBlob({b64data: base64, contentType: 'image/png'}).then(res => {
              const blobUrl = window.URL.createObjectURL(res)

              anchor.href = blobUrl
              anchor.download = this.fileName
              anchor.click()
            })
          }
        }
      },

      // 清空绑定的事件
      _clearEventListener() {
        this.drawingCanvas.onmousedown = undefined
        this.drawingCanvas.onmousemove = undefined
      }
    },

    watch: {
      src: {
        handler() {
          this.initialize()
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-draw-image {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, .05);
    transition: border .15s linear;
    overflow: auto;
    -webkit-user-select: none;

    &:hover {
      border: 1px solid rgba(0, 0, 0, .2);
    }

    .drawing {
      position: relative;
      background: #fafafa;

      .rotate {
        position: relative;

        canvas {  
          position: absolute;
        }
      }
    }
  }
</style>