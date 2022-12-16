<template>
  <div class="z-upload z-input">
    <div class="z-flex pt-3">
      <div v-if="$slots.prepend" class="prepend">
        <slot name="prepend"></slot>
      </div>

      <div>
        <div class="z-flex z-upload-wrapper">
          <div class="z-flex z-upload-list" :class="flip ? 'flex-row-reverse' : 'flex-row'">
            <!-- 缩略图 BEGIN -->
            <div 
              v-for="(image, index) of value"
              :key="index"
              class="z-upload-list-image-container"
            >
              <div :class="[
                'z-upload-list-item', 
                chink && 'chink',
                { hovered: !disabled && (showPreviewIcon || showDeleteIcon) }
              ]">
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

                <div 
                  class="preview-delete"
                  @click="onDelete(index, image)"
                >
                  <v-icon color="#fff" size="12">mdi-close</v-icon>
                </div>
              </div>
            </div>
            <!-- 缩略图 END -->

            <!-- 上传 BEGIN -->
            <div 
              v-if="!showOnly && (!maxCount || (value && value.length < maxCount))"
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
                  :accept="accept" 
                  :disabled="disabled"
                  :multiple="multiple"
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
            <!-- 上传 END -->
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
  import previewDialog from './previewDialog'
  import request from './request'
  import compressImage from '../scripts/utils/tools/compressImage'

  export default {
    name: 'ZUpload',
    mixins: [FormMixins, FormValidationMixins],

    props: {
      accept: {
        type: String,
        default: 'image/*'
      },

      action: {
        type: String,
        required: false
      },

      autoUpload: {
        type: Boolean,
        default: true
      },

      chink: {
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

      effectData: {
        type: Object,
        required: false
      },

      flip: {
        type: Boolean,
        default: false
      },

      headers: {
        type: Object,
        required: false
      },

      maxCount: {
        type: [Number, String],
        required: false
      },

      maxSize: {
        type: [Number, String],
        required: false
      },

      method: {
        validator(value) {
          return ~['get', 'post'].indexOf(value)
        },
        default: 'post'
      },

      multiple: {
        type: Boolean,
        default: false
      },

      name: {
        type: String,
        default: 'file'
      },

      parcel: {
        type: Boolean,
        default: false
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
        files: [],
        file: null,
        targetImage: {},

        hoverStyle: {},

        formData: null
      }
    },

    methods: {
      onChoice() {
        this.$refs.input.dispatchEvent(new MouseEvent('click'))
      },

      // 读取
      async onReadImage(event) {
        const maxSize = +this.maxSize
        const files = []

        for(let file of event.target.files) {
          files.push(file)
        }

        this.$emit('change', { files, maxSize })

        if(this.autoUpload) {
          this.formData = new FormData()
          
          // 多选
          if(this.multiple) {
            // 所有文件一起上传
            if(this.parcel) {
              for(let item of files) {
                this.formData.append(this.name, item)
              }
              this.uploadFile()
            }
            // 单个文件单个文件上传
            else {
              for(let item of files) {
                this.formData.set(this.name, item)
                await this.uploadFile()
              }
            }

            // 记录当前上传的文件
            this.files = files
          }
          // 单选
          else {
            const file = files[0]
            this.formData.append(this.name, file)

            this.uploadFile()

            // 记录当前上传的文件
            this.files = [file]
          }
        }
      },

      // 预览
      onPreview(item) {
        this.targetImage = item
        this.$refs.previewDialog.toggle()
      },

      // 删除
      onDelete(index, item) {
        this.targetImage = item
        // this.value.splice(index, 1)
        this.$emit('delete', { thumb: item, thumbIndex: index })
      },

      // 上传
      async uploadFile() {
        const maxSize = +this.maxSize
        this.$emit('response', { maxSize, progress: 0 })

        const allFiles = this.formData.getAll(this.name)

        for(let file of allFiles) {
          const size = file.size / 1024

          if(maxSize && size > maxSize) {
            this.$emit('response', { file, maxSize, progress: 0 })
            return
          }
        }

        if(this.effectData) {
          for(let key in this.effectData) {
            this.formData.set(key, this.effectData[key])
          }
        }

        const files = this.formData.get(this.name)

        if(!files) {
          return
        }

        const result = await request({
          action: this.action,
          headers: this.headers,
          method: this.method,
          body: this.formData
        })

        this.errorMessage = ''
        this.incorrect = false
        this.$refs.input.value = null

        this.$emit('response', {
          files: this.files,
          maxSize,
          progress: 1,
          result
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
      /* margin-bottom: 8px; */

      .z-upload-list {
        box-sizing: border-box;
        flex-wrap: wrap;

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
            border: 1px solid #d9d9d9;
            border-radius: 4px;

            &.chink {
              padding: 8px;
            }

            &.hovered:hover .z-upload-list-item-info:before {
              opacity: 1;
            }

            &.hovered:hover .z-upload-list-item-info+.z-upload-list-item-actions {
              opacity: 1;
            }

            .preview-delete {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              top: 0;
              right: 0;
              width: 14px;
              height: 14px;
              border-radius: 0 0 0 12px;
              background-color: rgba(0, 0, 0, 0.7);
              z-index: 1;
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

    .z-messages {
      margin-top: 8px;
    }
  }
</style>