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
            <slot name="code"></slot>
          </div>
        </div>
      </v-sheet>
      <div class="pa-4 z-demo">
        <slot name="demo"></slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'UsageDemo',
    data() {
      return {
        sheetHeight: 52,
        expanded: false
      }
    },

    methods: {
      onToggle() {
        this.expanded = !this.expanded
        this.sheetHeight = this.expanded ? 'auto' : 52
      }
    }
  }
</script>

<style scoped>
  .z-example {
    border: thin solid rgba(0,0,0,.12);
  }

  .z-lazy {
    min-height: 52px;
  }

  .z-code {
    border-top: thin solid rgba(0,0,0,.12);
    overflow: hidden;
  }

  .z-demo {
    border-top: thin solid rgba(0,0,0,.12);
  }
</style>