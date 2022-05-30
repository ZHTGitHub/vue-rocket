import { ROTATE_DEGREE } from './cells'

export default {
  methods: {
    rotate(direction) {
      switch (direction) {
        // 向左旋转
        case 'left':
          this.degree -= ROTATE_DEGREE
          break;

        // 向右旋转
        case 'right':
          this.degree += ROTATE_DEGREE
          break;
      }

      this.imgRef.style.transform = `rotate(${ this.degree }deg)`
      this.zImageRef.scrollLeft = 0
      this.zImageRef.scrollTop = 0

      this.setDynamicSize()
    }
  }
}