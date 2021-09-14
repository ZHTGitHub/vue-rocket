<template>
	<div class="z-btn">
		<v-btn
			:absolute="absolute"
			:block="block"
			:bottom="bottom"
			:color="color"
			:depressed="depressed"
			:disabled="disabled"
			:fab="fab"
			:fixed="fixed"
			:icon="icon"
			:large="large"
			:left="left"
			:outlined="outlined"
			:plain="plain"
			:right="right"
			:rounded="rounded"
			:small="small"
			:tile="tile"
			:top="top"
			:x-large="larger"
			:x-small="smaller"
			@click="onClick"
		>
			<slot></slot>
		</v-btn>
	</div>
</template>

<script>
	import BtnMixins from '../mixins/BtnMixins'
	import $bus from '../scripts/emitter'

	export default {
		name: 'ZBtn',
		mixins: [BtnMixins],

		props: {
			formId: {
				type: String,
				required: false
			},

			btnType: {
				validator(value) {
					return ~['clear', 'reset', 'validate'].indexOf(value)
				},
				required: false
			}
		},

		data() {
			return {
				actions: new Map([
					['clear', 'ZHT_CLEAR_FORM'],
					['reset', 'ZHT_RESET_FORM'],
					['validate', 'ZHT_VALIDATE_FORM'],
					[undefined, 'click']
				])
			}
		},

		created() {
			// 当前表单合法
			$bus.on('ZHT_FORM_VALID', (formId) => {
				if(this.btnType === 'validate') {
					if(this.formId === formId) {
						this.$emit('click')
						$bus.off('ZHT_FORM_VALID')
					}
				}
			})

			// 当前表单已重置
			$bus.on('ZHT_FORM_RESET', (formId) => {
				if(this.btnType === 'reset') {
					if(this.formId === formId) {
						this.$emit('click')
						$bus.off('ZHT_FORM_RESET')
					}
				}
			})

			// 当前表单已清空
			$bus.on('ZHT_FORM_CLEARED', (formId) => {
				if(this.btnType === 'clear') {
					if(this.formId === formId) {
						this.$emit('click')
						$bus.off('ZHT_FORM_CLEARED')
					}
				}
			})
		},

		methods: {
			onClick() {
				const action = this.actions.get(this.btnType)
				if(action === 'click') {
					this.$emit(action)
					return
				}

				$bus.emit(action, this.formId)
			}
		}
	}
</script>