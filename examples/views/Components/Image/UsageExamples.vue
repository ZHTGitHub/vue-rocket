<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <div class="mb-4 btns">
          <z-btn 
            class="mr-4"
            color="primary" 
            @click="$refs.image.eventZoomIn()"
          >放大</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            @click="$refs.image.eventZoomOut()"
          >缩小</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            @click="$refs.image.eventZoomOrigin()"
          >还原</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            @click="$refs.image.eventRotateLeft()"
          >左旋转</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            @click="$refs.image.eventRotateRight()"
          >右旋转</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            @click="$refs.image.eventMoveLeft()"
          >向左滚动</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            @click="$refs.image.eventMoveRight()"
          >向右滚动</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            @click="$refs.image.eventMoveTop()"
          >向上滚动</z-btn>

          <z-btn 
            color="primary" 
            @click="$refs.image.eventMoveBottom()"
          >向下滚动</z-btn>
        </div>

        <div class="image-box">
          <z-image 
            ref="image" 
            :src="imageUrl" 
            width="700"
            @response="handleResponse"
          ></z-image>
        </div>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

  const code = 
`
  <z-btn @click="$refs.image.zoom('grow')">放大</z-btn>
  <z-btn @click="$refs.image.zoom('shrink')">缩小</z-btn>
  <z-btn @click="$refs.image.zoom('origin')">还原</z-btn>
  <z-btn @click="$refs.image.rotate('left')">左旋转</z-btn>
  <z-btn @click="$refs.image.rotate('right')">右旋转</z-btn>
  <z-btn @click="$refs.image.scroll('left')">向左滚动</z-btn>
  <z-btn @click="$refs.image.scroll('right')">向右滚动</z-btn>
  <z-btn @click="$refs.image.scroll('up')">向上滚动</z-btn>
  <z-btn @click="$refs.image.scroll('down')">向下滚动</z-btn>`

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        // imageUrl: require('../../../../public/images/global/1.jpg'),
        imageUrl: 'http://113.106.108.93:36200/api/files/B0118/download/2022/09-29/322022090041996/322022090041996-030105-286540258-1.png'
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      handleResponse(info) {
        console.log(info?.size)
        console.log(info?.time)
        console.log(info)
      }
    }
  }
</script>

<style scoped lang="scss">
  .image-box {
    height: 500px;
  }
</style>