<template>
  <div class="z-file-input z-input" :style="{ width: breadth }">
    <div>
      <v-file-input
        v-model="value"
        :accept="accept"
        :append-icon="appendIcon"
        :append-outer-icon="appendOuterIcon"
        autocomplete="off"
        :autofocus="autofocus"
        :chips="chips"
        :clear-icon="clearIcon"
        :clearable="clearable"
        :counter="counter"
        :disabled="disabled"
        :error="incorrect"
        :error-messages="errorMessage"
        :filled="filled"
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
    
    <div class="z-upload-list">
      <div 
        v-for="(item, index) of fileList"
        :key="`${ index }-${ item.name }`"
        class="z-upload-list-item"
      >
        <div class="z-upload-list-item-info">
          <span class="icon prepend-icon">
            <v-icon>mdi-link</v-icon>
          </span>

          <a class="link" target="__blank" :href="item.url">{{ item.name }}</a>

          <span 
            v-if="deleteIcon"
            class="icon del-icon" 
            @click="onDel($event, item)"
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
        required: true
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

      fileList: {
        type: Array,
        default: () => []
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
      
      truncateLength: {
        type: Number,
        default: 18
      }
    },

    data() {
      return {
        imageList: [],
        formData: null
      }
    },

    methods: {
      onBlur(event) {
        event.customValue = this.value
        this.$emit('blur', event)
      },

      onChange(file) {
        this.$emit('change', file)
        
        this.formData = new FormData()

        // 多选
        if(this.multiple) {
          // 所有文件一起上传
          if(this.parcel) {
            for(let item of file) {
              this.formData.append(this.name, item)
            }
            this._submitFile()
          }
          // 单个文件单个文件上传
          else {
            for(let item of file) {
              this.formData.append(this.name, item)
              this._submitFile()
            }
          }
          
        }
        // 单选
        else {
          this.formData.append(this.name, file)
          this._submitFile()
        }
      },

      onClick(event) {
        event.customValue = this.value
        this.$emit('click', event)
      },

      onClickAppend(event) {
        event.customValue = this.value
        this.$emit('click:append', event)
      },

      onClickAppendOuter(event) {
        event.customValue = this.value
        this.$emit('click:append-outer', event)
      },

      onClickClear(event) {
        event.customValue = this.value
        this.$emit('click:clear', event)
      },

      onClickPrependOuter(event) {
        event.customValue = this.value
        this.$emit('click:prepend-outer', event)
      },

      onClickPrepend(event) {
        event.customValue = this.value
        this.$emit('click:prepend', event)
      },

      onFocus(event) {
        event.customValue = this.value
        this.$emit('focus', event)
      },

      onInput() {
        this.verifyField()
      },

      onKeydown(event) {
        event.customValue = this.value
        this.$emit('keydown', event)
      },

      onKeyup(event) {
        event.customValue = this.value
        this.$emit('keyup', event)
      },

      onDel(event, item) {
        event.customValue = item
        this.$emit('delete', event)
      },

      /**
       * @description 文件上传
       * @param {object | array} file
       */ 
      _submitFile() {
        if(this.effectData) {
          for(let key in this.effectData) {
            this.formData.append(key, this.effectData[key])
          }
        }

        fetch(this.action, {
          method: this.method,
          body: this.formData
        })
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          this.$emit('response', response)
        })
        .catch((error) => {
          this.$emit('response', error)
        })
      }
    },

    defaultValue: {
			handler(value) {
				this.value = value
			},
      deep: true,
			immediate: true
		}
  }
</script>

<style scoped lang="scss">
  .z-upload-list {
    .z-upload-list-item {
      position: relative;
      margin-bottom: 4px;
      height: 22px;
      font-size: 14px;

      .z-upload-list-item-info {
        display: flex;
        transition: background-color .3s;

        &:hover {
          background-color: rgba(25, 118, 210, .18);
        }

        span.icon {

        }

        a.link {
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
          position: absolute;
          right: 0;
        }
      }
    }
  }
</style>