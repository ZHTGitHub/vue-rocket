import validator from './validator'

let quantity = 0

export default {
  props: {
		rules: {
			type: [String, Array],
			required: false
		}
	},

	data() {
		return {
			errorMessage: ''
		}
	},

	created() {
		// 校验当前表单
		this.$bus.on('VALIDATE_FORM', () => {
			this.value = this.value === undefined ? '' : this.value

			this.$store.commit('SET_VALIDATE_VALUE_BY_KEY', { 
				formId: this.formId,
				formKey: this.formKey,
				value: this.validator()
			})

			const results = Object.values(this.$store.getters.validates[this.formId])

			++quantity

			if(!results.includes(false)) {
				console.log('error1')
				if(results.length === quantity) {
					console.error('error2')
					this.$bus.emit('ALL_VALUE_VALID')
					quantity = 0
				}
			}

			if(quantity >= results.length) {
				quantity = 0
			}

			console.log(results.length)
			console.log(quantity)
			console.log(results)
			console.log(this.formId)
			console.log(this.formKey)
			console.log(this.validator())
		})

		// 重置当前表单
		this.$bus.on('RESET_FORM', () => {
			quantity = 0
			this.reset()
		})

		// 清空当前表单
		this.$bus.on('CLEAR_FORM', () => {
			quantity = 0
			this.clear()
		})
	},

	methods: {
		validator() {
			if(this.value !== undefined) {
				for(let item of this.rules) {
					const rule = Object.keys(item)[0]

					if(!validator[rule]) {
						return true
					}
					else {
						if(!validator[rule](this.value)) {
							this.errorMessage = item.message
							return false
						}else {
							this.errorMessage = ''
						}
					}
				}
			}
		},

		reset() {
			this.$store.commit('CLEAN_FORM', {
				formId: this.formId
			})
			this.errorMessage = ''
		},

		clear() {
			this.$store.commit('CLEAN_FORM', {
				formId: this.formId
			})
			this.errorMessage = ''
		}
	},

	watch: {
		value: {
			handler() {
				this.validator()
			}
		}
	}
}