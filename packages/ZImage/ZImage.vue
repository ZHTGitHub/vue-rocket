<template>
  <div ref="zImage" class="z-image">
    <div 
      class="dynamic"
      :style="{
        width: `${ dynamicWidth }px`,
        height: `${ dynamicHeight }px`
      }"
    >
      <img 
        ref="img"
        :src="src" 
        :style="{
          width: `${ imageWidth }px`,
          height: `${ imageHeight }px`
        }"
      />
    </div>
  </div>
</template>

<script>
  let [zImage, img] = [null, null]
  let [hiddenPX, zoomWidth, zoomHeight, blocks] = [0, 0, 0, 5]

  export default {
    name: 'ZImage',

    props: {
      degree: {
        type: [Number, String],
        default: 90
      },

      maxZoomIn: {
        type: [Number, String],
        default: 2
      },

      minZoomOut: {
        type: [Number, String],
        default: .25
      },

      src: {
        type: String,
        required: true
      },

      width: {
        type: [Number, String],
        required: false
      }
    },

    data() {
      return {
        angle: 0,
        hypotenuse: 0,

        imageWidth: 0,
        imageHeight: 0,

        dynamicWidth: 0,
        dynamicHeight: 0
      }
    },

    methods: {
      getImageInfo() {
        const image = new Image()
        image.src = this.src

        zImage = this.$refs.zImage
        img = this.$refs.img

        image.onload = () => {
          const ratio = image.width / image.height

          this.imageWidth = +this.width
          this.imageHeight = this.imageWidth / ratio
          this.hypotenuse = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.imageHeight, 2))

          zoomWidth = this.imageWidth / blocks
          zoomHeight = this.imageHeight / blocks

          this.setDynamicSize()
        }
      },

      // 放大
      zoomIn() {
        this.imageWidth += zoomWidth
        this.imageHeight += zoomHeight

        const maxWidth = zoomWidth * blocks * this.maxZoomIn
        const maxHeight = zoomHeight * blocks * this.maxZoomIn

        if(this.imageWidth >= maxWidth) {
          this.imageWidth = maxWidth
          this.imageHeight = maxHeight
        }

        this.setDynamicSize()
      },

      // 缩小
      zoomOut() {
        this.imageWidth -= zoomWidth
        this.imageHeight -= zoomHeight

        const minWidth = zoomWidth * blocks * this.minZoomOut
        const minHeight = zoomHeight * blocks * this.minZoomOut

        if(this.imageWidth <= minWidth) {
          this.imageWidth = minWidth
          this.imageHeight = minHeight
        }

        this.setDynamicSize()
      },

      // 左旋转
      rotateLeft() {
        this.angle -= this.degree

        img.style.transform = `rotate(${ this.angle }deg)`
        zImage.scrollTop = 0

        this.setDynamicSize()
      },

      // 右旋转
      rotateRight() {
        this.angle += this.degree

        img.style.transform = `rotate(${ this.angle }deg)`
        zImage.scrollTop = 0
        
        this.setDynamicSize()
      },

      setDynamicSize() {
        const odd = Math.abs(this.angle / this.degree) % 2 !== 0 ? true : false

        this.dynamicWidth = this.imageWidth
        this.dynamicHeight = this.imageHeight

        img.style.left = 'auto'
        img.style.top = 'auto'

        if(odd) {
          this.dynamicWidth = this.imageHeight
          this.dynamicHeight = this.imageWidth

          img.style.left = `${ hiddenPX }px`
          img.style.top = `-${ hiddenPX }px`
        }

        hiddenPX = (this.imageHeight - this.imageWidth) / 2
      }
    },

    watch: {
      src: {
        handler() {
          this.$nextTick(this.getImageInfo) 
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-image {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: scroll;

    .dynamic {
      position: relative;

      img {
        position: relative;
        display: inline-block;
        transition: all .3s linear;
      }
    }
  }
</style>