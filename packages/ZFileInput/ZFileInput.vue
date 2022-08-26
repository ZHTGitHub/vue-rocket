<template>
  <div 
    class="z-file-input z-input" 
    :style="{ 
      width: computedWidth,
      height: computedHeight
    }"
  >
    <div>
      <v-file-input
        ref="zFileInput"
        v-model="value"
        :accept="accept"
        :append-icon="appendIcon"
        :append-outer-icon="appendOuterIcon"
        autocomplete="off"
        :autofocus="autofocus"
        :chips="chips"
        :clear-icon="clearIcon"
        :clearable="clearable"
			  :color="color"
        :counter="counter"
        :dense="dense"
        :disabled="disabled"
        :error="incorrect"
        :error-messages="errorMessage"
        :filled="filled"
        :height="height"
        :hide-details="hideDetails"
        :hint="hint"
        :label="label"
        :multiple="multiple"
        :outlined="outlined"
        :persistent-hint="persistentHint"
        :persistent-placeholder="persistentPlaceholder"
        :placeholder="placeholder"
        :prepend-icon="prependOuterIcon"
        :prepend-inner-icon="prependIcon"
        :readonly="readonly"
        :reverse="reverse"
        :solo="solo"
        :suffix="suffix"
        :success="success"
        :truncate-length="truncateLength"
        type="file"
        @blur="onBlur"
        @change="onChange"
        @click="onClick"
        @click:append="onClickAppend"
        @click:append-outer="onClickAppendOuter"
        @click:clear="onClickClear"
        @click:prepend="onClickPrependOuter"
        @click:prepend-inner="onClickPrepend"
        @focus="onFocus"
        @input="onInput"
        @keydown="onKeydown"
        @keyup="onKeyup"
      >
        <!-- 文件上传框内部 文字之后 BEGIN -->
        <template v-slot:append>
          <slot name="append"></slot>
        </template>
        <!-- 文件上传框内部 文字之后 END -->

        <!-- 文件上传框外部 文字之后 BEGIN -->
        <template v-slot:append-outer>
          <slot name="append-outer"></slot>
        </template>
        <!-- 文件上传框外部 文字之后 END -->
        
        <!-- 文件上传框内部 文字之前 BEGIN -->
        <template v-slot:prepend-inner>
          <slot name="prepend"></slot>
        </template>
        <!-- 文件上传框内部 文字之前 END -->

        <!-- 文件上传框外部 文字之前 BEGIN -->
        <template v-slot:prepend>
          <slot name="prepend-outer"></slot>
        </template>
        <!-- 文件上传框外部 文字之前 END -->
      </v-file-input>
    </div>
    
    <div v-if="showUploadList" class="z-upload-list">
      <div 
        v-for="(item, index) of fileValue"
        :key="`${ index }-${ item.label }`"
        class="z-upload-list-item"
      >
        <div class="z-upload-list-item-info">
          <span class="icon prepend-icon">
            <v-icon>mdi-link</v-icon>
          </span>

          <a class="link" target="__blank" :href="item.url">{{ item.label }}</a>

          <span 
            v-if="deleteIcon"
            class="icon del-icon" 
            @click="onDelete($event, item)"
          >
            <v-icon size="18">mdi-trash-can-outline</v-icon>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'
  import request from './request'
  import { tools } from '../scripts/utils'

  export default {
    name: 'ZFileInput',
    mixins: [FormMixins, FormValidationMixins],

    props: {
      accept: {
        type: String,
        required: false
      },

      action: {
        type: String,
        required: false
      },

      autoUpload: {
        type: Boolean,
        default: true
      },

      chips: {
        type: Boolean,
        default: false
      },

      deleteIcon: {
        type: Boolean,
        default: true
      },

      effectData: {
        type: Object,
        required: false
      },

      headers: {
        type: Object,
        default: () => {}
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
          return ~['GET', 'POST'].indexOf(value)
        },
        default: 'POST'
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

      prependOuterIcon: {
        type: String,
        default: ''
      },

      showUploadList: {
        type: Boolean,
        default: true
      },
      
      truncateLength: {
        type: Number,
        default: 18
      }
    },

    data() {
      return {
        files: [],
        formData: null,
        fileValue: null
      }
    },

    methods: {
      onBlur(event) {
        event.customValue = this.value
        this.$emit('blur', event)
      },

      async onChange(files) {
        this.$emit('change', files)

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
            const file = files
            this.formData.append(this.name, file)

            this.uploadFile()

            // 记录当前上传的文件
            this.files = [file]
          }
        }
      },

      onClick(event) {
        this.$emit('click', this.setCustomValue(event))
      },

      onClickAppend(event) {
        this.$emit('click:append', this.setCustomValue(event))
      },

      onClickAppendOuter(event) {
        this.$emit('click:append-outer', this.setCustomValue(event))
      },

      onClickClear(event) {
        this.value = []
        this.files = []

        this.$emit('click:clear', this.setCustomValue(event))
      },

      onClickPrependOuter(event) {
        this.$emit('click:prepend-outer', this.setCustomValue(event))
      },

      onClickPrepend(event) {
        this.$emit('click:prepend', this.setCustomValue(event))
      },

      onFocus(event) {
        this.$emit('focus', this.setCustomValue(event))
      },

      onInput() {
        this.verifyField()
      },

      onKeydown(event) {
        this.$emit('keydown', this.setCustomValue(event))
      },

      onKeyup(event) {
        this.$emit('keyup', this.setCustomValue(event))
      },

      onDelete(event, item) {
        this.value = []

        event.customValue = item
        this.$emit('delete', event)
      },

      /**
       * @description 文件上传
       * @param {object | array} file
       */ 
      async uploadFile() {
        const allFiles = this.formData.getAll(this.name)
        const maxSize = +this.maxSize

        for(let file of allFiles) {
          const size = file.size / 1024

          if(maxSize && size > maxSize) {
            this.$emit('response', { maxSize, file })
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

        this.$emit('response', {
          result,
          files: this.files
        })
      },

      setCustomValue(event = null) {
        if(!event) {
          return this.value
        }
        else {
          event.customValue = this.value
          return event
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-upload-list {
    .z-upload-list-item {
      position: relative;
      margin-bottom: 24px;
      height: 22px;
      font-size: 14px;

      .z-upload-list-item-info {
        display: flex;
        align-items: center;
        transition: background-color .3s;

        &:hover {
          background-color: rgba(25, 118, 210, .18);
        }

        span.icon {

        }

        a.link {
          flex-grow: 1;
          display: inline-block;
          color: #1976d2;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-decoration: none;
        }

        span.prepend-icon {
          margin-right: 9px;
        }

        span.del-icon {
          
        }
      }
    }
  }
</style>