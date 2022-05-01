import { rotatedDirectionMap } from './tools'

const fontColor = '#ff1e10'

export default {
  methods: {
    // 写文字
    drawText() {
      const that = this
      const rotateWrapper = document.getElementById('rotate')

      let [startXY, prevStartXY, input] = [null, null, null]

      this.drawingCanvas.onmousedown = function(event) {
        startXY = {
          x: event.offsetX,
          y: event.offsetY
        }

        const wrapperStartXY = that.computedRotateWrapperStartXY({ canvasStartXY: startXY })

        input = document.getElementById('drawTextInput')

        console.log(input?.value)
        console.log(that.inputValue)

        if(!input) {
          input = document.createElement('input')

          input.id = 'drawTextInput'
          input.autocomplete = 'off'
          input.style.position = 'absolute'
          input.style.left = wrapperStartXY.x + 'px'
          input.style.top = wrapperStartXY.y + 'px'
          input.style.border = '1px solid #ff1e10'
          input.style.color = '#ff1e10'
          input.style.outline = 'none'

          rotateWrapper.appendChild(input)
        }
        else {
          if(!input.value) {
            input.style.left = wrapperStartXY.x + 'px'
            input.style.top = wrapperStartXY.y + 'px'
            input.style.border = '1px solid #ff1e10'
            input.readOnly = false
          }
          else {
            input.style.border = '1px solid transparent'
            input.readOnly = true
          }

          input.addEventListener('blur', function() {
            that.inputValue = input.value
            input.value = ''
            that.writeText(prevStartXY.x, prevStartXY.y, 250, that.inputValue, that.drawingCtx)
          })
        }
      }

      // 鼠标抬起
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

    // 将文字写入画布
    writeText(startX, startY, maxWidth, text, ctx) {
      ctx.font = '20px Arial'
      ctx.fillStyle = fontColor
      ctx.strokeStyle = fontColor

      switch(rotatedDirectionMap.get(this.rotateCount)) {
        case 'top':
          ctx.save()
          ctx.fillText(text, startX, startY + 18, maxWidth)
          ctx.restore()
          break;
      
        case 'right':
          ctx.save()
          ctx.translate(startX + 20, startY)
          ctx.rotate(-90 * Math.PI / 180)
          ctx.fillText(text, 0, 0, maxWidth)
          ctx.restore()
          break;

        case 'bottom':
          ctx.save()
          ctx.translate(startX, startY - 20)
          ctx.rotate(180 * Math.PI / 180)
          ctx.fillText(text, 0, 0, maxWidth)
          ctx.restore()
          break;

        case 'left':
          ctx.save()
          ctx.translate(startX - 20, startY)
          ctx.rotate(90 * Math.PI / 180)
          ctx.fillText(text, 0, 0, maxWidth)
          ctx.restore()
          break;
      }

      this.textArea = {
        startX,
        startY,
        maxWidth
      }
    },

    // 计算光标在包裹画布的 div 的坐标
    computedRotateWrapperStartXY({ canvasStartXY }) {
      const { x: canvasX, y: canvasY } = canvasStartXY

      let startXY = {
        x: 0,
        y: 0
      }

      switch (rotatedDirectionMap.get(this.rotateCount)) {
        case 'top':
          startXY = canvasStartXY
          break;
      
        case 'right':
          startXY = {
            x: this.rotatedWidth - canvasY,
            y: canvasX
          }
          break;

        case 'bottom':
          startXY = {
            x: this.rotatedWidth - canvasX,
            y: this.rotatedHeight - canvasY
          }
          break;

        case 'left':
          startXY = {
            x: canvasY,
            y: this.rotatedHeight - canvasX
          }
          break;
      }

      return startXY
    }
  }
}