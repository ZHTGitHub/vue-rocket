<template>
  <div class="top-bar">
    <div class="bar">
      <v-tooltip 
        v-for="item in topBarList"
        :key="item.value"
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <span 
            :class="[
              'icon', 
              item.icon, 
              item.value === 'cut' ? (isCut && 'active') : void 0,
              item.value === 'rect' ? (isRect && 'active') : void 0,
              item.value === 'text' ? (isText && 'active') : void 0,
              item.value === 'link' && 'link'
            ]" 
            v-bind="attrs"
            v-on="on"
            @click="handleEvent(item.value)"
          ></span>
        </template>

        <span>{{ item.text }}</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
  import tools from '../../libs/tools'
  import { topBarList } from './cells'

  export default {
    name: 'TopBar',

    props: {
      isCut: {
        type: Boolean,
        default: false
      },

      isRect: {
        type: Boolean,
        default: false
      },

      isText: {
        type: Boolean,
        default: false
      },

      src: {
        type: String,
        required: false
      }
    },

    data() {
      return {
        topBarList
      }
    },

    methods: {
      handleEvent(eventName) {
        // 查看原图
        if(eventName === 'link') {
          window.open(this.src)
        }

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

    .bar {
      display: flex;
      align-items: center;
      position: relative;
      height: 28px;
      margin: 4px 16px;
    }
  }

  .icon {
    margin-right: 16px;
    color: #fff;
    font-size: 18px;
    opacity: .8;

    &.link {
      position: absolute;
      right: 0;
    }

    &.active {
      color: #39b54a;
    }

    &.icon-clear {
      color: #ff5252;
    }

    &.icon-done {
      color: #39b54a;
    }

    &:hover {
      opacity: 1;
    }

    &:active {
      color: #39b54a;
    }

    &.icon-clear:active {
      color: #ff5252;
    }

    &:last-child {
      margin-right: 0;
    }
  }
</style>