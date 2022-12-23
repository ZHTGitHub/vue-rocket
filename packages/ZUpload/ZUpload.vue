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
              class="thumb-list"
            >
              <div 
                :class="[
                  chink && 'chink', 
                  image.upload === false && 'upload-failed',
                  image.upload && 'uploaded',
                  'thumb'
                ]"
              >
                <div class="image-box">
                  <img :src="image.url" />
                </div>

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
              class="select-box"
            >
              <span 
                class="input-box" 
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
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'
  import request from './request'

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

      showOnly: {
        type: Boolean,
        default: false
      }
    },
    
    data() {
      return {
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
              await this.uploadFile()
            }
            // 单个文件依次上传
            else {
              for(let item of files) {
                this.formData.set(this.name, item)
                await this.uploadFile()
              }
            }
          }
          // 单选
          else {
            const file = files[0]
            this.formData.append(this.name, file)

            await this.uploadFile()
          }
        }

        this.$refs.input.value = ''
      },

      // 删除
      onDelete(index, item) {
        // this.value.splice(index, 1)
        this.$emit('delete', { thumb: item, thumbIndex: index })
      },

      // 上传文件
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
        // this.$refs.input.value = ''

        this.$emit('response', {
          maxSize,
          progress: 1,
          result
        })
      }
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
          .thumb-list {
            margin: 0 8px 8px 0;
          }
        }

        /* 翻转后 */
        &.flex-row-reverse {
          .thumb-list {
            margin: 0 0 8px 8px;
          }
        }

        .thumb-list {
          float: left;
          width: 104px;
          height: 104px;

          .thumb {
            position: relative;
            width: 104px;
            height: 104px;
            border: 1px solid #d9d9d9;
            border-radius: 4px;

            &.chink {
              padding: 8px;
            }

            /* 上载失败 */
            &.upload-failed {
              border-color: #ff5252;

              .preview-delete {
                background-color: #ff5252;
              }
            }

            /* 已上载 */
            &.uploaded {
              border-color: #4caf50;

              .preview-delete {
                background-color: #4caf50;
              }
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

            .image-box {
              position: relative;
              height: 100%;
              overflow: hidden;

              img {
                position: static;
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }

      .select-box {
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

        .input-box {
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