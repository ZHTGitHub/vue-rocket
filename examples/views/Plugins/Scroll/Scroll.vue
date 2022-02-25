<template>
  <div class="scroll">
    <div class="scroll" id="scroll">
      <ul class="items">
        <template v-for="(item, index) in list" >
          <li 
            v-if="scrollTop - item.offsetTop <= 200"
            :key="index"
            :ref="`item_${ index }`"
            :id="`item_${ index }`"
            class="item"
          >{{ item.label }}</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Scroll',

    data() {
      return {
        list: [ 
          { label: 'A', offsetTop: 0 },
          { label: 'B', offsetTop: 0 },
          { label: 'C', offsetTop: 0 },
          { label: 'D', offsetTop: 0 },
          { label: 'E', offsetTop: 0 },
          { label: 'F', offsetTop: 0 },
          { label: 'G', offsetTop: 0 },
          { label: 'H', offsetTop: 0 },
          { label: 'I', offsetTop: 0 },
          { label: 'J', offsetTop: 0 },
          { label: 'K', offsetTop: 0 },
          { label: 'L', offsetTop: 0 },
          { label: 'M', offsetTop: 0 },
          { label: 'N', offsetTop: 0 },
          { label: 'O', offsetTop: 0 },
        ],
        scrollTop: 0
      }
    },

    created() {
      for(let i = 0; i < 10000; i++) {
        this.list.push({ label: i, offsetTop: 0 })
      }
    },

    // mounted() {
    //   const scroll = document.getElementById('scroll')

    //   scroll.addEventListener('scroll', () => {
    //     this.scrollTop = scroll.scrollTop
    //   })
    // },

    // methods: {
    //   getOffsetTop(index) {
    //     this.$nextTick(() => {
    //       const item = document.getElementById(`item_${ index }`)
    //       this.list[index].offsetTop = item.offsetTop
    //     })
    //   }
    // }
  }
</script>

<style lang="scss">
  .scroll {
    position: relative;
    margin: 0 auto;
    width: 200px;
    height: 800px;
    border: 1px solid #000;
  }

  .scroller {
    height: 100%;
  }

  li.item {
    width: 100%;
    height: 100px;
    /* line-height: 100px; */
    margin-bottom: 16px;
    /* text-align: center; */

    border: 1px solid green;

    /* &:nth-child(even) {
      background-color: red;
    }

    &:nth-child(odd) {
      background-color: green;
    } */
  }
</style>