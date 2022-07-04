<template>
  <div class="demo-padding">
    <typing-title :title="$route.meta.title"></typing-title>

    <div class="box">
      <div class="px-4 mb-1 row">
        <div class="z-flex col-12">
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

        <div class="z-flex col-12">
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

      <div class="bg-orange light m-box">
        <div :class="`m${ marginDirection }-${ marginSize }`">
          <div :class="['bg-green light text-black elevation-4 p-box', `p${ paddingDirection }-${ paddingSize }`]">
            <div class="pa-6 bg-white text-center">
              橙色为外边距效果 绿色为内边距效果
            </div>
          </div>
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
          ...defaults,
          { value: 'n1', label: 'n1' },
          { value: 'n2', label: 'n2' },
          { value: 'n3', label: 'n3' },
          { value: 'n4', label: 'n4' },
          { value: 'n5', label: 'n5' },
          { value: 'n6', label: 'n6' },
          { value: 'n7', label: 'n7' },
          { value: 'n8', label: 'n8' },
          { value: 'n9', label: 'n9' },
          { value: 'n10', label: 'n10' },
          { value: 'n11', label: 'n11' },
          { value: 'n12', label: 'n12' },
          { value: 'n13', label: 'n13' },
          { value: 'n14', label: 'n14' },
          { value: 'n15', label: 'n15' },
          { value: 'n16', label: 'n16' }
        ],

        paddingDirection: 'a',
        paddingSize: 6,

        marginDirection: 'a',
        marginSize: 3
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
  .box {
    width: 960px;
    padding: 16px;
    margin: 0 auto;
    border: thin solid rgba(0, 0, 0, .12);

    .m-box {
      border: 1px solid #fff;
    }
  }
</style>  