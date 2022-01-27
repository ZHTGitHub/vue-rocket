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
              :src="src"
              @drew="handleDrew"
              @save="handleSave"
            ></z-draw-image>

            <z-btn 
              color="primary"
              lockedTime="0"
              @click="changeImg"
            >更新图片</z-btn>
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
  import { flatArray } from '../../../../packages/scripts/tools'

  const src1 = 'https://img1.baidu.com/it/u=2716398045,2043787292&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800'
  const src2 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F21%2Fc0%2Ff5%2F21c0f5d2f4b6325808b548d2f94e0ef3.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645605370&t=faae47f3683b7bb35d33c2bb12303945'
  const src3 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fd8%2Fb7%2F36%2Fd8b736f5168f2a98667bce3d7ad3e5ed.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645605753&t=4b17ed8044f949083c0e9291edd35d26'
  const src4 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F30%2F90%2F40%2F309040a0602c672cebc6ab3a1bbbc8cd.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645605789&t=99690dc4580d61831b148c62c118e01f'
  const src5 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F80%2Fd6%2F5a%2F80d65af4e7e937be899ba595732b79e8.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645605807&t=77529507289fc0f73a68a77d59e5c7e3'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        options: cells.options,
        dataURL: '',

        isScreenshot: true,

        src: src1
      }
    },

    created() {
      const arr = [[{a: 1}], [{b: 2}]]
      console.log(flatArray(arr))
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

      changeImg() {
        const images = [src1, src2, src3, src4, src5]
        const index = Math.floor(Math.random() * 5)
        this.src = `${ images[index] }?updateTime=${ new Date().getTime() }`
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