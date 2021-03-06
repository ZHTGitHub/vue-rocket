<template>
  <div class="z-upload z-input">
    <div class="z-flex pt-3">
      <div v-if="$slots.prepend" class="prepend">
        <slot name="prepend"></slot>
      </div>

      <div>
        <div class="z-flex z-upload-wrapper">
          <div class="z-flex z-upload-list" :class="flip ? 'flex-row-reverse' : 'flex-row'">
            <div 
              v-for="(image, index) of value"
              :key="index"
              class="z-upload-list-image-container"
            >
              <div :class="['z-upload-list-item', { hovered: !disabled && (showPreviewIcon || showDeleteIcon) }]">
                <div class="z-upload-list-item-info">
                  <span>
                    <img class="z-upload-list-item-img" :src="image.url" />
                  </span>
                </div>

                <span 
                  v-if="!disabled && (showPreviewIcon || showDeleteIcon)"
                  class="z-upload-list-item-actions"
                >
                  <v-icon 
                    v-if="showPreviewIcon"
                    class="mr-2" 
                    color="#ffffffd9" 
                    small
                    @click="onPreview(image)"
                  >mdi-eye-outline</v-icon>

                  <v-icon 
                    v-if="!showOnly && showDeleteIcon"
                    color="#ffffffd9" 
                    small
                    @click="onDelete(index, image)"
                  >mdi-trash-can-outline</v-icon>
                </span>
              </div>
            </div>

            <div 
              v-if="!showOnly && (!limit || (value && value.length < limit))"
              class="z-upload-select"
              :style="hoverStyle"
              @mouseenter="onMouseenter"
              @mouseleave="onMouseleave"
            >
              <span 
                class="z-upload" 
                @click="onChoice"
              >
                <input 
                  ref="input"
                  type="file" 
                  accept="image/*" 
                  :disabled="disabled"
                  @change="onReadImage"
                >

                <div class="slot">
                  <slot>
                    <v-icon>mdi-plus</v-icon>
                    <div class="text-medium">Upload</div>
                  </slot>
                </div>
              </span>
            </div>
          </div>
        </div>

        <div class="error--text z-messages">{{ errorMessage }}</div>
      </div>
    </div>

    <preview-dialog 
      ref="previewDialog"
      :targetImage="targetImage"
    ></preview-dialog>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'
  import { tools } from '../scripts/utils'
  import previewDialog from './previewDialog'

  export default {
    name: 'ZUpload',
    mixins: [FormMixins, FormValidationMixins],

    props: {
      action: {
        type: String,
        required: false
      },

      autoUpload: {
        type: Boolean,
        default: true
      },

      color: {
        type: String,
        default: '#1976d2'
      },

      disabled: {
        type: Boolean,
        default: false
      },

      flip: {
        type: Boolean,
        default: false
      },

      headers: {
        type: Object,
        required: false
      },

      limit: {
        type: [Number, String],
        required: false
      },

      method: {
        validator(value) {
          return ~['get', 'post'].indexOf(value)
        },
        default: 'post'
      },

      name: {
        type: String,
        default: 'file'
      },

      showDeleteIcon: {
        type: Boolean,
        default: true
      },

      showOnly: {
        type: Boolean,
        default: false
      },

      showPreviewIcon: {
        type: Boolean,
        default: true
      }
    },
    
    data() {
      return {
        file: null,
        targetImage: {},

        hoverStyle: {}
      }
    },

    methods: {
      onChoice() {
        this.$refs.input.dispatchEvent(new MouseEvent('click'))
      },

      // 读取
      onReadImage(changeEvent) {
        this.file = changeEvent.target.files[0]

        const fileReader = new FileReader()

        fileReader.readAsDataURL(this.file)

        fileReader.addEventListener('load', (loadEvent) => { 
          if(loadEvent.target?.error == null) {
            this.autoUpload && this.uploadFile()
            
            this.$emit('change', { changeEvent, loadEvent })
          }
        })
      },

      // 预览
      onPreview(item) {
        this.targetImage = item
        this.$refs.previewDialog.toggle()
      },

      // 删除
      onDelete(index, item) {
        this.targetImage = item
        this.value.splice(index, 1)
      },

      // 上传
      async uploadFile() {
        const result = await this.request()

        this.$refs.input.value = null

        this.$emit('response', result)
      },

      // 请求
      request() {
        const formData = new FormData()
        formData.append(this.name, this.file)

        return new Promise((resolve) => {
          fetch(this.action, {
            headers: this.headers,
            method: this.method,
            body: formData
          })
          .then((result) => result.json())
          .then((result) => resolve(result))
          .catch((error) => resolve(error))
        })
      },

      onMouseenter() {
        if(!this.disabled) {
          this.hoverStyle = {
            border: `1px dashed ${ this.color }`
          }
        }
      },

      onMouseleave() {
        this.hoverStyle = {
          border: `1px dashed #d9d9d9`
        }
      }
    },

    // watch: {
      // defaultValue: {
      //   handler(defaultValue) {
      //     this.values = defaultValue
      //   },
      //   immediate: true
      // },

      // values: {
      //   handler(values) {
      //     if(tools.isYummy(values)) {
      //       this.value = values
      //     }
      //     else {
      //       this.value = undefined
      //     }

      //     this.verifyField()
      //   },
      //   immediate: true
      // },

      // value: {
      //   handler(value) {
      //     if(value) {
      //       this.values = value
      //     }else {
      //       this.values = []
      //     }
      //   },
      //   immediate: true
      // }
    // },

    components: {
      previewDialog
    }
  }
