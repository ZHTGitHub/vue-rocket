<template>
  <div class="top-bar">
    <div class="bar">
      <span class="icon icon-cut" @click="handleEvent('cut')"></span>
      <span class="icon icon-rect" @click="handleEvent('rect')"></span>
      <span class="icon icon-text" @click="handleEvent('text')"></span>
      <!-- <span class="icon icon-move" @click="handleEvent('move')"></span> -->
      <span class="icon icon-zoom-out" @click="handleEvent('zoomIn')"></span>
      <span class="icon icon-zoom-in" @click="handleEvent('zoomOut')"></span>
      <span class="icon icon-rotate-right" @click="handleEvent('rotateRight')"></span>
      <span class="icon icon-rotate-left" @click="handleEvent('rotateLeft')"></span>

      <span class="icon icon-clear" @click="handleEvent('clear')"></span>
      <span class="icon icon-done" @click="handleEvent('done')"></span>
    </div>
  </div>
</template>

<script>
  import tools from '../../libs/tools'

  export default {
    name: 'TopBar',

    data() {
      return {

      }
    },

    methods: {
      handleEvent(eventName) {
        tools.debounce(() => {
          this.$emit('topBarEvent', eventName)
        }, 150)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../icons/iconfont.css";

  .top-bar {
    background-color: #282828;
    border-bottom: 1px solid #171717;
    /* overflow: hidden; */

    .bar {
      display: flex;
      align-items: center;
      height: 28px;
      margin: 4px 16px;
    }
  }

  .icon {
    margin-right: 16px;
    color: #fff;
    font-size: 18px;
    opacity: .8;
  }

  .icon.icon-clear {
    color: #ff5252;
  }

  .icon.icon-done {
    color: #39b54a;
  }

  .icon:hover {
    opacity: 1;
  }

  .icon:active {
    color: #39b54a;
  }

  .icon.icon-clear:active {
    color: #ff5252;
  }

  .icon:last-child {
    margin-right: 0;
  }
</style>