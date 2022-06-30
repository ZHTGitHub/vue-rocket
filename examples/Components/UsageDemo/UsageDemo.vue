<template>
  <div class="mb-9 z-example">
      <v-sheet
        :height="sheetHeight"
      >
        <div>
          <div class="z-lazy">
            <div class="pa-2 text-end">
              <z-btn icon @click="onToggle">
                <v-icon>
                  mdi-xml
                </v-icon>
              </z-btn>
            </div>
          </div>

          <div class="px-2 z-code" :style="{ height: expanded ? 'auto' : 0 }">
            <pre class="language-markup pre"><code class="language-markup code">{{ code }}</code></pre>
          </div>
        </div>
      </v-sheet>
      <div class="pa-4 z-demo">
        <slot name="demo"></slot>
      </div>
    </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism.css'

  export default {
    name: 'UsageDemo',
    props: {
      code: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        sheetHeight: 52,
        expanded: false
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onToggle() {
        this.expanded = !this.expanded
        this.sheetHeight = this.expanded ? 'auto' : 52

        console.log(this.$slots.demo)
      }
    }
  }
</script>

<style lang="scss">
  .z-example {
    border: thin solid rgba(0,0,0,.12);

    pre.pre {
      padding: 1em !important;
    }

    code.code {

    }

    .line-numbers-rows {
      left: -6.8em;
    }
  }

  .z-lazy {
    min-height: 52px;
  }

  .z-code {
    border-top: thin solid rgba(0,0,0,.12);
    overflow: hidden;
  }

  .z-demo {
    min-height: 76px;
    border-top: thin solid rgba(0,0,0,.12);
  }
</style>