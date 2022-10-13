<template>
  <div class="z-image">
    <div class="view" id="view" ref="view">
      <img class="image" :src="src" />
    </div>

    <v-overlay 
      :absolute="true" 
      :opacity=".8"
      :value="overlay"
    >
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
  import tools from './tools'
  import imageEvent from './libs/imageEvent'
  import { moveSpace } from './libs/constants'

  export default {
    name: 'ZImage',

    props: {
      // 图像源路径
      src: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        // view
        view: null,
        viewWidth: 0,
        viewHeight: 0,

        // image
        image: null,
        imageRealWidth: 0,
        imageRealHeight: 0,
        imageScale: 1,


        // 视网膜
        retinaWidth: 0,
        retinaHeight: 0,

        // 记录图片当前状态
        scale: 1,
        moveSpace,
        moveX: 0,
        moveY: 0,

        overlay: false
      }
    },

    computed: {
      params() {
        return {
          viewWidth: this.viewWidth,
          viewHeight: this.viewHeight,
          imageRealWidth: this.imageRealWidth,
          imageRealHeight: this.imageRealHeight,
          imageScale: this.imageScale,
          scale: this.scale,
          moveSpace: this.moveSpace,
          moveX: this.moveX,
          moveY: this.moveY
        }
      }
    },

    watch: {
      src: {
        handler(src) {
          this.overlay = true
          tools.loadImage(src, this.setImage)
        },
        immediate: true
      }
    },

    methods: {
      setImage(width, height) {
        // 图片不存在
        if(!width || !height) {
          this.overlay = false
          return
        }
        
        this.getView()

        this.getImage()

        this.imageRealWidth = width
        this.imageRealHeight = height

        const scaleWidth = this.viewWidth / this.imageRealWidth
        const scaleHeight = this.viewHeight / this.imageRealHeight

        this.imageScale = Math.min(scaleWidth, scaleHeight)

        this.retinaWidth = this.imageRealWidth * this.imageScale
        this.retinaHeight = this.imageRealHeight * this.imageScale

        this.setImageAttr()

        this.overlay = false
      },

      // 获取view的宽高
      getView() {
        this.view = this.$refs.view
        this.viewWidth = this.view.offsetWidth
        this.viewHeight = this.view.offsetHeight
      },

      // 获取图像实例
      getImage() {
        this.image = document.querySelector('#view .image')
      },

      setImageAttr() {
        this.image.setAttribute('style', `width: ${ this.retinaWidth }px; height: ${ this.retinaHeight }px;`)
      },

      // 设置图像移动、旋转动画
      transformImage() {
        this.image.style.transform = `translate(${ this.moveX }px, ${ this.moveY }px) scale(${ this.scale })`
        this.image.style.transition = 'transform .16s ease-out'
      },

      // 滚轮滚动
      mouseWheel(event) {
        tools.throttle(() => {
          this.scale = event.e.wheelDelta > 0 ? imageEvent.zoomOut(this.params) : imageEvent.zoomIn(this.params)
          this.transformContainer()
        }, 10)
      },
    }
  }
</script>

<style scoped lang="scss">
  $color: #4c4c4c;

  .z-image {
    display: flex;
    flex-direction: column;
    position: relative;
    height: inherit;

    .view {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      background-color: $color;
      border-left: 1px solid $color;
      border-right: 1px solid $color;
      border-bottom: 1px solid $color;
      overflow: hidden;
    }
  }
</style>