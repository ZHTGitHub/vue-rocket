import { mapState } from 'vuex'

export default {
	props: {
		formId: {
			type: String,
			required: true
		},
		formKey: {
			type: String,
			required: true
		},
		readonly: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		},
		label: {
			type: String,
			required: false
		},
		// rules: {
		// 	type: [String, Array],
		// 	required: false
		// }
	},

	computed: {
		...mapState(['forms']),

		value: {
			set(value) {
				this.$store.commit('SET_FORM_VALUE_BY_KEY', {
					formId: this.formId,
					formKey: this.formKey,
					value: value
				})
			},

			get() {
				if(this.forms[this.formId]) {
					return this.forms[this.formId][this.formKey]
				}
				return ''
			}
		}
	},

	// watch: {
	// 	value: {
	// 		handler(value) {
	// 			console.log(value)
	// 			// console.log(this.rules)
	// 		}
	// 	}
	// }
}