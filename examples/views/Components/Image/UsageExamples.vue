<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <div class="image-box">
          <z-image 
            ref="image" 
            :min-zoom-out=".5"
            :src="imageUrl" 
            :proportion="0.75"
            col-align="start"
            row-align="center"
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
  <z-btn @click="$refs.image.eventZoomIn()">放大</z-btn>
  <z-btn @click="$refs.image.eventZoomOut()">缩小</z-btn>
  <z-btn @click="$refs.image.eventZoomOrigin()">还原</z-btn>
  <z-btn @click="$refs.image.eventRotateLeft()">左旋转</z-btn>
  <z-btn @click="$refs.image.eventRotateRight()">右旋转</z-btn>
  <z-btn @click="$refs.image.eventMoveLeft()">向左滚动</z-btn>
  <z-btn @click="$refs.image.eventMoveRight()">向右滚动</z-btn>
  <z-btn @click="$refs.image.eventMoveTop()">向上滚动</z-btn>
  <z-btn @click="$refs.image.eventMoveBottom()">向下滚动</z-btn>`

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        imageUrl: require('../../../../public/images/global/6.png')
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>

<style scoped lang="scss">
  .image-box {
    height: 300px;
  }
</style>