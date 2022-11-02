<template>
  <div class="z-demo-drawing-board">
    <z-drawing-board 
      ref="board" 
      col-align="start"
      name="leslie"
      shot
      direction="TOP"
      download
      :imageCompress="0.2"
      :min-zoom-out="0.5"
      :proportion=".75"
      row-align="center"
      :size="size"
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
      width: 100,
      size: 1024
    },

    {
      url: 'http://113.106.108.93:36200/api/files/B0118/download/2022/09-30/352022070028655/352022070028655-030101-279923601-1.png',
      width: 100,
      size: 2000
    },

    {
      url: 'http://113.106.108.93:36200/api/files/B0118/download/2022/09-29/322022090041996/322022090041996-030105-286540258-1.png',
      width: 100,
      size: 900
    },

    {
      url: 'http://113.106.108.93:36200/api/files/B0118/download/2022/09-20/522022090042294/522022090042294-030105-286570811-1.png',
      width: 100,
      size: 500
    },

    {
      url: 'http://113.106.108.93:38800/api/files/B0108/download/2022/09-20/00083000202209140900162/001576799668903/001576799668903904001.png',
      width: 100,
      size: 466
    },

    {
      url: 'http://113.106.108.93:36200/api/files/B0118/download/2022/09-20/522022090042294/522022090042294-030105-286570814-4.png',
      width: 100,
      size: 1566
    }
  ]

  export default {
    name: 'ZDemoDrawingBoard',

    data() {
      return {
        dialog: false,
        images,
        size: 0,
        // src: require('../../../../public/images/global/6.png')
        src: 'http://www.i-confluence.com:13001/api/files/B0118/download/2022/09-30/372022080038223/372022080038223-030105-286014698-5.png'
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
        this.size = image.size
        this.src = image.url
      },

      handleLoad({ status }) {
        console.log(status)
      },

      handleCut(area) {
        console.log(area)
      },

      handleDirection(direction, manual) {
        console.log({ manual, direction })
      },

      handleZoom(scale) {
        console.log(scale)
      },

      handleDone({ file, modified }) {
        console.log({ file, modified })
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-demo-drawing-board {
    height: 600px;
  }
</style>