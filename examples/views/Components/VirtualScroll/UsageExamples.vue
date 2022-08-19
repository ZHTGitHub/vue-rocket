<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-virtual-scroll 
          :height="300"
          :itemHeight="100"
          :items="items"  
        >
          <template v-slot:default="{ item }">
            <div class="list-item">
              {{ item.label }}
            </div>
          </template>
        </z-virtual-scroll>
      </div>
    </usage-demo>

    <div class="scroll" @mouseenter="handleEnter">
      <div class="loading t-loading" data-mark="tLoading">

      </div>

      <ul>
        <template v-for="(item, index) in list" >
          <li 
            :key="index"
            v-if="index > focusIndex - visibleTRange && index < focusIndex + visibleBRange"
            @click="handleClick(index)"
          >{{ item.label }}</li>
        </template>
      </ul>

      <div class="loading b-loading" data-mark="bLoading">

      </div>
    </div>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

  const code =
`
<z-virtual-scroll 
  :height="300"
  :itemHeight="100"
  :items="items"  
>
  <template v-slot:default="{ item }">
    <div class="list-item">
      {{ item.label }}
    </div>
  </template>
</z-virtual-scroll>`

  let [scroll, tLoading, bLoading] = [void 0, void 0, void 0]

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        items: [],
        list: [],
        visibleTRange: 10,
        visibleBRange: 10,
        focusIndex: 100
      }
    },

    created() {
      for(let i = 0; i < 1000; i+=1) {
        this.items.push({ label: `列表${ i + 1 }` })
      }

      for(let i = 0; i < 200; i+=1) {
        this.list.push({ label: `列表${ i }` })
      }
    },

    mounted() {
      Prism.highlightAll()

      scroll = document.querySelector('.scroll')
      tLoading = document.querySelector('.t-loading')
      bLoading = document.querySelector('.b-loading')

      scroll.scrollTop = 100
    },

    methods: {
      handleEnter() {
        console.log('enter')
        this.startObserver()
      },

      handleClick(index) {
        if(index === 100) {
          this.visibleTRange = 10
          this.visibleBRange = 10
        }
      },

      startObserver() {
        const ob = new IntersectionObserver((entries) => {
          const [entry] = entries

          const nodeValue = entry.target.attributes['data-mark'].nodeValue

          if(nodeValue === 'tLoading') {
            if(entry.isIntersecting) {
              console.log('顶部加载更多...')

              this.visibleTRange += 10

              scroll.scrollTop = 0

              // console.log(scroll.scrollTop)

              // if(scroll.scrollTop < 50) {
              // scroll.scrollTop = 10 * 42

              // }
            }
            else {
              console.log('顶部加载更少...')
            }
          }
          else {
            if(entry.isIntersecting) {
              console.log('底部加载更多...')

              this.visibleBRange += 10
            }
            else {
              console.log('底部加载更少...')
            }
          }

        }, {
          root: scroll,
          threshold: 0
        })

        ob.observe(tLoading)
        ob.observe(bLoading)
      }
    }
  }
</script>

<style lang="scss">
  .list-item {
    color: #555;
    box-sizing: border-box;
    border-bottom: 1px solid #999;
  }

  .scroll {
    height: 300px;
    margin-bottom: 24px;
    border: 1px solid rgba(0, 0, 0, .2);
    overflow-y: auto;

    ul {
      li {
        height: 42px;
        line-height: 42px;
        text-align: center;

        &:nth-child(even) {
          background-color: #f0f0f0;
        }
      }
    }

    .loading {
      margin: 0 auto;
      width: 50px;
      height: 50px;
      background-color: #f0f0f0;
    }
  }
</style>