<template>
  <div class="z-demo-drawing-board">
    <z-drawing-board 
      ref="board" 
      direction="TOP"
      download
      name="leslie"
      shot
      :imageCompress=".2"
      :src="src"
      :zoom="1"
      @load="handleLoad"
      @cut="handleCut"
      @direction="handleDirection"
      @zoom="handleZoom"
      @done="handleDone"
    ></z-drawing-board>

    <ul class="z-flex">
      <li v-for="(image, index) in images" :key="index" @click="handleClick(image)">
        <img :src="image.url" :width="image.width">
      </li>
    </ul>
  </div>
</template>

<script>
  const images = [
    {
      url: 'http://www.i-confluence.com:13001/api/files/B0118/download/2022/09-30/372022080038223/372022080038223-030105-286014698-5.png',
      width: 100
    },

    {
      url: 'http://113.106.108.93:36200/api/files/B0118/download/2022/09-30/352022070028655/352022070028655-030101-279923601-1.png',
      width: 100
    },

    {
      url: 'http://113.106.108.93:36200/api/files/B0118/download/2022/09-29/322022090041996/322022090041996-030105-286540258-1.png',
      width: 100
    },

    {
      url: 'http://113.106.108.93:36200/api/files/B0118/download/2022/09-20/522022090042294/522022090042294-030105-286570811-1.png',
      width: 100
    },

    {
      url: 'http://113.106.108.93:38800/api/files/B0108/download/2022/09-20/00083000202209140900162/001576799668903/001576799668903904001.png',
      width: 100
    },

    {
      url: 'http://113.106.108.93:36200/api/files/B0118/download/2022/09-20/522022090042294/522022090042294-030105-286570814-4.png',
      width: 100
    }
  ]

  export default {
    name: 'ZDemoDrawingBoard',

    data() {
      return {
        dialog: false,
        images,
        // src: require('../../../../public/images/global/6.png')
        src: 'http://113.106.108.93:38800/api/files/B0108/download/2022/09-20/00083000202209140900162/001576799668903/001576799668903904001.png'
      }
    },

    mounted() {
      document.addEventListener('keyup', (event) => {
        console.log(event.key)

        switch (event.key) {
          case 'ArrowUp':
            this.$refs.board.eventMoveTop()
            break;

          case 'ArrowRight':
            this.$refs.board.eventMoveRight()
            break;

          case 'ArrowDown':
            this.$refs.board.eventMoveBottom()
            break;

          case 'ArrowLeft':
            this.$refs.board.eventMoveLeft()
            break;

          // case 'Backspace':
          case 'Delete':
            this.$refs.board.clearActivatedCtx()
            break;
        }
      })
    },

    methods: {
      handleClick(image) {
        this.src = image.url
      },

      handleLoad() {
        console.log('load')
      },

      handleCut(area) {
        console.log(area)
      },

      handleDirection(direction) {
        console.log(direction)
      },

      handleZoom(scale) {
        console.log(scale)
      },

      handleDone(file) {
        console.log(file)
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-demo-drawing-board {
    height: 600px;
  }
</style>