</script>

<style lang="scss">
  .z-upload {
    .prepend {
      display: inline-flex;
      margin: 4px 9px 4px 0;
      font-size: 16px;
      line-height: 1;
    }

    .z-upload-wrapper {
      display: inline-block;
      width: 100%;
      margin-bottom: 8px;

      .z-upload-list {
        box-sizing: border-box;

        /* 翻转前 */
        &.flex-row {
          .z-upload-list-image-container {
            margin: 0 8px 8px 0;
          }
        }

        /* 翻转后 */
        &.flex-row-reverse {
          .z-upload-list-image-container {
            margin: 0 0 8px 8px;
          }
        }

        .z-upload-list-image-container {
          float: left;
          width: 104px;
          height: 104px;

          .z-upload-list-item {
            position: relative;
            width: 104px;
            height: 104px;
            padding: 8px;
            border: 1px solid #d9d9d9;
            border-radius: 4px;

            &.hovered:hover .z-upload-list-item-info:before {
              opacity: 1;
            }

            &.hovered:hover .z-upload-list-item-info+.z-upload-list-item-actions {
              opacity: 1;
            }

            .z-upload-list-item-info {
              position: relative;
              height: 100%;
              overflow: hidden;

              &>span {
                display: block;
                width: 100%;
                height: 100%;
              }

              &:before {
                content: " ";
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .5);
                opacity: 0;
                transition: all .3s;
                z-index: 1;
              }

              img.z-upload-list-item-img {
                position: static;
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }

            .z-upload-list-item-actions {
              position: absolute;
              top: 50%;
              left: 50%;
              z-index: 10;
              white-space: nowrap;
              transform: translate(-50%, -50%);
              opacity: 0;
              transition: all .3s;
            }
          }
        }
      }

      .z-upload-select {
        display: table;
        width: 104px;
        height: 104px;
        background-color: #fafafa;
        border: 1px dashed #d9d9d9;
        border-radius: 4px;
        cursor: pointer;
        transition: border-color .3s ease;

        &:hover {
          border: 1px dashed #1976d2;
        }

        span.z-upload {
          display: table-cell;
          width: 100%;
          height: 100%;
          padding: 8px;
          text-align: center;
          vertical-align: middle;

          input[type=file] {
            display: none;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>