import $validator from '../validate/z-validate'
import $bus from '../scripts/emitter'

export default {
	created() {
		// console.log(this.formId, this.formKey)

		this.validateForm('INVALID_VALUE')

		// 校验当前表单
		$bus.on('ZHT_VALIDATE_FORM', (formId) => {

			if(this.formId === formId) {
				++$validator.sum
				this.value = this.value === undefined ? '' : this.value

				this.validator()

				// console.log(this.value)

				const { total, results } = $validator.forms[this.formId]

				if($validator.sum === total) {
					if(!results.includes('INVALID_VALUE')) {
						$bus.emit('ZHT_FORM_VALID', formId)
					}
					$validator.sum = 0
				}
				
				// console.log(form)
			}

			$bus.off('ZHT_VALIDATE_FORM')
		})

		this.reset()

		this.clear()
	},

	methods: {
		validator() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
			if(this.value !== undefined) {

				// 无校验规则合法
				if(!this.validation || !this.validation.length) {
					this.validateForm('VALID_VALUE')
					return
				}

				for(let item of this.validation) {

					let ruleName = undefined
					let ruleValue = undefined

					if(item.rule) {
						ruleName = item.rule.split(':')[0]
						ruleValue = item.rule.split(':')[1]
					}

					if(item.regex) {
						ruleName = 'regex'
						ruleValue = item.regex
					}

					// console.log(ruleName, ruleValue)

					if(!$validator.rules[ruleName]) {
						this.validateForm('VALID_VALUE')
					}
					else {
						if(!$validator.rules[ruleName](this.value, ruleValue)) {
							this.errorMessage = item.message
							this.incorrect = true
							this.validateForm('INVALID_VALUE')
							return
						}else {
							this.errorMessage = ''
							this.incorrect = false
							this.validateForm('VALID_VALUE')
						}
					}
				}
			}
		},

		// reset current form.
		reset() {
			$bus.on('ZHT_RESET_FORM', (formId) => {
				if(this.formId === formId) {

					// console.log(this.formKey, this.value)

					const defaultValue = !this.util.tools.isEmpty(this.defaultValue) ? undefined : this.defaultValue

					this.$store.commit('RESET_FORM', {
						formId: this.formId,
						formKey: this.formKey,
						defaultValue
					})

					this.errorMessage = ''
					this.incorrect = false
					
					++$validator.sum
					const { total } = $validator.forms[this.formId]
					if($validator.sum === total) {
						$bus.emit('ZHT_FORM_RESET', formId)
						$validator.sum = 0
					}
				}
				$bus.off('ZHT_RESET_FORM')
			})
		},

		// clean current form.
		clear() {
			$bus.on('ZHT_CLEAR_FORM', (formId) => {
				if(this.formId === formId) {
					this.$store.commit('CLEAN_FORM', {
						formId: this.formId
					})
					this.errorMessage = ''
					this.incorrect = false

					++$validator.sum
					const { total } = $validator.forms[this.formId]
					if($validator.sum === total) {
						$bus.emit('ZHT_FORM_CLEARED', formId)
						$validator.sum = 0
					}
				}
				$bus.off('ZHT_CLEAR_FORM')
			})
		},

		validateForm(status) {
			$validator.validateByKey({
				formId: this.formId,
				formKey: this.formKey,
				status
			})
		}
	},

	watch: {
		value() {
			this.validator()
		}
	}
}