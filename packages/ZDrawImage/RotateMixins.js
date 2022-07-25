  const DEG = 90

export default {
  methods: {
    // 旋转
    rotateImage(direction) { 
      if(direction === 'left') {
        --this.rotateCount

        if(this.rotateCount <= -4) {
          this.rotateCount = 0
        }
      }
      else if(direction === 'right') {
        ++this.rotateCount

        if(this.rotateCount >= 4) {
          this.rotateCount = 0
        }
      }

      this.rotateDegrees = this.rotateCount * DEG

      this.drewCanvas.style.transform = `rotate(${ this.rotateDegrees }deg)`
      this.drawingCanvas.style.transform = `rotate(${ this.rotateDegrees }deg)`

      const even = (this.rotateDegrees / 90) % 2 === 0 ? true : false

      if(even) {
        this.rotatedWidth = this.width
        this.rotatedHeight = this.height

        this.drewCanvas.style.top = 0
        this.drawingCanvas.style.top = 0

        this.drewCanvas.style.left = 0
        this.drawingCanvas.style.left = 0
      }
      else {
        this.rotatedWidth = this.height
        this.rotatedHeight = this.width

        const fromTop = (this.width / 2) - (this.height / 2)
        const fromLeft = (this.height / 2) - (this.width / 2)

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