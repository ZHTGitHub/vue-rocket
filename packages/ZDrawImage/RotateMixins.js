const DEG = 90

const directionMap = new Map([
  [0, 'top'],
  [90, 'right'],
  [-270, 'right'],
  [180, 'bottom'],
  [-180, 'bottom'],
  [270, 'left'],
  [-90, 'left'],
])

export default {
  methods: {
    // 旋转
    rotateImage(leftOrRight) { 
      if(leftOrRight === 'left') {
        --this.rotateCount

        if(this.rotateCount <= -4) {
          this.rotateCount = 0
        }
      }
      else if(leftOrRight === 'right') {
        ++this.rotateCount

        if(this.rotateCount >= 4) {
          this.rotateCount = 0
        }
      }

      this.rotateDegrees = this.rotateCount * DEG

      this.$emit('direction', directionMap.get(this.rotateDegrees))

      this.drewCanvas.style.transform = `rotate(${ this.rotateDegrees }deg)`
      this.drawingCanvas.style.transform = `rotate(${ this.rotateDegrees }deg)`

      const even = (this.rotateDegrees / 90) % 2 === 0 ? true : false

      if(even) {
        this.rotatedWidth = this.imgWidth
        this.rotatedHeight = this.imgHeight

        this.drewCanvas.style.top = 0
        this.drawingCanvas.style.top = 0

        this.drewCanvas.style.left = 0
        this.drawingCanvas.style.left = 0
      }
      else {
        this.rotatedWidth = this.imgHeight
        this.rotatedHeight = this.imgWidth

        const fromTop = (this.imgWidth / 2) - (this.imgHeight / 2)
        const fromLeft = (this.imgHeight / 2) - (this.imgWidth / 2)

        this.drewCanvas.style.top = `${ fromTop }px`
        this.drawingCanvas.style.top = `${ fromTop }px`

        this.drewCanvas.style.left = `${ fromLeft }px`
        this.drawingCanvas.style.left = `${ fromLeft }px`
      }

      this.createDrewFile()
    },

    // 设置图片默认方向
    setImageDirection() {
      switch(this.direction) {
        case 'top':
          this.rotateCount = -1
          break;
      
        case 'right':
          this.rotateCount = 0
          break;
        
        case 'bottom':
          this.rotateCount = 1
          break;

        case 'left':
          this.rotateCount = 2
          break;
      }

      this.rotateImage('right')
    }
  }
}