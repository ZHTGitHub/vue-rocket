<template>
  <div class="usage-examples">
    <div class="mb-4 btns">
      <z-btn 
        class="mr-4"
        color="primary" 
        :unlocked="false"
        @click="zoomIn"
      >放大</z-btn>

      <z-btn 
        class="mr-4"
        color="primary" 
        :unlocked="false"
        @click="zoomOut"
      >缩小</z-btn>

      <z-btn 
        class="mr-4"
        color="primary" 
        :unlocked="false"
        @click="rotateLeft"
      >左旋转</z-btn>

      <z-btn 
        color="primary" 
        :unlocked="false"
        @click="rotateRight"
      >右旋转</z-btn>
    </div>

    <usage-demo>
      <div slot="code">
        
      </div>

      <div slot="demo" class="image-box">
        <z-image ref="image" :src="imageUrl" width="700"></z-image>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        imageUrl: require('../../../../public/lp1.png')
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      zoomIn() {
        this.$refs.image.zoomIn()
      },

      zoomOut() {
        this.$refs.image.zoomOut()
      },

      rotateLeft() {
        this.$refs.image.rotateLeft()
      },

      rotateRight() {
        this.$refs.image.rotateRight()
      }
    }
  }
</script>

<style scoped lang="scss">
  .image-box {
    width: 700px;
    height: 500px;
  }
</style>