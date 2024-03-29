<template>
  <div ref="drawImage" class="z-draw-image">
    <div 
      v-if="base64"
      ref="drawing"
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

    <div 
      v-else 
      class="load-failed"
    >
      未加载到图片
    </div>

    <v-overlay 
      :absolute="true" 
      :opacity=".8"
      :value="overlay"
    >
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
  import DrawRectMixins from './DrawRectMixins'
  import DrawTextMixins from './DrawTextMixins'
  import OverlayMixins from './OverlayMixins'
  import RotateMixins from './RotateMixins'
  import ScreenshotMixins from './ScreenshotMixins'
  import ScrollMixins from './ScrollMixins'
  import ZoomMixins from './ZoomMixins'
  // import { tools } from '../scripts/utils'

  import { base64ToFile, base64ToBlob, imageToCanvas, rotatedDirectionMap, urlToBase64 } from './tools'

  const defaultStartXY = { x: null, y: null }

  export default {
    name: 'ZDrawImage',
    mixins: [
      DrawRectMixins,
      DrawTextMixins,
      OverlayMixins,
      RotateMixins,
      ScreenshotMixins,
      ScrollMixins,
      ZoomMixins
    ],

    props: {
      direction: {
        validator(value) {
          return !!~['top', 'right', 'bottom', 'left'].indexOf(value)
        },
        default: 'top'
      },

      download: {
        type: Boolean,
        default: false
      },

      fileName: {
        type: String,
        default: 'file'
      },

      imageHeight: {
        type: [Number, String],
        required: true
      },

      imageWidth: {
        type: [Number, String],
        required: true
      },

      imageType: {
        validator(value) {
          return !!~['image/png', 'image/jpeg', 'image/webp'].indexOf(value)
        },
        default: 'image/png'
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
        base64: null,

        imgWidth: 0,
        imgHeight: 0,

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
        textArea: {},

        // 计算图片加载时间
        startTime: 0,
        endTime: 0
      }
    },

    methods: {
      // 初始化
      async initialize({ rotateCount = 0, rotateDegrees = 0, screenshotArea = {} }) {
        this.rotateCount = rotateCount
        this.rotateDegrees = rotateDegrees

        this.startXY = { ...defaultStartXY }

        this.drewArea = {}

        this.file = ''
        this.screenshotDataURL = ''
        this.drewImageDataURL = ''

        this.inputValue = ''
        this.textArea = {}

        this.image.onload = () => {
          // rotate
          this.rotatedWidth = this.imgWidth
          this.rotatedHeight = this.imgHeight

          this.dynamicSize = Math.max(this.imgWidth, this.imgHeight)
          
          // drawing
          {
            this.drawingCanvas = this.$refs.drawingCanvas

            this.drawingCanvas.width = this.imgWidth
            this.drawingCanvas.height = this.imgHeight
            this.drawingCanvas.style.top = 0
            this.drawingCanvas.style.transform = 'rotate(0)'

            this.drawingCtx = this.drawingCanvas.getContext('2d')
          }

          // drew
          {
            this.drewCanvas = this.$refs.drewCanvas

            this.drewCanvas.width = this.imgWidth
            this.drewCanvas.height = this.imgHeight
            this.drewCanvas.style.top = 0
            this.drewCanvas.style.transform = 'rotate(0)'

            this.drewCtx = this.drewCanvas.getContext('2d')
          }

          // 初始化图片
          this.drewCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.imgWidth, this.imgHeight)

          this.getWrapperInfo()
          this.setImageDirection()
          this.setDefaultScreenshotArea(screenshotArea)

          this.overlay = false
          this.endTime = Date.now()

          this.$emit('initialized', {
            startTime: this.startTime,
            endTime: this.endTime
          })
        }
      },      

      // 保存
      onSave() {
        this.downloadDrewImage()

        this.drawingCanvas.onmousedown = undefined
        this.drawingCanvas.onmousemove = undefined

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

        this.screenshotArea = {}
  
        const drawTextInput = document.getElementById('drawTextInput')

        if(drawTextInput) {
          drawTextInput.parentNode.removeChild(drawTextInput)
        }

        this.image.src = this.base64

        this.image.onload = () => {
          this.drawingCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.imgWidth, this.imgHeight)
          this.drewCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.imgWidth, this.imgHeight)
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
        ctx.clearRect(0, 0, this.imgWidth, this.imgHeight)

        ctx.beginPath()

        // 遮罩
        if(overlay) {
          ctx.globalCompositeOperation = 'source-over'
          ctx.fillRect(0, 0, this.imgWidth,this.imgHeight)
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

        if(rectW || rectH) {
          this.$emit('drew', {
            type: 'screenshot',
            dataURL: this.screenshotDataURL,
            file: this.file,
            area: { startX, startY, rectW, rectH }
          })
        }
      },

      // 生成已绘制(框图/文字)文件
      createDrewFile() {
        const { startX, startY, rectW, rectH } = this.drewArea

        this.drewCtx = this.drewCanvas.getContext('2d')

        this.image.src = this.drewImageDataURL || this.base64

        this.image.onload = () => {
          // this.drewCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.imgWidth, this.imgHeight)
          this.writeText(this.textArea.startX, this.textArea.startY, 250, this.inputValue, this.drewCtx)
          this.inputValue = ''

          this.drewCtx.strokeStyle = this.rectColor
          this.drewCtx.strokeRect(startX, startY, rectW, rectH)

          // canvas
          const canvas = document.createElement('canvas')
          canvas.width = this.imgWidth
          canvas.height = this.imgHeight

          const data = this.drewCtx.getImageData(0, 0, this.imgWidth, this.imgHeight)

          const context = canvas.getContext('2d')
          context.putImageData(data, 0, 0)

          const dataURL = canvas.toDataURL(this.imageType)

          this.file = base64ToFile(dataURL, this.fileName)
          this.drewImageDataURL = dataURL

          if(rectW || rectH) {
            this.$emit('drew', {
              dataURL: this.drewImageDataURL,
              file: this.file,
              area: { startX, startY, rectW, rectH }
            })
          }
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

          const dataURL = downloadCanvas.toDataURL('image/png')
          this.file = base64ToFile(dataURL, this.fileName)

          this.$emit('save', {
            dataURL,
            file: this.file
          })

          // 动态创建 a 标签，并下载绘制后的图片
          if(this.download) {
            const anchor = document.createElement('a')
            const base64 = dataURL.split(',')[1]

            base64ToBlob({ b64data: base64, contentType: 'image/png' }).then(res => {
              const blobUrl = window.URL.createObjectURL(res)

              console.log(blobUrl)

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

    computed: {
      baseInfo() {
        const { imageWidth, imageHeight, src } = this
        return { imageWidth, imageHeight, src }
      }
    },

    watch: {
      baseInfo: {
        handler({ imageWidth, imageHeight, src }) {
          if(imageWidth && imageHeight && src) {
            this.startTime = Date.now()
            this.overlay = true

            this.$nextTick(async () => {
              this.imgWidth = +this.imageWidth
              this.imgHeight = +this.imageHeight

              // 缩放的宽高
              this.zoomWidth = this.imageWidth / this.blocks
              this.zoomHeight = this.imageHeight / this.blocks

              const result = await urlToBase64(src)

              if(result.type !== 'error') {
                this.base64 = result.data

                this.image = new Image()
                this.image.src = this.base64

                this.initialize({ screenshotArea: this.defaultScreenshotArea })
              }
              else {
                this.base64 = void 0
                this.overlay = false
                this.endTime = Date.now()

                this.$emit('initialized', {
                  startTime: this.startTime,
                  endTime: this.endTime
                })
              }
            })
          }
          else {
            this.base64 = void 0
          }
        },
        deep: true,
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
      /* background: #fafafa; */

      .rotate {
        position: relative;

        canvas {  
          position: absolute;
        }
      }
    }

    .load-failed {
      display: flex;
      align-items: center;
      justify-content: center;
      height: inherit;
    }
  }
</style>