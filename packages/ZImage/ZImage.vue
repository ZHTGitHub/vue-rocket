<template>
  <div class="z-image">
    <top-bar @topBarEvent="topBarEvent"></top-bar>

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
  import EventMixins from './mixins/EventMixins'
  import { TopBar } from './components'
  import tools from './libs/tools'
  import imageEvent from './libs/imageEvent'

  export default {
    name: 'ZImage',
    mixins: [EventMixins],

    props: {
      // 图像缩小的最小倍数
      minZoomOut: {
        type: Number,
        default: 1
      },

      // 图像每次平移距离
      moveSpace: {
        type: Number,
        default: 50
      },

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
        angle: 0,
        moveX: 0,
        moveY: 0,

        // 图片移动距离
        memoX: 0, 
        memoY: 0,

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
          angle: this.angle,
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

    beforeDestroy() {
      this.view.onmousewheel = null
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

        this.mouseWheel()
        this.moveImageWithMouse()
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
        this.image.style.transform = `translate(${ this.moveX }px, ${ this.moveY }px) rotate(${ this.angle }deg) scale(${ this.scale })`
        this.image.style.transition = 'transform .16s ease-out'
      },

      // 通过鼠标移动图像
      moveImageWithMouse() {
        let [downX, downY] = [void 0, void 0]

        // 按下鼠标
        this.view.onmousedown = (downEvent) => {
          const { x, y } = downEvent

          downX = x
          downY = y

          // 移动鼠标
          this.view.onmousemove = (moveEvent) => {
            tools.throttle(() => {
              const { x, y } = moveEvent

              this.moveX = x - downX + this.memoX
              this.moveY = y - downY + this.memoY

              this.transformImage()
            })
          }
        }

        // 抬起鼠标
        this.view.onmouseup = () => {
          this.memoX = this.moveX
          this.memoY = this.moveY
          this.view.onmousemove = null
        }
      },

      // 滚轮滚动
      mouseWheel() {
        this.view.onmousewheel = (event) => {
          tools.throttle(() => {
            if(event.wheelDelta > 0) {
              this.scale = imageEvent.zoomIn(this.params)
            }
            else {
              this.scale = imageEvent.zoomOut(this.params)
              this.limitZoomOut()
            }
            
            this.transformImage()
          }, 10)
        }
      },

      // 限制缩小
      limitZoomOut() {
        if(this.scale <= this.minZoomOut) {
          this.scale = this.minZoomOut
        }
      }
    },

    components: {
      TopBar
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

      .image {
        cursor: grab;
        user-select: none;
        pointer-events: none;
      }
    }
  }
</style>