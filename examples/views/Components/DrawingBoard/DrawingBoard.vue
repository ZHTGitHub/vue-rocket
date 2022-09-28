<template>
  <div class="z-demo-drawing-board">
    <z-drawing-board ref="board" :src="src"></z-drawing-board>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoDrawingBoard',

    data() {
      return {
        src: require('../../../../public/images/global/1.jpg')
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