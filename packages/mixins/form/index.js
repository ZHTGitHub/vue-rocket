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

		success: {
			type: Boolean,
			default: false
		}
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
	}
}