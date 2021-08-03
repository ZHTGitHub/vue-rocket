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
			this.$bus.on('ALL_VALUE_VALID', () => {

				if(this.btnType === 'submit') {
					console.log('当前表单所有值合法')
					this.$emit('click', { btnEvent: this.btnEvent, btnType: this.btnType })

					this.$bus.off('VALIDATE_FORM')
					this.$bus.off('RESET_FORM')
					this.$bus.off('CLEAR_FORM')
					this.$bus.off('ALL_VALUE_VALID')
				}
				
			})
		},

		methods: {
			onClick(event) {
				this.btnEvent = event
				switch (this.btnType) {
					case 'submit':
						this.$bus.emit('VALIDATE_FORM')
						break;
					case 'reset':
						this.$bus.emit('RESET_FORM')
						break;
					case 'clear':
						this.$bus.emit('CLEAR_FORM')
						break;
					default:
						this.$emit('click', { btnEvent: this.btnEvent, btnType: this.btnType })
						break;
				}
			}
		}
	}
</script>