<template>
  <div class="z-image">
    <top-bar @topBarEvent="topBarEvent"></top-bar>

    <div 
      class="view" 
      id="view" 
      ref="view"
      :style="{
        'justify-content': rowAlign,
        'align-items': colAlign
      }"
    >
      <div class="image-wrap">
        <img class="image" :src="src" />
      </div>
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
      // 图像垂直方向对齐方式
      colAlign: {
        validator(value) {
          return ['start', 'center', 'end'].includes(value)
        },
        default: 'center'
      },

      drag: {
        type: Boolean,
        default: true
      },

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

      // 图像较短一边占视图的比例
      proportion: {
        type: Number,
        required: false
      },

      // 图像水平方向对齐方式
      rowAlign: {
        validator(value) {
          return ['left', 'center', 'right'].includes(value)
        },
        default: 'center'
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
        scaling: false,
        angling: false,

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
          this.resetValues()
          this.overlay = true
          tools.loadImage(src, this.setImage)
        },
        immediate: true
      }
    },

    beforeDestroy() {
      if(this.view)
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

        const imageScaleWidth = this.imageRealWidth * this.imageScale
        const imageScalseHeight = this.imageRealHeight * this.imageScale

        if(this.proportion && imageScaleWidth < imageScalseHeight) {
          this.retinaWidth =  this.viewWidth * this.proportion
          const magnification = this.retinaWidth / imageScaleWidth
          this.retinaHeight = imageScalseHeight * magnification
        }
        else {
          this.retinaWidth = imageScaleWidth
          this.retinaHeight = imageScalseHeight
        }

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
        this.imageWrap = document.querySelector('#view .image-wrap')
      },

      setImageAttr() {
        this.imageWrap.setAttribute('style', `width: ${ this.retinaWidth }px; height: ${ this.retinaHeight }px;`)
      },

      // 设置图像移动、旋转动画
      transformImage() {
        if(this.scaling) {
          switch (this.colAlign) {
            case 'start':
              this.imageWrap.style['transform-origin'] = '50% 0%'
              break;
          }
        }
        else {
          this.imageWrap.style['transform-origin'] = '50% 50% 0'
        }

        this.imageWrap.style.transform = `translate(${ this.moveX }px, ${ this.moveY }px) rotate(${ this.angle }deg) scale(${ this.scale })`
        this.imageWrap.style.transition = 'transform .16s ease-out'
      },

      // 通过鼠标移动图像
      moveImageWithMouse() {
        draggable({
          el: document.querySelector('.image-wrap')
        })

        function draggable(options) {
          const el = options.el
          const beforeTransition = el.style.transition

          const coordinate = {
            x: 0,
            y: 0,
            top: 0,
            left: 0,
          }

          let start = false
          el.style.cursor = 'move'

          // 鼠标移动
          function mouseMove(event) {
            if(!start) return

            if(el.style.margin != '0px') {
              el.style.margin = '0px'
            }

            el.style.left = coordinate.left + (event.pageX - coordinate.x) + 'px'
            el.style.top = coordinate.top + (event.pageY - coordinate.y) + 'px'
          }

          // 鼠标抬起
          function mouseUp() {
            document.removeEventListener('mousemove', mouseMove)
            document.removeEventListener('mouseup', mouseUp)
            el.style.transition = beforeTransition
            start = false
          }

          // 鼠标按下
          el.addEventListener('mousedown', function(event) {
            el.style.transition = 'all 0s'

            coordinate.x = event.pageX
            coordinate.y = event.pageY
            coordinate.left = el.offsetLeft
            coordinate.top = el.offsetTop

            start = true
            document.addEventListener('mousemove', mouseMove)
            document.addEventListener('mouseup', mouseUp)
          })
        }
      },

      // 滚轮滚动
      mouseWheel() {
        if(!this.view) return

        this.scaling = true
        this.angling = false

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
      },

      resetValues() {
        // view
        this.view = null
        this.viewWidth = 0
        this.viewHeight = 0

        // image
        this.image = null
        this.imageRealWidth = 0
        this.imageRealHeight = 0
        this.imageScale = 1

        // 视网膜
        this.retinaWidth = 0
        this.retinaHeight = 0

        // 记录图片当前状态
        this.scale = 1
        this.angle = 0
        this.moveX = 0
        this.moveY = 0
        this.scaling = false
        this.angling = false

        // 图片移动距离
        this.memoX = 0,
        this.memoY = 0

        this.overlay = false
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
      /* justify-content: center;
      align-items: center; */
      position: relative;
      background-color: $color;
      border-left: 1px solid $color;
      border-right: 1px solid $color;
      border-bottom: 1px solid $color;
      overflow: hidden;

      .image-wrap {
        position: absolute;
        cursor: move;

        .image {
          width: 100%;
          height: 100%;
          cursor: grab;
          user-select: none;
          pointer-events: none;
        }
      }

      
    }
  }
</style>