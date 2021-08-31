const validation_rules = {
	required: (value, rule) => {
		if(!rule) {
			return true
		}
		const REG_REQUIRED = /[\S]+/
		return REG_REQUIRED.test(value)
	},

	email: (value, rule) => {
		if(!rule) {
			return true
		}
		const REG_EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
		return value.match(REG_EMAIL)
	},

	min: (value, rule) => {
		value = '' + value
		const REG_MIN = new RegExp('^\\d{'+ rule +',}$')
		return REG_MIN.test(value)
	},

	max: (value, rule) => {
		value = '' + value
		const REG_MAX = new RegExp('^\\d{0,'+ rule +'}$')
		return REG_MAX.test(value)
	},

	min_value: (value, rule) => {
		return +value >= +rule
	},

	max_value: (value, rule) => {
		return +value <= +rule
	},

	length: (value, rule) => {
		value = '' + value
		const REG_LENGTH = new RegExp('^\\d{'+ rule +'}$')
		return REG_LENGTH.test(value)
	},

	numeric: (value) => {
		const REG_NUMERIC = /^[0-9]*$/
		return REG_NUMERIC.test(value)
	},

	phone: (value) => {
		const REG_PHONE = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/
		return REG_PHONE.test(value)
	},

	// excluded: (value) => {

	// },
	
	// mimes: (value) => {

	// },

	// size: (value) => {

	// },

	// url: (value, rule) => {

	// },

	regex: (value, rule) => {
		const REG_REGEX = rule
		return REG_REGEX.test(value)
	}
}

export default validation_rules