!(function() {
  'use strict'

  var Rules = Object.freeze({
    email: email,
    length: length,
    max: max,
    min: min,
    max_value: max_value,
    min_value: min_value,
    numeric: numeric,
    phone: phone,
    required: required
  })

  var validate$1 = function(value) {
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return value.match(reg)
  }

  var email = {
    validate: validate$1
  }

  var validate$2 = function(value) {
    var reg = /[\S]+/
    return reg.test(value)
  }

  var required = {
    validate: validate$2
  }

  var messages = {
    email: function(label) { return (label + '必须是正确的邮箱格式.') },
    required: function(label) { return (label + '为必填项.') }
  }

  var ZValidate$1 = {
    version: '1.0.0',
    Rules: Rules
  }

  return ZValidate$1
})();