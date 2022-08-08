
import { tools } from '../../packages/scripts/utils'
const [FILL_STYLE, LINE_WIDTH, STROKE_STYLE] = ['rgba(0, 0, 0, .46)', 2, '#1aad19']

export default {
  props: {
    defaultScreenshotArea: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      screenshotArea: {}
    }
  },

  methods: {
    // 截图
    drawScreenshot() {
      this._clearEventListener()

      this.setDefaultStyle()

      let [startXY, rectW, rectH] = [null, 0, 0]

      this.drawingCanvas.onmousedown = (event) => {
        startXY = {
          startX: event.offsetX,
          startY: event.offsetY
        }
      }

      this.drawingCanvas.onmousemove = (event) => {
        if(startXY) {
          const { startX, startY } = startXY
          rectW = event.offsetX - startX
          rectH = event.offsetY - startY

          this.fillRectangle({ startX, startY, rectW, rectH, ctx: this.drawingCtx, overlay: true })
        }
      }

      document.addEventListener('mouseup', () => {
        if(startXY) {
          startXY = null
          this.createScreenshotFile()
        }
      })
    },

    setDefaultStyle() {
      this.drawingCtx.fillStyle = FILL_STYLE
      this.drawingCtx.lineWidth = LINE_WIDTH
      this.drawingCtx.strokeStyle = STROKE_STYLE
    },
    
    // 默认截图区域
    setDefaultScreenshotArea(screenshotArea) {
      if(tools.isYummy(screenshotArea)) {
        this.setDefaultStyle()

        this.screenshotArea = { ...screenshotArea }

        this.fillRectangle({ ...this.screenshotArea, ctx: this.drawingCtx, overlay: true })
      }
    }
  }
}