import $validator from '../validate/z-validate'
import emitter from '../scripts/emitter'
import tools from '../scripts/tools'

export default {
	created() {
		// console.log(this.formId, this.formKey)

		this.validateForm('INVALID_VALUE')

		// 校验当前表单
		emitter.on('ZHT_VALIDATE_FORM', (formId) => {
			if(this.formId === formId) {
				$validator.global = true
				++$validator.sum
				console.log($validator.sum, $validator.global)

				this.value = this.value === undefined ? '' : this.value
				// console.log(this.value)

				this.globalValidator()

				const { total, results } = $validator.forms[this.formId]

				if($validator.sum === total) {
					if(!results.includes('INVALID_VALUE')) {
						emitter.emit('ZHT_FORM_VALID', formId)
					}
					$validator.global = false
					$validator.sum = 0
				}
				
				// console.log(form)
			}

			emitter.off('ZHT_VALIDATE_FORM')
		})

		this.reset()

		this.clear()
	},

	methods: {
		validator() {
			if(this.value !== undefined) { 

				// 未写入校验规则
				if(tools.isEmpty(this.validation)) {
					this.validateForm('VALID_VALUE')
					return
				}

				for(let item of this.validation) {
					let [ruleName, ruleValue] = item.rule ? [item.rule.split(':')[0], item.rule.split(':')[1]] : []

					if(item.regex) {
						ruleName = 'regex'
						ruleValue = item.regex
					}

					console.log(ruleName, ruleValue)

					// 校验规则不存在
					if(!$validator.rules[ruleName]) {
						this.validateForm('VALID_VALUE')
					}
					// 校验规则存在
					else {
						let yummy = $validator.rules[ruleName](this.value, ruleValue)
						
						// 不合法
						if(!yummy) {
							this.incorrect = true
							this.errorMessage = item.message
							this.validateForm('INVALID_VALUE')
							return
						}
						// 合法
						else {
							this.incorrect = false
							this.errorMessage = ''
							this.validateForm('VALID_VALUE')
						}
					}
				}
			}
		},

		globalValidator() {
			if(this.value !== undefined) {
				// 未写入校验规则
				if(tools.isEmpty(this.validation)) {
					this.validateForm('VALID_VALUE')
					return
				}

				for(let item of this.validation) {
					let [ruleName, ruleValue] = item.rule ? [item.rule.split(':')[0], item.rule.split(':')[1]] : []


					// 校验规则不为 required
					if(ruleName !== 'required') {
						this.validateForm('VALID_VALUE')
					}
					// 校验规则为 required
					else {
						console.log(ruleName)
						let yummy = $validator.rules.required(this.value, ruleValue)

						// 不合法
						if(!yummy) {
							this.incorrect = true
							this.errorMessage = item.message
							this.validateForm('INVALID_VALUE')
							return
						}
						// 合法
						else {
							this.incorrect = false
							this.errorMessage = ''
							this.validateForm('VALID_VALUE')
						}
					}
				}
			}
		},

		// reset current form.
		reset() {
			emitter.on('ZHT_RESET_FORM', (formId) => {
				if(this.formId === formId) {

					// console.log(this.formKey, this.value)

					const defaultValue = tools.isEmpty(this.defaultValue) ? undefined : this.defaultValue

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

		// clean current form.
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

		validateForm(status) {
			$validator.validateByKey({
				formId: this.formId,
				formKey: this.formKey,
				status
			})
		},

		onInput() {
			this.validator()
		}
	},

	// watch: {
	// 	value() {
	// 		if(!$validator.global) {
	// 			console.error($validator.global)
	// 			this.validator()
	// 		}
	// 	}
	// }
}