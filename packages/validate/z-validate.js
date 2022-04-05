// import _ from 'lodash'
import { set } from '../scripts/tools'

class ZValidate {
  constructor() {
    // 当前表单字段的总数
    this.sum = 0

    // 每张表单下每个字段的校验结果
    this.validator = {}

    // 每张表单的 字段总数 及 校验结果集
    this.forms = {}
  }

  // 给校验表单的每个 [value] 所对应的 [key] 设置 [value] 的校验结果
  SET_FORM_VALIDATE_VALUE_BY_KEY(data) {
    set(this.validator, data.formId + '.' + data.formKey, data.status)

    const form = this.validator[data.formId]
    const values = Object.values(form)
    const total = values.length

    this.forms[data.formId] = {
      results: values,
      total
    }
  }

  // 删除校验表单的[key]
  DELETE_FORM_VALIDATE_KEY(data) {
    delete this.validator[data.formId][data.formKey]

    const form = this.validator[data.formId]
    const values = Object.values(form)
    const total = values.length

    this.forms[data.formId] = {
      results: values,
      total
    }
  }
}

export default new ZValidate()