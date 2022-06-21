<template>
  <div class="demo-padding">
    <typing-title :title="$route.meta.title"></typing-title>

    <div class="z-row">
      <div class="z-flex z-col-12">
        <z-select
          :formId="formId"
          formKey="paddingDirection"
          class="pr-2"
          :options="directions"
          :defaultValue="paddingDirection"
          @change="onSelect"
        >
          <template v-slot:prepend-outer>
            <strong class="primary--text py-1">p</strong>
          </template>

          <template v-slot:append-outer>
            <div class="py-1">-</div>
          </template>
        </z-select>

        <z-select
          :formId="formId"
          formKey="paddingSize"
          :options="paddingSizes"
          :defaultValue="paddingSize"
          @change="onSelect"
        >
        </z-select>
      </div>  

      <div class="z-flex z-col-12">
        <z-select
          :formId="formId"
          formKey="marginDirection"
          class="pr-2"
          :options="directions"
          :defaultValue="marginDirection"
          @change="onSelect"
        >
          <template v-slot:prepend-outer>
            <strong class="primary--text py-1">m</strong>
          </template>

          <template v-slot:append-outer>
            <div class="py-1">-</div>
          </template>
        </z-select>

        <z-select
          :formId="formId"
          formKey="marginSize"
          :options="marginSizes"
          :defaultValue="marginSize"
          @change="onSelect"
        >
        </z-select>
      </div>  
    </div>

    <div class="bg-red margin">
      <div 
        class="bg-green text-black" 
        :class="[`p${ paddingDirection }-${ paddingSize }`, `m${ marginDirection }-${ marginSize }`]"
      >
        <div class="bg-white text-center">
          红色为外边距效果 绿色为内边距效果
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cells from './cells'
  import { mapState } from 'vuex'

  export default {
    name: 'DemoStylePadding',
    data() {
      const defaults = [
        { value: 0, label: 0 },
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
        { value: 6, label: 6 },
        { value: 7, label: 7 },
        { value: 8, label: 8 },
        { value: 9, label: 9 },
        { value: 10, label: 10 },
        { value: 11, label: 11 },
        { value: 12, label: 12 },
        { value: 13, label: 13 },
        { value: 14, label: 14 },
        { value: 15, label: 15 },
        { value: 16, label: 16 }
      ]

      return {
        cells,
        formId: 'spacing',
        directions: [
          { value: 't', label: 't' },
          { value: 'b', label: 'b' },
          { value: 'l', label: 'l' },
          { value: 'r', label: 'r' },
          { value: 'x', label: 'x' },
          { value: 'y', label: 'y' },
          { value: 'a', label: 'a' }
        ],
        paddingSizes: defaults,
        marginSizes: [
          { value: 'auto', label: 'auto' },
          ...defaults
        ],

        paddingDirection: 'a',
        paddingSize: 2,

        marginDirection: 'a',
        marginSize: 2
      }
    },

    created() {
      console.log(this.padding)
    },

    methods: {
      onSelect() {
        const form = this.forms[this.formId]

        this.paddingDirection = form.paddingDirection
        this.paddingSize = form.paddingSize

        this.marginDirection = form.marginDirection
        this.marginSize = form.marginSize

      }
    },

    computed: {
      ...mapState(['forms'])
    }
  }
</script>

<style scoped lang="scss">
  .margin {
    overflow: hidden;
  }
</style>