import _ from 'lodash'

const ZValidate = {}

ZValidate.forms = {}

ZValidate.validator = {}

ZValidate.rules = {
  email: (value) => {
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return value.match(reg)
  },

  length: (value, rule) => {
    value = '' + value
    rule = +rule
    return value.length === rule
  },

  min: (value, rule) => {
		value = '' + value
    rule = +rule
		return value.length >= rule
	},

  max: (value, rule) => {
		value = '' + value
    rule = +rule
		return value.length <= rule
	},

	min_value: (value, rule) => {
		return +value >= +rule
	},

	max_value: (value, rule) => {
		return +value <= +rule
	},

  numeric: (value) => {
    const reg = /^[0-9]*$/
		return reg.test(value)
  },

  phone: (value) => {
		const reg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/
		return reg.test(value)
	},

  regex: (value, rule) => {
    console.log(value)
    console.log(typeof rule, rule)
		const reg = rule
		return reg.test(value)
	},

  required: (value) => {
    var reg = /[\S]+/
    return reg.test(value)
  }
}

ZValidate.attach = function(options) {
  _.set(ZValidate.forms, options.formId + '.' + options.formKey, {
    value: options.value,
    label: options.label,
    validation: options.validation
  })
  console.log(ZValidate.forms)
}

ZValidate.validate = function(options) {
  console.log(options)

  if(!options) return

  console.log(ZValidate.forms[options.formId])

  if(options.value !== undefined) {
    if(ZValidate.forms[options.formId]) {
      const { validation } = ZValidate.forms[options.formId][options.formKey]
      for(let item of validation) {
        if(!ZValidate.rules[item.rule](options.value)) {
          return item.message
        }
      }
    }
  }
}

ZValidate.validateAll = function(formId) {
  console.log(formId)
}

ZValidate.validateFormValueByKey = function(options) {
  _.set(ZValidate.validator, options.formId + '.' + options.formKey, options.status)
}

export default ZValidate