<template>
  <div class="z-demo-drawing-board">
    <z-drawing-board :src="src"></z-drawing-board>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoDrawingBoard',

    data() {
      return {
        src: 'http://localhost:8899/img/3.99be759c.jpg'
      }
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