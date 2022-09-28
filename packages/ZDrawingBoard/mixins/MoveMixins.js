import containerEvent from '../libs/containerEvent'

export default {
  methods: {
    moveTop() {
      this.moveY = containerEvent.moveTop(this.params)
      this.transformContainer()
    },

    moveRight() {
      this.moveX = containerEvent.moveRight(this.params)
      this.transformContainer()
    },

    moveBottom() {
      this.moveY = containerEvent.moveBottom(this.params)
      this.transformContainer()
    },

    moveLeft() {
      this.moveX = containerEvent.moveLeft(this.params)
      this.transformContainer()
    }
  },
}