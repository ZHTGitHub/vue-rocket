<template>
  <div class="z-draw-image">
    <div class="draw">
      <div class="options">
        <ul class="z-flex align-center">
          <div 
            v-for="(item, index) in cells.options" 
            :key="item.key"
            :class="{ 'divider z-flex align-center': index === 3 }"
          >
            <li class="mr-2">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    :color="item.color"
                    dark
                    icon
                    v-bind="attrs"
                    v-on="on"
                    @click="onSelect(item)"
                  >
                    <v-icon 
                      :size="item.size"
                      :style="item.style"
                    >{{ item.icon }}</v-icon>
                  </v-btn>
                </template>
                <span>{{ item.tips }}</span>
              </v-tooltip>
            </li>
          </div>
        </ul>
      </div>

      <div id="drawing" class="drawing">
        <canvas 
          id="drewCanvas" 
          ref="drewCanvas"
        ></canvas>

        <canvas 
          id="drawingCanvas" 
          ref="drawingCanvas"
        ></canvas>

        <div class="z-image">
          <img 
            id="oImage"
            ref="oImage"
            :src="src" 
          />
        </div>
      </div>

      <div class="drew">
        <img 
          ref="dImage"
          :src="drewImageDataURL" 
        />
      </div>
    </div>
  </div>
</template>

