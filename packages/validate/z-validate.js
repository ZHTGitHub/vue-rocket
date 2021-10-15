import _ from 'lodash'
import rules from './rules'

class ZValidate {
  constructor() {
    // 当前表单字段的总数
    this.sum = 0

    // 每张表单下每个字段的校验结果
    this.validator = {}

    // 每张表单的 字段总数 及 校验结果集
    this.forms = {}

    // 校验规则
    this.rules = rules

    // 
    this.global = false
  }

  validateByKey(options) {
    _.set(this.validator, options.formId + '.' + options.formKey, options.status)

    const form = this.validator[options.formId]
    const results = Object.values(form)
    const total = results.length

    this.forms[options.formId] = {
      results,
      total
    }
  }
}

export default new ZValidate()