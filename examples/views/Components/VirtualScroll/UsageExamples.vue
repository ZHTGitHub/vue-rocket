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

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        items: []
      }
    },

    created() {
      for(let i = 0; i < 1000; i+=1) {
        this.items.push({ label: `列表${ i + 1 }` })
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>

<style lang="scss">
  .list-item {
    color: #555;
    box-sizing: border-box;
    border-bottom: 1px solid #999;
  }
</style>