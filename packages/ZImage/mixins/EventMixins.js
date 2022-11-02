import imageEvent from '../libs/imageEvent'

export default {
  methods: {
    topBarEvent(eventName) {
      this.eventName = eventName

      switch (eventName) {
        case 'zoomOut':
          this.eventZoomOut()
          break;

        case 'zoomIn':
          this.eventZoomIn()
          break;

        case 'rotateRight':
          this.eventRotateRight()
          break;

        case 'rotateLeft':
          this.eventRotateLeft()
          break;
      }
    },

    // 放大
    eventZoomIn() {
      this.scale = imageEvent.zoomIn(this.params)
      this.scaling = true
      this.angling = false

      this.$emit('zoom', this.scale)

      this.transformImage()
    },

    // 缩小
    eventZoomOut() {
      this.scale = imageEvent.zoomOut(this.params)
      this.scaling = true
      this.angling = false

      this.limitZoomOut()

      this.$emit('zoom', this.scale)

      this.transformImage()
    },

    // 还原
    eventZoomOrigin() {
      this.scale = imageEvent.zoomOrigin(this.params)
      this.scaling = true
      this.angling = false

      this.$emit('zoom', this.scale)

      this.transformImage()
    },

    // 右旋转
    eventRotateRight() {
      this.angle = imageEvent.rotateRight(this.params)
      this.angling = true
      this.scaling = false

      this.$emit('rotate', this.angle)

      this.transformImage()
    },

    // 左旋转
    eventRotateLeft() {
      this.angle = imageEvent.rotateLeft(this.params)
      this.angling = true
      this.scaling = false

      this.$emit('rotate', this.angle)
      
      this.transformImage()
    },

    // 向上平移
    eventMoveTop() {
      this.moveY = imageEvent.moveTop(this.params)
      this.memoY = this.moveY
      this.transformImage()
    },

    // 向右平移
    eventMoveRight() {
      this.moveX = imageEvent.moveRight(this.params)
      this.memoX = this.moveX
      this.transformImage()
    },

    // 向下平移
    eventMoveBottom() {
      this.moveY = imageEvent.moveBottom(this.params)
      this.memoY = this.moveY
      this.transformImage()
    },

    // 向左平移
    eventMoveLeft() {
      this.moveX = imageEvent.moveLeft(this.params)
      this.memoX = this.moveX
      this.transformImage()
    }
  }
}