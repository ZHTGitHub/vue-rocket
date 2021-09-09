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

		appendIcon: {
			type: String,
			required: false
		},

		appendOuterIcon: {
			type: String,
			required: false
		},

		clearIcon: {
			type: String,
			required: false
		},

		clearable: {
			type: Boolean,
			default: false
		},

		counter: {
			type: [Boolean, Number, String],
			default: false
		},

		defaultValue: {
			type: [String, Number, Boolean],
			default: undefined
		},

		disabled: {
			type: Boolean,
			default: false
		},

		error: {
			type: Boolean,
			default: false
		},

		hideDetails: {
			type: Boolean,
			default: true
		},

		hint: {
			type: String,
			required: false
		},

		label: {
			type: String,
			required: false
		},

		prependIcon: {
			type: String,
			required: false
		},

		prependOuterIcon: {
			type: String,
			required: false
		},

		readonly: {
			type: Boolean,
			default: false
		},

		reverse: {
			type: Boolean,
			default: false
		},

		required: {
			type: Boolean,
			default: false
		},

		suffix: {
			type: String,
			required: false
		},

		success: {
			type: Boolean,
			default: false
		},

		validation: {
			type: Array,
			required: false
		}
	},

	data() {
		return {
			incorrect: false,
			errorMessage: ''
		}
	},

	created() {
		this.incorrect = this.error
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

	watch: {
		value: {
			handler(value) {
				if(value == null) {
					this.value = undefined
				}
			},
			immediate: true
		},

		defaultValue: {
			handler(value) {
				this.value = value
			},
			immediate: true
		}
	}
}