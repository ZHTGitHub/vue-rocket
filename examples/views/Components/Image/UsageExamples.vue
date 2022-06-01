<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <div class="mb-4 btns">
          <z-btn 
            class="mr-4"
            color="primary" 
            :unlocked="false"
            @click="$refs.image.zoom('grow')"
          >放大</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            :unlocked="false"
            @click="$refs.image.zoom('shrink')"
          >缩小</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            :unlocked="false"
            @click="$refs.image.zoom('origin')"
          >还原</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            :unlocked="false"
            @click="$refs.image.rotate('left')"
          >左旋转</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            :unlocked="false"
            @click="$refs.image.rotate('right')"
          >右旋转</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            :unlocked="false"
            @click="$refs.image.scroll('left')"
          >向左滚动</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            :unlocked="false"
            @click="$refs.image.scroll('right')"
          >向右滚动</z-btn>

          <z-btn 
            class="mr-4"
            color="primary" 
            :unlocked="false"
            @click="$refs.image.scroll('up')"
          >向上滚动</z-btn>

          <z-btn 
            color="primary" 
            :unlocked="false"
            @click="$refs.image.scroll('down')"
          >向下滚动</z-btn>
        </div>

        <div class="image-box">
          <z-image 
            ref="image" 
            :src="imageUrl" 
            width="700"
          ></z-image>
        </div>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

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
        imageUrl: require('../../../../public/images/global/1.jpg')
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>

<style scoped lang="scss">
  .image-box {
    width: 700px;
    height: 500px;
  }
</style>