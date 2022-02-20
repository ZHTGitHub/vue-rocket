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

        <!-- <div class="z-image">
          <img 
            ref="oImage" 
            :width="width" 
            :src="src" 
          />

          <img :src="blobSrc" alt="">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import { base64ToFile, base64ToBlob } from './tools'

  const defaultRectangleBorderColor = '#ff1e10'
  const defaultFontColor = '#ff1e10'
  const degrees = 90

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
        rectangleBorderColor: defaultRectangleBorderColor,
        fontColor: defaultFontColor,

        image: new Image(),

        oImageWidth: 0,
        oImageHeight: 0,
        dynamicHeight: 0,

        rotatedWidth: 0, 
        rotatedHeight: 0,

        drawingCanvas: {},
        drewCanvas: {},

        drawingCtx: {},
        drewCtx: {},

        startXY: {
          x: null,
          y: null
        },

        endXY: {
          x: null,
          y: null
        },

        drewArea: {},
        file: '',
        screenshotDataURL: '',
        drewImageDataURL: '',
        
        input: null,
        inputValue: '',
        textArea: {},

        rotateCount: 0,
        rotateDegrees: 0,

        blobSrc: ''
      }
    },

    mounted() {
      this.initialize()
    }, 

    methods: {
      // 初始化
      initialize() {
        // const oImage = this.$refs.oImage
        const oImage = new Image()
        oImage.src = this.src

        console.log(oImage)

        oImage.onload = () => {

          this.dynamicHeight = this.width * oImage.height / oImage.width

          this.oImageWidth = this.width
          this.oImageHeight = this.dynamicHeight

          this.rotatedWidth = this.width
          this.rotatedHeight = this.dynamicHeight

          console.log(oImage.width)
          console.log(oImage.height)

          // drawing
          this.drawingCanvas = this.$refs.drawingCanvas

          this.drawingCanvas.width = this.oImageWidth
          this.drawingCanvas.height = this.oImageHeight

          this.drawingCtx = this.drawingCanvas.getContext('2d')

          // drew
          this.drewCanvas = this.$refs.drewCanvas

          this.drewCanvas.width = this.oImageWidth
          this.drewCanvas.height = this.oImageHeight

          this.drewCtx = this.drewCanvas.getContext('2d')

          // image
          this._updateImageSrc()
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

      // 切图
      drawScreenshot() {
        const vm = this 

        this._clearEventListener()

        this.initialize()

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

            vm.fillRectangle(startX, startY, rectW, rectH, vm.drawingCtx, true)
          }
        }

        document.addEventListener('mouseup', function() {
          if(startXY) {
            startXY = null
            vm.createScreenshotFile()
          }
        })
      },

      // 矩形
      drawRectangle() {
        const vm = this

        // this.initialize()

        this.drawingCtx.lineWidth = 3
        this.drawingCtx.strokeStyle = this.rectangleBorderColor

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

            vm.fillRectangle(startX, startY, rectW, rectH, vm.drawingCtx)
          }
        }

        document.addEventListener('mouseup', function() {
          if(startXY) {
            startXY = null
            vm.createDrewFile()
          }
        })
      },

      // 文字
      drawText() {
        const vm = this

        this.initialize()

        const drawing = document.getElementById('drawing')

        let [startXY, prevStartXY, input, inputXY] = [null, null, null, null]

        this.drawingCanvas.onmousedown = function(event) {
          startXY = {
            x: event.offsetX,
            y: event.offsetY
          }

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

            vm.inputValue = input.value
            vm.writeText(prevStartXY.x, prevStartXY.y, 250, vm.inputValue, vm.drawingCtx)
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
            vm.createDrewFile()
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

        // this.onClear()
      },

      // 清除
      onClear() {
        this.drawingCtx.clearRect && this.drawingCtx.clearRect(0, 0, this.drawingCanvas.width, this.drawingCanvas.height)
        this.drewCtx.clearRect && this.drewCtx.clearRect(0, 0, this.drewCanvas.width, this.drewCanvas.height)
        this.drawingCanvas.onmousedown = undefined
        this.drawingCanvas.onmousemove = undefined
        this.drewArea = {}
        this.screenshotDataURL = ''
        this.drewImageDataURL = ''
        this.textArea = {}

        this._updateImageSrc()
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
        ctx.clearRect(0, 0, this.oImageWidth, this.oImageHeight)

        ctx.beginPath()

        // 遮罩
        if(overlay) {
          ctx.globalCompositeOperation = 'source-over'
          ctx.fillRect(0, 0, this.oImageWidth,this.oImageHeight)
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
        const vm = this
        const { startX, startY, rectW, rectH } = this.drewArea

        this.drewCtx = this.drewCanvas.getContext('2d')

        this.image.src = this.drewImageDataURL || `${ this.src }?${ Date.now() }`
        this.image.setAttribute('crossOrigin', '')

        this.image.onload = function() {
          const { width, height } = vm.image

          vm.drewCtx.drawImage(this, 0, 0, width, height, 0, 0, vm.oImageWidth, vm.oImageHeight)
          vm.writeText(vm.textArea.startX, vm.textArea.startY, 250, vm.inputValue, vm.drewCtx)
          vm.drewCtx.strokeStyle = vm.rectangleBorderColor
          vm.drewCtx.strokeRect(startX, startY, rectW, rectH)

          // canvas
          const canvas = document.createElement('canvas')
          canvas.width = vm.oImageWidth
          canvas.height = vm.oImageHeight
          const data = vm.drewCtx.getImageData(0, 0, vm.oImageWidth, vm.oImageHeight)

          const context = canvas.getContext('2d')
          context.putImageData(data, 0, 0)

          const dataURL = canvas.toDataURL(this.imageType)

          vm.file = base64ToFile(dataURL, vm.fileName)
          vm.drewImageDataURL = dataURL

          vm.$emit('drew', {
            dataURL: vm.drewImageDataURL,
            file: vm.file
          })
        }
      },

      // 写入文字
      writeText(startX, startY, maxWidth, text, ctx) {
        ctx.font = '20px Microsoft YaHei'
        ctx.fillStyle = this.fontColor
        ctx.strokeStyle = this.fontColor
        
        ctx.fillText(text, startX, startY + 18, maxWidth)

        this.textArea = {
          startX,
          startY,
          maxWidth
        }
      },

      // 更新图片资源
      _updateImageSrc() {
        const vm = this

        // image
        this.image.src = this.drewImageDataURL || `${ this.src }?${ Date.now() }`
        this.image.setAttribute('crossOrigin', '')

        this.image.onload = function() {
          const { width, height } = vm.image
          vm.drewCtx.drawImage(this, 0, 0, width, height, 0, 0, vm.oImageWidth, vm.oImageHeight)
        }
      },

      // // 动态创建 canvas
      // _createCanvas() {
      //   const absRotateDegrees = Math.abs(this.rotateDegrees)
      //   const times = absRotateDegrees / 90
      //   const odd = times % 2 !== 0 ? true : false

      //   let [rotateImageWidth, rotateImageHeight] = [this.oImageWidth, this.oImageHeight]
      //   let [imageWidth, imageHeight] = [this.image.width, this.image.height]

      //   console.log(this.image.width)
      //   console.log(this.image.height)

      //   if(odd) {
      //     rotateImageWidth = this.oImageHeight
      //     rotateImageHeight = this.oImageWidth

      //     // imageWidth = imageHeight
      //     // imageHeight = imageWidth
      //   }

      //   console.log({rotateImageWidth, rotateImageHeight})
      //   console.log({imageWidth, imageHeight})  

      //   const canvas = document.createElement('canvas')
      //   canvas.width = rotateImageWidth
      //   canvas.height = rotateImageHeight

      //   const ctx = canvas.getContext('2d')
      //   ctx.rotate(this.rotateDegrees * Math.PI / 180)
      //   // console.log(this.rotateDegrees)

      //   ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, -280, rotateImageWidth, rotateImageHeight)

      //   const dataURL = canvas.toDataURL(this.imageType)

      //   // console.log(dataURL)

      //   let base64 = dataURL.split(',')[1]
      //   base64ToBlob({b64data: base64, contentType: 'image/png'}).then(res => {
      //     // 转后后的blob对象
      //     // console.log('blob', res.preview)

      //     this.blobSrc = res.preview

      //     this.drewImageDataURL = res.preview

      //     this.initialize()

      //     // const blobUrl = window.URL.createObjectURL(res)

      //     // console.log(blobUrl)
      //   })
      // },

      // 下载已绘制图片
      _downloadDrewImage() {

        const downloadImage = new Image()
        downloadImage.src = this.screenshotDataURL || this.drewImageDataURL

        downloadImage.onload = () => {
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

          if(this.rotateDegrees === 0 || this.rotateDegrees - 360 === 0 || this.rotateDegrees + 360 === 0) {
            dynamicCtx.drawImage(downloadImage, 0, 0, downloadImage.width, downloadImage.height, 0, 0, this.width, this.dynamicHeight)
          }
          else if(this.rotateDegrees === 90 || this.rotateDegrees - 360 === 90 || this.rotateDegrees === -270 || this.rotateDegrees + 360 === -270) {
            dynamicCtx.drawImage(downloadImage, 0, 0, downloadImage.width, downloadImage.height, 0, -this.dynamicHeight, this.width, this.dynamicHeight)
          }
          else if(this.rotateDegrees === 180 || this.rotateDegrees - 360 === 180 || this.rotateDegrees === -180 || this.rotateDegrees + 360 === -180) {
            dynamicCtx.drawImage(downloadImage, 0, 0, downloadImage.width, downloadImage.height, -this.width, -this.dynamicHeight, this.width, this.dynamicHeight)
          }
          else if(this.rotateDegrees === 270 || this.rotateDegrees - 360 === 270 || this.rotateDegrees === -90 || this.rotateDegrees + 360 === -90) {
            dynamicCtx.drawImage(downloadImage, 0, 0, downloadImage.width, downloadImage.height, -this.width, 0, this.width, this.dynamicHeight)
          }


          console.log(this.rotateDegrees, even)

          const anchor = document.createElement('a')
          const dataURL = dynamicCanvas.toDataURL('image/png')

          // console.log(dataURL)

          let base64 = dataURL.split(',')[1]
          base64ToBlob({b64data: base64, contentType: 'image/png'}).then(res => {
            // 转后后的blob对象
            console.log('blob', res)

            const blobUrl = window.URL.createObjectURL(res)

            console.log(blobUrl)

            anchor.href = blobUrl
            anchor.download = 'dynamicCanvas'
            anchor.click()
          })
        }

        

        // const anchor = document.createElement('a')
        // anchor.href = this.screenshotDataURL || this.drewImageDataURL
        // anchor.download = new Date().getTime() + '.png'
        // anchor.click()
      },

      // 清空绑定的事件
      _clearEventListener() {
        this.drawingCanvas.onmousedown = undefined
        this.drawingCanvas.onmousemove = undefined
        document.removeEventListener('mouseup', function() {}, false)
      }
    },

    watch: {
      src: {
        handler() {
          this._updateImageSrc()
        }
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