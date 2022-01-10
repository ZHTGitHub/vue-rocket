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
          <!-- 截图 BEGIN -->
          <v-col :cols="6">
            <z-draw-image 
              ref="drawImage"
              fileName="file.png"
              :width="400"
              src="https://img1.baidu.com/it/u=2716398045,2043787292&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
              @drew="handleDrew"
              @save="handleSave"
            ></z-draw-image>
          </v-col>
          <!-- 截图 END -->

          <!-- 预览 BEGIN -->
          <v-col :cols="6">
            <img :src="dataURL" />
          </v-col>
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

  export default {
    name: 'UsageExamples',

    data() {
      return {
        options: cells.options,
        dataURL: '',

        isScreenshot: true
      }
    },

    mounted() {
      Prism.highlightAll()
      this._keyboardEvents()
    },

    methods: {
      handleDrew({ dataURL }) {
        this.dataURL = dataURL
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
            this.$refs.drawImage.onClear()
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
                this.$refs.drawImage.onClear()
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
  }
</style>