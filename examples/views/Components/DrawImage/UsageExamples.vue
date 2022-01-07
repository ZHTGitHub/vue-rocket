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
              :width="300"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0821%252F29809d6bj00qy6do3002ac000f000xcc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644054961&t=638e8df7c78ff3a35a85ff2324580380"
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
        dataURL: ''
      }
    },

    mounted() {
      Prism.highlightAll()
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