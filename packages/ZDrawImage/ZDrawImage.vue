<template>
  <div class="z-draw-image">
    <div id="drawing" class="drawing">
      <div 
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
  import { base64ToFile, base64ToBlob, downloadImageCoordinate } from './tools'

  const rectangleBorderColor = '#ff1e10'
  const fontColor = '#ff1e10'
  const degrees = 90

  const defaultStartXY = { x: null, y: null }

  export default {
    name: 'ZDrawImage',

    props: {
      fileName: {
        type: String,
        default: 'file'
      },

      imageType: {
        validator(value) {
          return ~['image/png', 'image/jpeg', 'image/webp'].indexOf(value)
        },
        default: 'image/png'
      },

      isDownload: {
        type: Boolean,
        default: false
      },

      src: {
        type: String,
        required: false
      },

      width: {
        type: [Number, String],
        default: 'auto'
      }
    },

    data() {
      return {
        image: new Image(),

        dynamicHeight: 0,

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
          this.dynamicHeight = this.width * this.image.height / this.image.width

          this.rotatedWidth = this.width
          this.rotatedHeight = this.dynamicHeight

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
        }
      },      

      // 旋转
      rotateImage(direction) {
        if(direction === 'left') {
          --this.rotateCount
        }
        else if(direction === 'right') {
          ++this.rotateCount
        }

        this.rotateDegrees = this.rotateCount * degrees

        this.drewCanvas.style.transform = `rotate(${ this.rotateDegrees }deg)`
        this.drawingCanvas.style.transform = `rotate(${ this.rotateDegrees }deg)`

        const even = (this.rotateDegrees / 90) % 2 === 0 ? true : false

        if(even) {
          this.rotatedWidth = this.width
          this.rotatedHeight = this.dynamicHeight

          this.drewCanvas.style.top = 0
          this.drawingCanvas.style.top = 0
        }
        else {
          this.rotatedWidth = this.dynamicHeight
          this.rotatedHeight = this.width

          const fromTop = (this.width / 2) - (this.dynamicHeight / 2)

          this.drewCanvas.style.top = `${ fromTop }px`
          this.drawingCanvas.style.top = `${ fromTop }px`
        }

        // this._createCanvas()
      },

      // 截图
      drawScreenshot() {
        const that = this 

        this._clearEventListener()

        this.drawingCtx.fillStyle = 'rgba(0, 0, 0, .46)'
        this.drawingCtx.lineWidth = 2
        this.drawingCtx.strokeStyle = '#1aad19'

        let startXY = null

        this.drawingCanvas.onmousedown = function(event) {
          startXY = {
            x: event.offsetX,
            y: event.offsetY
          }
        }

        this.drawingCanvas.onmousemove = function(event) {
          if(startXY) {
            const { x: startX, y: startY } = startXY
            const rectW = event.offsetX - startX
            const rectH = event.offsetY - startY

            that.fillRectangle(startX, startY, rectW, rectH, that.drawingCtx, true)
          }
        }

        document.addEventListener('mouseup', () => {
          if(startXY) {
            startXY = null
            this.createScreenshotFile()
          }
        })
      },

      // 矩形
      drawRectangle() {
        const that = this

        this._clearEventListener()

        this.drawingCtx.lineWidth = 3
        this.drawingCtx.strokeStyle = rectangleBorderColor

        let startXY = null

        this.drawingCanvas.onmousedown = function(event) {
          startXY = {
            x: event.offsetX,
            y: event.offsetY
          }
        }

        this.drawingCanvas.onmousemove = function(event) {
          if(startXY) {
            const { x: startX, y: startY } = startXY
            const rectW = event.offsetX - startX
            const rectH = event.offsetY - startY

            that.fillRectangle(startX, startY, rectW, rectH, that.drawingCtx)
          }
        }

        document.addEventListener('mouseup', function() {
          if(startXY) {
            startXY = null
            that.createDrewFile()
          }
        })
      },

      // 文字
      drawText() {
        const that = this

        const drawing = document.getElementById('drawing')

        let [startXY, prevStartXY, input] = [null, null, null]

        this.drawingCanvas.onmousedown = function(event) {
          startXY = {
            x: event.offsetX,
            y: event.offsetY
          }

          console.log(startXY)

          input = document.getElementById('drawTextInput')

          if(!input) {
            input = document.createElement('input')

            input.id = 'drawTextInput'
            input.autocomplete = 'off'
            input.style.position = 'absolute'
            input.style.left = startXY.x + 'px'
            input.style.top = startXY.y + 'px'
            input.style.border = '1px solid #ff1e10'
            input.style.color = '#ff1e10'
            input.style.outline = 'none'

            drawing.appendChild(input)
          }
          else {
            if(!input.value) {
              input.style.left = startXY.x + 'px'
              input.style.top = startXY.y + 'px'
              input.style.border = '1px solid #ff1e10'
              input.readOnly = false
            }
            else {
              input.style.border = '1px solid transparent'
              input.readOnly = true
            }

            that.inputValue = input.value
            that.writeText(prevStartXY.x, prevStartXY.y, 250, that.inputValue, that.drawingCtx)
            input.value = ''
          }
        }

        document.addEventListener('mouseup', function(event) {
          const nodeName = event.target.nodeName

          !~['CANVAS', 'INPUT'].indexOf(nodeName) && input.remove()

          if(startXY) {
            prevStartXY = {}
            prevStartXY.x = startXY.x
            prevStartXY.y = startXY.y
            startXY = null          
            that.createDrewFile()
          }
        })
      },

      // 保存
      onSave() {
        this.isDownload && this._downloadDrewImage()

        this.$emit('save', {
          dataURL: this.screenshotDataURL || this.drewImageDataURL,
          file: this.file
        })

        // this.clear()
      },

      // 清除
      clear() {
        // this.drawingCtx.clearRect && this.drawingCtx.clearRect(0, 0, this.drawingCanvas.width, this.drawingCanvas.height)
        // this.drewCtx.clearRect && this.drewCtx.clearRect(0, 0, this.drewCanvas.width, this.drewCanvas.height)
        
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
      fillRectangle(startX, startY, rectW, rectH, ctx, overlay) {
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
        canvas.width = rectW
        canvas.height = rectH
        const data = this.drewCtx.getImageData(startX, startY, rectW, rectH)

        const context = canvas.getContext('2d')
        context.putImageData(data, 0, 0)

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
          this.drewCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.width, this.dynamicHeight)
          this.writeText(this.textArea.startX, this.textArea.startY, 250, this.inputValue, this.drewCtx)
          this.drewCtx.strokeStyle = rectangleBorderColor
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

      // 写入文字
      writeText(startX, startY, maxWidth, text, ctx) {
        ctx.font = '20px Microsoft YaHei'
        ctx.fillStyle = fontColor
        ctx.strokeStyle = fontColor
        
        ctx.fillText(text, startX, startY + 18, maxWidth)

        this.textArea = {
          startX,
          startY,
          maxWidth
        }
      },

      // 更新图片资源
      // _updateImageSrc() {
      //   // image
      //   this.image.src = this.drewImageDataURL || `${ this.src }?${ Date.now() }`
      //   this.image.setAttribute('crossOrigin', '')

      //   this.image.onload = () => {
      //     this.drewCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.width, this.dynamicHeight)
      //   }
      // },

      // 下载已绘制图片
      _downloadDrewImage() {
        const downloadImage = new Image()
        downloadImage.src = this.screenshotDataURL || this.drewImageDataURL

        downloadImage.onload = () => {

          // 根据旋转角度绘制画布的宽高
          {
            const even = (this.rotateDegrees / 90) % 2 === 0 ? true : false
            let [downloadWidth, downloadHeight] = [this.width, this.dynamicHeight]

            if(!even) {
              downloadWidth = this.dynamicHeight
              downloadHeight = this.width
            }

            const dynamicCanvas = document.createElement('canvas')
            dynamicCanvas.width = downloadWidth
            dynamicCanvas.height = downloadHeight

            const dynamicCtx = dynamicCanvas.getContext('2d')

            dynamicCtx.rotate(this.rotateDegrees * Math.PI / 180)

            // 根据旋转角度设置绘制后的图片在画布上的坐标
            {
              const { moveX, moveY } = downloadImageCoordinate(this.rotateDegrees)

              let [x, y] = [0, 0]

              if(!moveX && !moveY) {
                x = 0
                y = 0
              }else if(!moveX && moveY) {
                x = 0
                y = -this.dynamicHeight
              }else if(moveX && moveY) {
                x = -this.width
                y = -this.dynamicHeight
              }else if(moveX && !moveY) {
                x = -this.width
                y = 0
              }

              dynamicCtx.drawImage(downloadImage, 0, 0, downloadImage.width, downloadImage.height, x, y, this.width, this.dynamicHeight)
            }

            // 动态创建 a 标签，并下载绘制后的图片
            {
              const anchor = document.createElement('a')
              const dataURL = dynamicCanvas.toDataURL('image/png')

              let base64 = dataURL.split(',')[1]
              base64ToBlob({b64data: base64, contentType: 'image/png'}).then(res => {
                // 转后后的blob对象
                // console.log('blob', res)

                const blobUrl = window.URL.createObjectURL(res)

                anchor.href = blobUrl
                anchor.download = 'dynamicCanvas'
                anchor.click()
              })
            }
          }
        }
      },

      // 清空绑定的事件
      _clearEventListener() {
        this.drawingCanvas.onmousedown = undefined
        this.drawingCanvas.onmousemove = undefined
        // document.removeEventListener('mouseup', function() {}, false)
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
    -webkit-user-select: none;

    &:hover {
      border: 1px solid rgba(0, 0, 0, .2);
    }

    .drawing {
      position: relative;
      overflow: auto;

      .rotate {
        position: relative;
        
        canvas {
          position: absolute;
        }
      }
    }
  }
</style>