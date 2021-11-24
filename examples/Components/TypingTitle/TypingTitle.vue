<template>
  <div class="title">
    <h1 
      class="typing-title"
      :style="{ width: `${ width }px` }"
    >
      {{ title }}
    </h1>

    <h1 id="staticTitle" class="static-title">{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'TypingTitle',
    
    props: {
      title: {
        type: String,
        required: false
      }
    },

    data() {
      return {
        width: 0
      }
    },

    mounted() {
      this.setWidth()
    },

    methods: {
      setWidth() {
        const staticTitle = document.getElementById('staticTitle')
        this.width = staticTitle.offsetWidth + 5
      }
    }
  }
</script>

<style scoped lang="scss">
  .title {
    position: relative;
    line-height: 42px;

    h1.typing-title {
      width: 10ch;
      margin-bottom: 32px;
      border-right: 3px solid #333;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      animation: typing 3s steps(25, end), cursor-blink .5s step-end infinite alternate;
    }

    h1.static-title {
      position: absolute;
      top: 0;
      left: 0;
      font-weight: 500;
      opacity: 0;
      z-index: -1;
    }

    @keyframes typing {
      from {
        width: 0;
      }
    }

    @keyframes cursor-blink {
      50% {
        border-color: transparent;
      }
    }
  }
</style>