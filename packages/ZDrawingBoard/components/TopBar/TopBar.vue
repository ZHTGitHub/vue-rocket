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
            :class="['icon', item.icon]" 
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
      }
    },

    data() {
      return {
        topBarList
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