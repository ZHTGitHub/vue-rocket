import $validator from '../validate/z-validate'
import emitter from '../scripts/emitter'
import tools from '../scripts/tools'

export default {
	created() {
		this.validateForm('INVALID_VALUE')

		this.verify()

		this.reset()

		this.clear()
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
						if(!$validator.rules[ruleName]) {
							this.validateForm('VALID_VALUE')
						}
						// 校验规则存在
						else {
							// 当前 field 是否合法
							const yummy = $validator.rules[ruleName](this.value, ruleValue)

							// 不合法
							if(!yummy) {
								// 当前 field 是否必填
								const hasRequired = this.validation.some((r) => { return r.rule === 'required' })

								// 必填 直接报错
								if(hasRequired) {
									this.unsavory(item)
								}

								// 不必填 有值 但值不合法
								else if(!hasRequired && this.value) {
									this.unsavory(item)
								}

								// 
								else {
									this.savory()
								}
								return
							}
							// 合法
							else {
								this.savory(item)
							}
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

					// 校验规则不为 required && 值为undefined
					if(ruleName !== 'required' && !this.value) {
						this.validateForm('VALID_VALUE')
					}

					// 校验规则不为 required && 值不为undefined
					else if(ruleName !== 'required' && this.value) {
						let yummy = $validator.rules[ruleName](this.value, ruleValue)

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
						let yummy = $validator.rules.required(this.value, ruleValue)

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
			emitter.on('ZHT_VALIDATE_FORM', (formId) => {
				if(this.formId === formId) {
					++$validator.sum
	
					this.value = this.value === undefined ? '' : this.value
					// console.log(this.value)
	
					this.verifyForm()
	
					const { total, results } = $validator.forms[this.formId]
	
					// console.log($validator.forms)
	
					if($validator.sum === total) {
						if(!results.includes('INVALID_VALUE')) {
							emitter.emit('ZHT_FORM_VALID', formId)
						}
						$validator.sum = 0
					}
					
					// console.log(form)
				}
	
				emitter.off('ZHT_VALIDATE_FORM')
			})
		},

		// Reset current form.
		reset() {
			emitter.on('ZHT_RESET_FORM', (formId) => {
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
						emitter.emit('ZHT_FORM_RESET', formId)
						$validator.sum = 0
					}
				}
				emitter.off('ZHT_RESET_FORM')
			})
		},

		// Clean current form.
		clear() {
			emitter.on('ZHT_CLEAR_FORM', (formId) => {
				if(this.formId === formId) {
					this.$store.commit('CLEAN_FORM', {
						formId: this.formId
					})
					this.errorMessage = ''
					this.incorrect = false

					++$validator.sum
					const { total } = $validator.forms[this.formId]
					if($validator.sum === total) {
						emitter.emit('ZHT_FORM_CLEARED', formId)
						$validator.sum = 0
					}
				}
				emitter.off('ZHT_CLEAR_FORM')
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

		// ???
		validateForm(status) {
			$validator.validateByKey({
				formId: this.formId,
				formKey: this.formKey,
				status
			})
		}
	}
}