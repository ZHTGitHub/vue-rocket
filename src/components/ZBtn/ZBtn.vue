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
				// if(this.btnType === 'submit') {

				// }
				this.$emit('click', { btnEvent: event, btnType: this.btnType })
			}
		}
	}
</script>