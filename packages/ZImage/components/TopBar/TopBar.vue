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
  @import "../../../ZDrawingBoard/icons/iconfont.css";

  .top-bar {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, .1);
    z-index: 1;

    .bar {
      display: flex;
      align-items: center;
      justify-content: flex-end;
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

  .icon:hover {
    opacity: 1;
  }

  .icon:active {
    color: #39b54a;
  }

  .icon:last-child {
    margin-right: 0;
  }
</style>