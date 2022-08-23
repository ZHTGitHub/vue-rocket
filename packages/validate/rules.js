const rules = {
  /**
   * @description 英文字母
   * @param {String} value
   */ 
  alpha: (value) => {
    const reg = /^[A-Za-z]+$/
    return reg.test(value)
  },

  /**
   * @description 英文字母及自然数
   * @param {String} value
   */ 
   alpha_num: (value) => {
    const reg = /^[A-Za-z0-9]+$/
    return reg.test(value)
  },

  /**
   * @description 不得小于/大于指定的值
   * @param {String} value
   */ 
   between: (value, rule) => {
    const values = rule.split(',')
    const min_value = +values[0]
    const max_value = +values[1]
    const length = value?.length

    if(length >= min_value && length <= max_value) {
      return true
    }
    return false
  },

  /**
   * @description 接受正负小数
   * @param {String} value
   */ 
   decimal: (value) => {
    const reg = /^(\-|\+)?\d+(\.\d+)?$/
    return reg.test(value)
  },

  /**
   * @description 邮箱
   * @param {String} value
   */ 
  email: (value) => {
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return reg.test(value)
  },

  /**
   * @description 不包含
   * @param {String} value
   * @param {Array} rules
   */ 
  excluded: (value, rules) => {
    for(let rule of rules.split('|')) {
      if(~value?.indexOf(rule)) {
        return false
      }else {
        return true
      }
    }
  },

  /**
   * @description 包含
   * @param {String} value
   * @param {Array} rule
   */ 
  included: (value, rule) => {
    return ~value?.indexOf(rule)
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
    return value?.length === rule
  },

  /**
   * @description 最小长度
   * @param {String} value
   * @param {String} rule
   */ 
  min: (value, rule) => {
		value = '' + value
    rule = +rule
		return value?.length >= rule
	},

  /**
   * @description 最大长度
   * @param {String} value
   * @param {String} rule
   */ 
  max: (value, rule) => {
		value = '' + value
    rule = +rule
		return value?.length <= rule
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
   * @description 正整数
   * @param {String} value
   */ 
  numeric: (value) => {
    const reg = /^[0-9]*$/
		return reg.test(value)
  },

  /**
   * @description 手机号
   * @param {String} value
   */ 
  phone: (value) => {
    var reg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/
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
    if(value === undefined || value == null) {
      return false
    }

    const reg = /[\S]+/
    return reg.test(value)
  },

  /**
   * @description 文件大小
   * @param {String} value
   */ 
  // size: (value, rule) => {
  //   const size = (value[0].size / 1024).toFixed(1)
  //   console.log(size, rule)
  //   console.log(+size > +rule)
  //   return !(+size > +rule)
  // }
}

export default rules