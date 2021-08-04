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
	export default {
		name: 'ZBtn',
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

		data() {
			return {
				btnEvent: null
			}
		},

		created() {
			this.$bus.on('ZHT_ALL_VALUE_VALID', (formId) => {
				if(this.btnType === 'submit') {

					if(this.formId === formId) {
						console.log('当前表单所有值合法')
						this.$emit('click', { btnEvent: this.btnEvent, btnType: this.btnType })
					}
					
					this.$bus.off('ZHT_ALL_VALUE_VALID')
				}
				
			})
		},

		methods: {
			onClick(event) {
				this.btnEvent = event
				switch (this.btnType) {
					case 'submit':
						this.$bus.emit('ZHT_VALIDATE_FORM', this.formId)
						break;
					case 'reset':
						this.$bus.emit('ZHT_RESET_FORM', this.formId)
						break;
					case 'clear':
						this.$bus.emit('ZHT_CLEAR_FORM', this.formId)
						break;
					default:
						this.$emit('click', { btnEvent: this.btnEvent, btnType: this.btnType })
						break;
				}
			}
		}
	}
</script>