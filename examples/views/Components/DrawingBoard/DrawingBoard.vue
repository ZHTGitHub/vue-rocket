<template>
  <div class="z-demo-drawing-board">
    <z-drawing-board 
      ref="board" 
      direction="top"
      :src="src"
      :shotArea="{
        x: 100,
        y: 100,
        width: 300,
        height: 300
      }"
    ></z-drawing-board>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoDrawingBoard',

    data() {
      return {
        src: require('../../../../public/images/global/6.png')
        // src: 'http://113.106.108.93:38800/api/files/B0108/download/2022/09-20/00083000202209140900162/001576799668903/001576799668903904001.png'
      }
    },

    mounted() {
      document.addEventListener('keyup', (event) => {
        console.log(event.key)

        switch (event.key) {
          case 'ArrowUp':
            this.$refs.board.moveTop()
            break;

          case 'ArrowRight':
            this.$refs.board.moveRight()
            break;

          case 'ArrowDown':
            this.$refs.board.moveBottom()
            break;

          case 'ArrowLeft':
            this.$refs.board.moveLeft()
            break;

          // case 'Backspace':
          case 'Delete':
            this.$refs.board.clearActivatedCtx()
            break;
        }
      })
    },

    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .z-demo-drawing-board {
    height: 600px;
  }
</style>