import _ from 'lodash'

const ZValidate = {}

ZValidate.forms = {}

ZValidate.rules = {
  email: (value) => {
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return value.match(reg)
  },

  required: (value) => {
    var reg = /[\S]+/
    return reg.test(value)
  },

  phone: (value) => {
    const reg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/
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
  if(!options) return
  console.log(options)
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

ZValidate.validateAll = function(options) {
  console.log(options)
}

export default ZValidate