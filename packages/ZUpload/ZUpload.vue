<template>
  <div class="z-upload z-input">
    <div class="z-flex z-upload-wrapper">
      <div class="z-flex z-upload-list" :class="flip ? 'flex-row-reverse' : 'flex-row'">
        <div 
          v-for="(image, index) of images"
          :key="index"
          class="z-upload-list-image-container"
        >
          <div class="z-upload-list-item">
              <div class="z-upload-list-item-info">
                <span>
                  <img 
                    class="z-upload-list-item-img"
                    :src="image.url" 
                  >
                </span>
              </div>

              <span class="z-upload-list-item-actions">
                <v-icon 
                  class="mr-2" 
                  color="#ffffffd9" 
                  small
                  @click="onPreview(image)"
                >mdi-eye-outline</v-icon>

                <v-icon 
                  color="#ffffffd9" 
                  small
                  @click="onDelete(index, image)"
                >mdi-trash-can-outline</v-icon>
              </span>
          </div>
        </div>

        <div 
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
              accept 
              :disabled="disabled"
              ref="zUploadInput"
              type="file" 
              @change="readFile"
            >

            <div class="slot">
              <slot>
                <v-icon>mdi-plus</v-icon>
              </slot>
            </div>
          </span>
        </div>
      </div>
    </div>

    <div class="error--text z-messages">{{ errorMessage }}</div>

    <preview-dialog 
      ref="previewDialog"
      :targetImage="targetImage"
    ></preview-dialog>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'
  import tools from '../scripts/tools'
  import previewDialog from './previewDialog'

  const targetFileInfo = {
    lastModified: undefined,
    name: '',
    size: 0,
    type: '',
    url: ''
  }

  export default {
    name: 'ZUpload',
    mixins: [FormMixins, FormValidationMixins],

    props: {
      action: {
        type: String,
        required: true
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
        default: () => {}
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
      }
    },
    
    data() {
      return {
        targetFile: null,
        targetFileInfo: targetFileInfo,
        images: [],
        targetImage: {},

        hoverStyle: {}
      }
    },

    methods: {
      onChoice() {
        this.$refs.zUploadInput.dispatchEvent(new MouseEvent('click'))
      },

      // 读取
      readFile(event) {
        this.targetFile = event.target.files[0]

        // console.log(this.targetFile)

        const fileReader = new FileReader()

        fileReader.readAsDataURL(this.targetFile)

        fileReader.addEventListener('load', (event) => {
          const { error, result } = event.target

          if(error == null) {

            this.uploadFile()

            const { lastModified, name, size, type } = this.targetFile

            this.targetFileInfo = {
              lastModified,
              name,
              size,
              type,
              url: result
            }

            if(!tools.isArray(this.images)) {
              this.images = []
            }

            this.images.unshift(this.targetFileInfo)

            this.value = this.images

            // console.log(this.value)

            this.$emit('change', this.images)
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
        this.images.splice(index, 1)
      },

      // 上传
      async uploadFile() {
        const result = await this._request()

        this.targetFileInfo.response = result

        this.$emit('response', result)
      },

      // 请求
      _request() {
        const formData = new FormData()
        formData.append(this.name, this.targetFile)

        return fetch(this.action, {
          headers: this.headers,
          method: this.method,
          body: formData
        })
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          this.$emit('response', {
            ...response,
          })
        })
        .catch((error) => {
          this.$emit('response', {
            ...error,
          })
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
      },
    },

    watch: {
      defaultValue: {
        handler(value) {
          this.images = value
        },
        immediate: true
      },

      images: {
        handler(images) {
          if(tools.isYummy(images)) {
            this.value = images
          }else {
            this.value = undefined
          }
          this.verifyField()
        },
        immediate: true
      },

      value: {
        handler(value) {
          if(value) {
            this.images = value
          }else {
            this.images = []
          }
        },
        immediate: true
      }
    },

    components: {
      previewDialog
    }
  }
</script>

<style lang="scss">
  .z-upload {
    .z-upload-wrapper {
      display: inline-block;
      width: 100%;
      padding-top: 12px;
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
            /* margin: 0 8px 8px 0; */
            border: 1px solid #d9d9d9;
            border-radius: 4px;

            &:hover .z-upload-list-item-info:before {
              opacity: 1;
            }

            &:hover .z-upload-list-item-info+.z-upload-list-item-actions {
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
                position: absolute;
                z-index: 1;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .5);
                opacity: 0;
                transition: all .3s;
                content: " ";
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

          /* .z-upload-text {
            color: #333;
            font-size: 14px;
          } */
        }
      }
    }
  }
</style>