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

		autocomplete: {
			validator(value) {
				return ~['on', 'off'].indexOf(value)
			},
			default: 'off'
		},

		autofocus: {
			type: Boolean,
			default: false
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
			required: false
		},

		dark: {
			type: Boolean,
			default: false
		},

		defaultValue: {
			type: [String, Number, Boolean, Array, Object],
			default: undefined
		},

		dense: {
			type: Boolean,
			default: false
		},

		disabled: {
			type: Boolean,
			default: false
		},

		error: {
			type: Boolean,
			default: false
		},

		filled: {
			type: Boolean,
			default: false
		},

		hideDetails: {
			type: Boolean,
			default: false
		},

		hint: {
			type: String,
			required: false
		},

		label: {
			type: String,
			required: false
		},

		outlined: {
			type: Boolean,
			default: false
		},

		persistentHint: {
			type: Boolean,
			default: false
		},

		persistentPlaceholder: {
			type: Boolean,
			default: false
		},

		placeholder: {
			typeof: String,
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

		solo: {
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

		type: {
			validator(value) {
				return ~['text', 'password'].indexOf(value)
			},
			default: 'text'
		},

		validation: {
			type: Array,
			required: false
		},

		width: {
			type: [String, Number],
			validator(value) {
				if(typeof +value === 'number') {
					return `${ value }px`
				}else {
					return value
				}
			}
		}
	},

	data() {
		return {
			incorrect: false,
			errorMessage: ''
		}
	},

	beforeDestroy() {
		this.$store.commit('DELETE_FORM_KEY', {
			formId: this.formId,
			formKey: this.formKey
		})
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
				return undefined
			}
		},

		breadth() {
			return typeof +this.width === 'number' ? `${ this.width }px` : this.width
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