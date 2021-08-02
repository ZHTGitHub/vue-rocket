<template>
	<div class="z-btn">
		<v-btn
			:color="color"
			:plain="plain"
			:small="small"
			:large="large"
			:disabled="disabled"
			@click="onClick"
		>
			<slot></slot>
		</v-btn>
	</div>
</template>

<script>
	// import FormValidatorMixins from '../../mixins/validator' 

	export default {
		name: 'ZBtn',
		// mixins: [FormValidatorMixins],
		props: {
			formId: {
				type: String,
				required: false
			},
			color: {
				validator(value) {
					return ['normal', 'primary', 'success', 'warning', 'error'].indexOf(value) !== -1
				},
				default: 'primary'
			},
			btnType: {
				validator(value) {
					return ['normal', 'new', 'modify', 'detail', 'delete', 'reset', 'clear', 'submit'].indexOf(value) !== -1
				},
				default: 'normal'
			},
			plain: {
				type: Boolean,
				default: false
			},
			small: {
				type: Boolean,
				default: false
			},
			large: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},

		methods: {
			onClick(event) {
				if(this.btnType === 'submit') {
					this.$bus.emit('validate')
				}
				else if(this.btnType === 'reset') {
					this.$store.commit('CLEAN_FORM', {
						formId: this.formId
					})
					this.$bus.emit('reset')
				}
				this.$emit('click', { btnEvent: event, btnType: this.btnType })
			}
		}
	}
</script>