<script>
  import cells from './cells'
  import { base64ToFile } from './tools'

  const defaultRectangleBorderColor = '#ff1e10'
  const defaultFontColor = '#ff1e10'

  export default {
    name: 'ZDrawImage',

    props: {
      src: {
        type: String,
        required: false
      }
    },

    data() {
      return {
        cells,

        rectangleBorderColor: defaultRectangleBorderColor,
        fontColor: defaultFontColor,

        image: new Image(),

        oImageWidth: 0,
        oImageHeight: 0,

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
        drewImageDataURL: '',
        memoImageDataURL: '',
        
        input: null,
        inputValue: '',
        textArea: {}
      }
    },

    mounted() {
      this.keyboardEvents()

      
    },

    methods: {
      // 初始化
      initialize() {
        const vm = this

        const oImage = document.getElementById('oImage')

        this.oImageWidth = oImage.offsetWidth
        this.oImageHeight = oImage.offsetHeight

        this.drawingCanvas = this.$refs.drawingCanvas
        this.drewCanvas = this.$refs.drewCanvas

        this.drawingCanvas.width = this.oImageWidth
        this.drawingCanvas.height = this.oImageHeight

        this.drewCanvas.width = this.oImageWidth
        this.drewCanvas.height = this.oImageHeight

        this.drewCtx = this.drewCanvas.getContext('2d') 

        this.image.src = this.memoImageDataURL || this.src

        this.image.onload = function() {
          const { width, height } = vm.image
          vm.drewCtx.drawImage(this, 0, 0, width, height, 0, 0, vm.oImageWidth, vm.oImageHeight)
        }
      },

      // 切图
      drawScreenshot() {
        const vm = this 

        this.clearEventListener()

        this.initialize()

        this.drawingCtx = this.drawingCanvas.getContext('2d')
        
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

            vm.fillRect(startX, startY, rectW, rectH, vm.drawingCtx, true)
          }
        }

        document.addEventListener('mouseup', function() {
          if(startXY) {
            startXY = null
            vm.copyScreenshot()
          }
        })
      },

      // 矩形
      drawRectangle() {
        const vm = this

        this.initialize()

        this.drawingCtx = this.drawingCanvas.getContext('2d')

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

            vm.fillRect(startX, startY, rectW, rectH, vm.drawingCtx)
          }
        }

        document.addEventListener('mouseup', function() {
          if(startXY) {
            startXY = null
            vm.copyDrew()
          }
        })
      },

      // 文字
      drawText() {
        const vm = this

        this.initialize()

        this.drawingCtx = this.drawingCanvas.getContext('2d')
        
        let [startXY, prevStartXY] = [null, null]

        const drawing = document.getElementById('drawing')
        let input = null

        this.drawingCanvas.onmousedown = function(event) {
          startXY = {
            x: event.offsetX,
            y: event.offsetY
          }

          input = document.getElementById('drawTextInput')

          if(!input) {
            input = document.createElement('input')
            input.id = 'drawTextInput'
            input.style.position = 'absolute'
            input.style.left = startXY.x + 'px'
            input.style.top = startXY.y + 'px'
            input.style.border = '1px solid #ff1e10'
            input.style.color = '#fff'
            input.style.outline = 'none'
            drawing.appendChild(input)
          }
          else {
            if(!input.value) {
              input.style.left = startXY.x + 'px'
              input.style.top = startXY.y + 'px'
              input.style.border = '1px solid #ff1e10'
            }
            else {
              input.style.border = '1px solid transparent'
            }

            // const value = input.value
            vm.inputValue = input.value
            vm.writeText(prevStartXY.x, prevStartXY.y, 250, vm.inputValue, vm.drawingCtx)
            input.value = ''
          }

        }

        document.addEventListener('mouseup', function(event) {
          const nodeName = event.target.nodeName

          const nodes = ['CANVAS', 'INPUT']

          console.log(nodeName)

          if(!~nodes.indexOf(nodeName)) {
            drawing.removeChild(input)
          }

          if(startXY) {
            prevStartXY = {}
            prevStartXY.x = startXY.x
            prevStartXY.y = startXY.y
            startXY = null          
            vm.copyDrew()
          }
        })
      },

      // 保存
      onSave() {

      },

      // 清除
      onClear() {
        this.drawingCtx.clearRect(0, 0, this.drawingCanvas.width, this.drawingCanvas.height)
        this.drewCtx.clearRect(0, 0, this.drewCanvas.width, this.drewCanvas.height)
        this.drawingCanvas.onmousedown = undefined
        this.drawingCanvas.onmousemove = undefined
        this.drewArea = {}
        this.drewImageDataURL = ''
        this.memoImageDataURL = ''
        this.textArea = {}
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
      fillRect(startX, startY, rectW, rectH, ctx, overlay) {
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
      
      // 复制已截图
      copyScreenshot() {
        const { startX, startY, rectW, rectH } = this.drewArea

        // canvas
        const canvas = document.createElement('canvas')
        canvas.width = rectW
        canvas.height = rectH
        const data = this.drewCtx.getImageData(startX, startY, rectW, rectH)

        const context = canvas.getContext('2d')
        context.putImageData(data, 0, 0)

        const dataURL = canvas.toDataURL('image/png')

        // 生成文件
        // const file = base64ToFile(dataURL, 'copyScreenshot')

        this.drewImageDataURL = dataURL
        this.drewArea = {}
      },

      // 复制已绘制
      copyDrew() { 
        const vm = this
        const { startX, startY, rectW, rectH } = this.drewArea

        this.drewCtx = this.drewCanvas.getContext('2d')
        
        this.image.src = this.memoImageDataURL || this.src

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

          const dataURL = canvas.toDataURL('image/png')

          // 生成文件
          // const file = base64ToFile(dataURL, 'copyDrew')

          vm.drewImageDataURL = dataURL
          vm.memoImageDataURL = dataURL
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
          maxWidth,
          // text
        }
      },

      // 某项操作
      onSelect({ key }) {
        switch (key) {
          case 'screenshot':
            this.drawScreenshot()
            break;

          case 'rectangle':
            this.drawRectangle()
            break;
          
          case 'text':
            this.drawText()
            break;
          
          case 'clear':
            this.onClear()
            break;
        }
      },

      // 按键
      keyboardEvents() {
        window.addEventListener('keydown', (event) => {
          const { ctrlKey, keyCode } = event

          switch (keyCode) {
            case 65:
              event.preventDefault()
              ctrlKey && this.drawScreenshot()
              break;
          
            case 88:
              event.preventDefault()
              ctrlKey && this.drawRectangle()
              break;
            
            case 69:
              event.preventDefault()
              ctrlKey && this.drawText()
              break;

            case 90:
              event.preventDefault()
              ctrlKey && this.onClear()           
              break;
            
            case 83:
              event.preventDefault()
              ctrlKey && console.log('保存')
              break;
          }
        })
      },

      // 清空绑定的事件
      clearEventListener() {
        this.drawingCanvas.onmousedown = undefined
        this.drawingCanvas.onmousemove = undefined
        document.removeEventListener('mouseup', function() {}, false)
      }
    }
  }
</script>

<style scoped lang="scss">
  .options {
    ul, li {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }

    .divider::before {
      content: '';
      display: inline-block;
      margin-right: 8px;
      width: 1px;
      height: 20px;
      background-color: rgba(0, 0, 0, .15);
    }
  }

  .drawing {
    position: relative;

    canvas {
      position: absolute;
    }
  }
</style>