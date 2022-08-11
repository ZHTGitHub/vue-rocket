import Vue from 'vue'

class Toasted {
  constructor(customTypes = new Map(), customOptions = {}) {
    this.customTypes = customTypes
    this.customOptions = customOptions
  }

  /**
   * @description 成功
   * @param {String} message
   * @param {Object} options
   */ 
  success(message, options) {
    const assignOptions = Object.assign(this.customOptions, options)
    Vue.toasted.success(message, assignOptions)
  }

  /**
   * @description 信息
   * @param {String} message
   * @param {Object} options
   */ 
  info(message, options) {
    const assignOptions = Object.assign(this.customOptions, options)
    Vue.toasted.info(message, assignOptions)
  }

  /**
   * @description 警告
   * @param {String} message
   * @param {Object} options
   */ 
  warning(message, options) {
    const assignOptions = Object.assign(this.customOptions, options)
    Vue.toasted.show(message, { className: 'toasted-warning', ...assignOptions })
  }

  /**
   * @description 错误
   * @param {String} message
   * @param {Object} options
   */ 
  error(message, options) {
    const assignOptions = Object.assign(this.customOptions, options)
    Vue.toasted.error(message, assignOptions)
  }

  /**
   * @description 动态
   * @param {String} message
   * @param {Any} customType
   * @param {Object} options
   */ 
  dynamic(message, customType, options) {
    const type = this.customTypes.get(customType)

    if(type) {
      const assignOptions = Object.assign(this.customOptions, options)
      this[type](message, assignOptions)
    }
    else {
      this.info(message, options)
    }
  }
}

export default Toasted