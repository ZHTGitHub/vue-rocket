<template>
  <div class="usage-examples">
    <usage-demo :code="cells.dynamicFormCode">
      <div slot="demo">
        <z-btn
          class="mb-8"
          color="primary"
          outlined
          small
          :lockedTime="0"
          @click="onOpen"
        >
          open
        </z-btn>
      </div>
    </usage-demo>

    <z-dynamic-form
      ref="dynamic" 
      formId="dynamic"
      title="动态表单"
      :fieldList="cells.fields"
      :detail="{ 
        avatar: [
          { url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }
        ],
        name: 'ZHT', 
        sexual: 2 
      }"
      :config="{
        name: {
          mutex: [
            {
              formKey: 'phone',
              always: false,
              includes: ['Leslie'],
              excludes: []
            },

            {
              formKey: 'country',
              always: false,
              includes: ['zenghaitao'],
              excludes: []
            }
          ]
        },

        country: {
          mutex: [
            {
              formKey: 'area',
              always: false,
              includes: [],
              excludes: [2]
            }
          ],
          items: countryItems
        },

        area: {
          mutex: [
            {
              formKey: 'country',
              always: true,
              includes: [],
              excludes: []
            }
          ],
          items: areaItems
        },

        gender: {
          items: genderItems
        },

        hobby: {
          items: hobbyItems
        },

        vision: {
          items: visionItems
        }
      }"
      @change:upload="handleUploadChange"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
    </z-dynamic-form>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import cells from './cells'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        cells,
        code: '',
        countryItems: [
          { label: '中国', value: 1 },
          { label: '美国', value: 2 },
          { label: '日本', value: 3 }
        ],

        areaItems: [
          { label: '广州', value: 1 },
          { label: '深圳', value: 2 },
          { label: '珠海', value: 3 }
        ],

        genderItems: [
          { label: '男性', value: 1 },
          { label: '女性', value: 2 }
        ],

        hobbyItems: [
          { label: '游泳', value: 1 },
          { label: '乒乓球', value: 2 },
          { label: '羽毛球', value: 3 }
        ],

        visionItems: [
          { label: '正常', value: 1 },
          { label: '近视', value: 2 },
          { label: '远视', value: 3 }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onOpen() {
        this.$refs.dynamic.open({ status: -1 })
      },

      handleUploadChange(info) {
        console.log(info)
      },

      handleCancel(effect, form) {
        console.log(effect)
        console.log(form)
      },

      handleConfirm(effect, form) {
        console.log(effect)
        console.log(form)
        this.$refs.dynamic.close()
      }
    }
  }
</script>