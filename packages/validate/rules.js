const rules = {
  /**
   * @description 邮箱
   * @param {String} value
   */ 
  email: (value) => {
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return value.match(reg)
  },

  /**
   * @description 不包含
   * @param {String} value
   * @param {Array} rules
   */ 
  excluded: (value, rules) => {
    return !~rules.indexOf(value)
  },

  /**
   * @description 包含
   * @param {String} value
   * @param {Array} rules
   */ 
  included: (value, rules) => {
    return ~rules.indexOf(value)
  },

  /**
   * @description 整数
   * @param {String} value
   */ 
  integer(value) {
    const reg = /^-?[1-9]\d*$/
    return reg.test(value)
  },

  /**
   * @description 是否与给定值匹配，严格相等
   * @param {String} value
   * @param {String} rule
   */ 
  is: (value, rule) => {
    return value === rule
  },
  
  /**
   * @description 是否与给定值不匹配，严格相等
   * @param {String} value
   * @param {String} rule
   */ 
  is_not: (value, rule) => {
    return value !== rule
  },

  /**
   * @description 固定长度
   * @param {String} value
   * @param {String} rule
   */ 
  length: (value, rule) => {
    value = '' + value
    rule = +rule
    return value.length === rule
  },

  /**
   * @description 最小长度
   * @param {String} value
   * @param {String} rule
   */ 
  min: (value, rule) => {
		value = '' + value
    rule = +rule
		return value.length >= rule
	},

  /**
   * @description 最大长度
   * @param {String} value
   * @param {String} rule
   */ 
  max: (value, rule) => {
		value = '' + value
    rule = +rule
		return value.length <= rule
	},

  /**
   * @description 最小值
   * @param {String} value
   * @param {String} rule
   */ 
	min_value: (value, rule) => {
		return +value >= +rule
	},

  /**
   * @description 最大值
   * @param {String} value
   * @param {String} rule
   */ 
	max_value: (value, rule) => {
		return +value <= +rule
	},

  /**
   * @description 数字
   * @param {String} value
   */ 
  number: (value) => {
    const reg = /^(\-|\+)?\d+(\.\d+)?$/
    return reg.test(value)
  },

  /**
   * @description 正整数
   * @param {String} value
   */ 
  numeric: (value) => {
    const reg = /^[0-9]*$/
		return reg.test(value)
  },

  /**
   * @description 手机
   * @param {String} value
   */ 
  phone: (value) => {
		const reg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/
		return reg.test(value)
	},

  /**
   * @description 正则表达式
   * @param {String} value
   * @param {String} rule
   */ 
  regex: (value, rule) => {
		const reg = rule
		return reg.test(value)
	},

  /**
   * @description 必填
   * @param {String} value
   */ 
  required: (value) => {
    var reg = /[\S]+/
    return reg.test(value)
  }
}

export default rules