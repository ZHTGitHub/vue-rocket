<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        
      </div>

      <div class="z-draw-image-demo" slot="demo">
        <div class="options">
          <ul class="z-flex align-center">
            <div 
              v-for="(item, index) in options" 
              :key="item.key"
              :class="{ 'divider z-flex align-center': index === 5 }"
            >
              <li class="mr-2">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      :color="item.color"
                      icon
                      :disabled="item.disabled"
                      v-bind="attrs"
                      v-on="on"
                      @click="onSelect(item)"
                    >
                      <v-icon 
                        :size="item.size"
                        :style="item.style"
                      >{{ item.icon }}</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ item.tips }}</span>
                </v-tooltip>
              </li>
            </div>
          </ul>
        </div>

        <v-row class="pt-8">
          <v-col :cols="2">
            <ul>
              <li 
                v-for="image in images" 
                :key="image"
                @click="switchImage(image)"
              >
                <img width="100" :src="image" />
              </li>
            </ul>
          </v-col>

          <!-- 截图 BEGIN -->
          <v-col :cols="10" class="box">
            <z-draw-image 
              ref="drawImage"
              fileName="file.png"
              download
              imageWidth="800"
              :src="src"
              @drew="handleDrew"
              @save="handleSave"
            ></z-draw-image>

            <!-- <z-btn
              color="primary"
              unlocked
              @click="changeImage"
            >
              change
            </z-btn> -->
          </v-col>
          <!-- 截图 END -->

          <!-- 预览 BEGIN -->
          <!-- <v-col :cols="5">
            <img :src="dataURL" />
          </v-col> -->
          <!-- 预览 END -->
        </v-row>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  import cells from './cells'

  const images = [
    require('../../../../public/lp1.png'),
    require('../../../../public/lp2.png'),
    require('../../../../public/lp3.png'),
    require('../../../../public/lp4.jpg')
  ]

  export default {
    name: 'UsageExamples',

    data() {
      return {
        images,
        options: cells.options,
        dataURL: '',

        isScreenshot: true,

        num: -1,

        src: images[1]
      }
    },

    mounted() {
      Prism.highlightAll()
      this._keyboardEvents()
    },

    methods: {
      switchImage(image) {
        this.src = image
        // console.log(this.src)
      },

      handleDrew({ dataURL, file }) {
        this.dataURL = dataURL
        // console.log(file)
      },

      handleSave({ dataURL, file }) {
        console.log(dataURL)
        console.log(file)
      },

      // 某项操作
      onSelect({ key }) {
        switch (key) {
          case 'screenshot':
            this.$refs.drawImage.drawScreenshot()
            break;

          case 'rectangle':
            this.$refs.drawImage.drawRectangle()
            break;
          
          case 'text':
            this.$refs.drawImage.drawText()
            break;
          
          case 'rotateL':
            this.$refs.drawImage.rotateImage('left')
            break;

          case 'rotateR':
            this.$refs.drawImage.rotateImage('right')
            break;
          
          case 'clear':
            this.$refs.drawImage.clear()
            break;
          
          case 'save':
            this.$refs.drawImage.onSave()
            break;
        }
      },

      // 按键
      _keyboardEvents() {
        window.addEventListener('keydown', (event) => {
          const { altKey, ctrlKey, keyCode } = event

          switch (keyCode) {
            case 37: 
              ctrlKey && this.$refs.drawImage.scrollLeft()
              break;

            case 38: 
              ctrlKey && this.$refs.drawImage.scrollTop()
              break;

            case 39: 
              ctrlKey && this.$refs.drawImage.scrollRight()
              break;

            case 40: 
              ctrlKey && this.$refs.drawImage.scrollBottom()
              break;

            // 切图
            case 65:
              event.preventDefault()
              ctrlKey && this.$refs.drawImage.drawScreenshot()
              break;

            // 矩形
            case 88:
              event.preventDefault()
              ctrlKey && this.$refs.drawImage.drawRectangle()
              break;

            // 文字
            case 69:
              event.preventDefault()
              ctrlKey && this.$refs.drawImage.drawText()
              break;

            // 左旋转
            case 76:
              event.preventDefault()
              ctrlKey && this.$refs.drawImage.rotateImage('left')
              break;

            // 右旋转
            case 82:
              event.preventDefault()
              ctrlKey && this.$refs.drawImage.rotateImage('right')
              break;

            // 清除
            case 90:
              event.preventDefault()
              if(ctrlKey && !altKey) {
                this.$refs.drawImage.clear()
              }
              else if(ctrlKey && altKey) {
                this.screenshotOrRectangle()
              }
              break;
            
            // 保存
            case 83:
              event.preventDefault()
              ctrlKey && this.$refs.drawImage.onSave()
              break;
          }
        })
      },

      // 同时按下Ctrl+Alt+Z进行切图和框图切换
      screenshotOrRectangle() {
        this.isScreenshot = !this.isScreenshot

        if(this.isScreenshot) this.$refs.drawImage.drawScreenshot()
        else this.$refs.drawImage.drawRectangle()
      },

      changeImage() {
        ++this.num

        if(this.num >= images.length) {
          this.num = 0
        }

        this.src = images[this.num]
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-draw-image-demo {
    position: relative;

    .options {
      position: absolute;
      border: 1px solid rgba(0, 0, 0, .06);
      background-color: #fff;
      z-index: 1;

      ul, li {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }

      .divider::before {
        content: '';
        display: inline-block;
        margin-right: 8px;
        width: 1px;
        height: 20px;
        background-color: rgba(0, 0, 0, .15);
      }
    }

    .box {
      height: 600px;
      overflow: hidden;
    }
  }
</style>