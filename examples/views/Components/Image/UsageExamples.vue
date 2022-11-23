<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <div class="image-box">
          <z-image 
            ref="image" 
            :drag="false"
            :min-zoom-out=".5"
            :src="imageUrl" 
            col-align="start"
            row-align="center"
          ></z-image>
        </div>
      </div>
    </usage-demo>

    <!-- <ul class="z-flex">
      <li v-for="(image, index) in images" :key="index" @click="handleClick(image)">
        <img :src="image.url" :width="image.width">
      </li>
    </ul> -->
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

  const code = 
`
  <z-btn @click="$refs.image.eventZoomIn()">放大</z-btn>
  <z-btn @click="$refs.image.eventZoomOut()">缩小</z-btn>
  <z-btn @click="$refs.image.eventZoomOrigin()">还原</z-btn>
  <z-btn @click="$refs.image.eventRotateLeft()">左旋转</z-btn>
  <z-btn @click="$refs.image.eventRotateRight()">右旋转</z-btn>
  <z-btn @click="$refs.image.eventMoveLeft()">向左滚动</z-btn>
  <z-btn @click="$refs.image.eventMoveRight()">向右滚动</z-btn>
  <z-btn @click="$refs.image.eventMoveTop()">向上滚动</z-btn>
  <z-btn @click="$refs.image.eventMoveBottom()">向下滚动</z-btn>`

  const images = [
    {
      url: 'http://www.i-confluence.com:13001/api/files/B0118/download/2022/09-30/372022080038223/372022080038223-030105-286014698-5.png',
      width: 100
    },

    {
      url: 'http://113.106.108.93:38800/api/files/B0108/download/2022/09-20/00083000202209140900162/001576799668903/001576799668903904001.png',
      width: 100
    }
  ]

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        imageUrl: require('../../../../public/images/global/1.jpg'),
        // imageUrl: 'http://www.i-confluence.com:13001/api/files/B0118/download/2022/09-30/372022080038223/372022080038223-030105-286014698-5.png',
        images
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      handleClick(image) {
        this.imageUrl = image.url
      }
    }
  }
</script>

<style scoped lang="scss">
  .image-box {
    height: 300px;
  }
</style>