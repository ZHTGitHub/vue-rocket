import $validator from '../validate/z-validate'
import rocket from '../scripts/rocket'
import tools from '../scripts/tools'
import rules from '../validate/rules'

export default {
	data() {
		return {
			handleValidate: null,
			handleReset: null,
			handleClear: null
		}
	},

	created() {
		this.validateForm('INVALID_VALUE')

		this.verify()

		this.reset()

		this.clear()
	},

	beforeDestroy() {
		$validator.DELETE_FORM_VALIDATE_KEY({
			formId: this.formId,
			formKey: this.formKey
		})

		rocket.off('ZHT_VALIDATE_FORM', this.handleValidate)
		rocket.off('ZHT_RESET_FORM', this.handleReset)
		rocket.off('ZHT_CLEAR_FORM', this.handleClear)
	},

	methods: {
		// Verify field
		verifyField() {
			if(this.value !== undefined) {
				// 未写入校验规则
				if(tools.isLousy(this.validation)) {
					this.validateForm('VALID_VALUE')
				}
				// 写入校验规则
				else {
					for(let item of this.validation) {
						let [ruleName, ruleValue] = item.rule ? [item.rule.split(':')[0], item.rule.split(':')[1]] : []

						// 正则表达式
						if(item.regex) {
							ruleName = 'regex'
							ruleValue = item.regex
						}

						// console.log(this.validation)
						// console.log(ruleName, ruleValue)

						// 校验规则不存在
						if(!rules[ruleName]) {
							this.validateForm('VALID_VALUE')
						}
						// 校验规则存在
						else {
							// 当前字段是否合法
							const isYummy = rules[ruleName](this.value, ruleValue)

							// 不合法
							if(!isYummy) {
								this.unsavory(item)
								return
							}
							
							// 合法
							this.savory(item)
						}
					}
				}
			}
		},

		// Verify form
		verifyForm() {
			if(this.value !== undefined) {
				// 未写入校验规则
				if(tools.isLousy(this.validation)) {
					this.validateForm('VALID_VALUE')
					return
				}

				for(let item of this.validation) {
					let [ruleName, ruleValue] = item.rule ? [item.rule.split(':')[0], item.rule.split(':')[1]] : []

					if(item.regex) {
						ruleName = 'regex'
						ruleValue = item.regex
					}

					// 校验规则不存在
					if(!rules[ruleName]) {
						this.validateForm('VALID_VALUE')
					}

					// 校验规则不为 required && 值为undefined
					else if(ruleName !== 'required' && !this.value) {
						this.validateForm('VALID_VALUE')
					}

					// 校验规则不为 required && 值不为undefined
					else if(ruleName !== 'required' && this.value) {
						let yummy = rules[ruleName](this.value, ruleValue)

						// 不合法
						if(!yummy) {
							this.unsavory(item)
							return
						}
						// 合法
						else {
							this.savory()
						}
					}

					// 校验规则为 required
					else {
						let yummy = rules.required(this.value, ruleValue)

						// 不合法
						if(!yummy) {
							this.unsavory(item)
							return
						}
						// 合法
						else {
							this.savory()
						}
					}
				}
			}
		},

		// Verify current form
		verify() {
			rocket.on('ZHT_VALIDATE_FORM', this.handleValidate = (formId) => {
				if(this.formId === formId) {
					++$validator.sum
	
					this.value = this.value === undefined ? '' : this.value
	
					this.verifyForm()
	
					const { total, results } = $validator.forms[this.formId]
	
					// console.log($validator.forms[this.formId])

					// console.log($validator.sum, total)
	
					if($validator.sum === total) {
						if(!results.includes('INVALID_VALUE')) {
							rocket.emit('ZHT_FORM_VALID', formId)
						}
						$validator.sum = 0
					}
					
					// console.log(form)
				}
			})
		},

		// Reset current form.
		reset() {
			rocket.on('ZHT_RESET_FORM', this.handleReset = (formId) => {
				if(this.formId === formId) {

					// console.log(this.formKey, this.value)

					const defaultValue = tools.isLousy(this.defaultValue) ? undefined : this.defaultValue

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
						rocket.emit('ZHT_FORM_RESET', formId)
						$validator.sum = 0
					}
				}
			})
		},

		// Clean current form.
		clear() {
			rocket.on('ZHT_CLEAR_FORM', this.handleClear = (formId) => {
				if(this.formId === formId) {
					this.$store.commit('CLEAN_FORM', {
						formId: this.formId,
						formKey: this.formKey
					})
					this.errorMessage = ''
					this.incorrect = false

					++$validator.sum
					const { total } = $validator.forms[this.formId]
					if($validator.sum === total) {
						rocket.emit('ZHT_FORM_CLEARED', formId)
						$validator.sum = 0
					}
				}
			})
		},

		// If field is valid
		savory() {
			this.incorrect = false
			this.errorMessage = ''
			this.validateForm('VALID_VALUE')
		},

		// If field is invalid
		unsavory(item) {
			this.incorrect = true
			this.errorMessage = item.message
			this.validateForm('INVALID_VALUE')
		},

		// Memory
		validateForm(status) {
			$validator.SET_FORM_VALIDATE_VALUE_BY_KEY({
				formId: this.formId,
				formKey: this.formKey,
				status
			})
		}
	}
}