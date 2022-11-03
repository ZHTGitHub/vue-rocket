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
      :detail="detail"
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
          items: cells.countryItems
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
          items: cells.areaItems
        },

        gender: {
          items: cells.genderItems
        },

        hobby: {
          items: cells.hobbyItems
        },

        vision: {
          items: cells.visionItems
        }
      }"
      :confirmProps="{
        visible: false
      }"
      @change:avatar="handleUploadChange"
      @change:file="handleFileChange"
      @cancel="handleCancel"
      @confirm="handleConfirm"
      @close="handleClose"
      @enter:name="handleNameEnter"
      @search:country="handleCountrySearch"
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
        detail: {
          avatar: [
            { url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }
          ],
          file: [
            { 
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', 
              label: '文件链接' 
            }
          ],
          name: 'Leslie', 
          phone: '17520256802',
          // country: 1,
          birthday: '2021-09-20',
          area: 2,
          gender: false,
          hobby: null,
          sexual: 2 
        }
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onOpen() {
        this.$refs.dynamic.open({ status: -1 })
      },

      handleUploadChange({ loadEvent }) {
        this.detail = { ...this.detail, avatar: [{ url: loadEvent.target.result}] }
      },

      handleFileChange(file) {
        console.log(file)
        // this.detail = {
        //   ...this.detail,
        //   file: [
        //     {
        //       url: file,
        //       label: file.name
        //     }
        //   ]
        // }
      },

      handleNameEnter(event) {
        console.log(event)
      },

      handleCountrySearch(value) {
        console.log(value)
      },

      handleCancel(effect, form) {
        console.log(effect)
        console.log(form)
      },

      handleConfirm(effect, form) {
        console.log(effect)
        console.log(form)
        this.$refs.dynamic.close()
      },

      handleClose() {
        alert()
      }
    }
  }
</script>