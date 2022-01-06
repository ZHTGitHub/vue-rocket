<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        
      </div>
      <div slot="demo">
        <div class="z-flex">
          <z-draw-image 
            showDrew
            width="300"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0821%252F29809d6bj00qy6do3002ac000f000xcc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644054961&t=638e8df7c78ff3a35a85ff2324580380"
          ></z-draw-image>
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

  export default {
    name: 'UsageExamples',

    data() {
      return {
        
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>