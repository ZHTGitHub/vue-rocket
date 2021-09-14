import _ from 'lodash'
import rules from './rules'

class ZValidate {
  constructor() {
    const forms = {}
    this.validator = {}
    this.rules = rules
  }

  attach(options) {
    _.set(forms, options.formId + '.' + options.formKey, {
      value: options.value,
      label: options.label,
      validation: options.validation
    })
  }

  validate(options) {
    if(!options) return

    if(options.value !== undefined) {
      if(forms[options.formId]) {
        const { validation } = forms[options.formId][options.formKey]
        for(let item of validation) {
          if(!this.rules[item.rule](options.value)) {
            return item.message
          }
        }
      }
    }
  }

  validateAll() {

  }

  validateByKey(options) {
    _.set(this.validator, options.formId + '.' + options.formKey, options.status)
  }
}

export default new ZValidate()