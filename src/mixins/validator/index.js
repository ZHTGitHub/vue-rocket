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
			errorMessage: '',
			checkValue: 'VALID_VALUE',
			checkResults: []
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
			this.checkResults = results

			if(quantity >= results.length) {
				quantity = 0
			}

			++quantity

			if(!results.includes('INVALID_VALUE')) {
				if(results.length === quantity) {
					this.$bus.emit('ALL_VALUE_VALID')
				}
			}

			console.log(results.length, quantity)
			console.log(results)
			console.log(this.formId, this.formKey, this.validator(), this.checkValue)
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
						// this.checkValue = 'VALID_VALUE'
						return 'VALID_VALUE'
					}
					else {
						if(!validator[rule](this.value)) {
							this.errorMessage = item.message
							// this.checkValue = 'INVALID_VALUE'
							return 'INVALID_VALUE'
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
		value() {
			this.validator()
		},

		checkResults: {
			handler(results) {
				console.log(results)
			},
			immediate: true,
			deep: true
		}
	}
}