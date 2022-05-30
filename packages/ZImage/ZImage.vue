<template>
  <div ref="zImageRef" class="z-image">
    <div 
      class="dynamic"
      :style="{
        width: `${ dynamicWidth }px`,
        height: `${ dynamicHeight }px`
      }"
    >
      <img 
        ref="imgRef"
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
  import RotateMixins from './RotateMixins'
  import ScrollMixins from './ScrollMixins'
  import ZoomMixins from './ZoomMixins'
  import { ROTATE_DEGREE } from './cells'

  export default {
    name: 'ZImage',
    mixins: [RotateMixins, ScrollMixins, ZoomMixins],

    props: {
      blocks: {
        type: [Number, String],
        default: 5
      },

      maxTimes: {
        type: [Number, String],
        default: 2
      },

      minTimes: {
        type: [Number, String],
        default: .25
      },

      scrollRange: {
        type: [Number, String],
        default: 50
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
        zImageRef: null,
        imgRef: null,

        degree: 0,

        imageWidth: 0,
        imageHeight: 0,

        dynamicWidth: 0,
        dynamicHeight: 0,

        zoomWidth: 0,
        zoomHeight: 0
      }
    },

    methods: {
      getImageInfo() {
        const image = new Image()
        image.src = this.src

        this.zImageRef = this.$refs.zImageRef
        this.imgRef = this.$refs.imgRef

        image.onload = () => {
          const ratio = image.width / image.height

          this.imageWidth = +this.width || image.width
          this.imageHeight = this.imageWidth / ratio

          this.zoomWidth = this.imageWidth / this.blocks
          this.zoomHeight = this.imageHeight / this.blocks

          this.setDynamicSize()
        }
      },

      setDynamicSize() {
        // 奇数次
        const odd = Math.abs(this.degree / ROTATE_DEGREE) % 2 !== 0 ? true : false

        this.dynamicWidth = this.imageWidth
        this.dynamicHeight = this.imageHeight

        this.imgRef.style.left = 'auto'
        this.imgRef.style.top = 'auto'

        const hiddenX = (this.imageHeight - this.imageWidth) / 2
        const hiddenY = (this.imageWidth - this.imageHeight) / 2

        if(odd) {
          this.dynamicWidth = this.imageHeight
          this.dynamicHeight = this.imageWidth

          this.imgRef.style.left = `${ hiddenX }px`
          this.imgRef.style.top = `${ hiddenY }px`
        }
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