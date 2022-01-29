<template>
	<div class="z-btn" :class="[block ? 'd-block' : 'd-inline-block']">
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
			:loading="loading"
			:outlined="outlined"
			:plain="plain"
			:right="right"
			:rounded="rounded"
			:small="small"
			:text="text"
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
	import rocket from '../scripts/rocket'

	const btnTypes = new Map([
		['clear', 'ZHT_CLEAR_FORM'],
		['reset', 'ZHT_RESET_FORM'],
		['validate', 'ZHT_VALIDATE_FORM'],
		[undefined, 'click']
	])

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
				event: null,
				handleValid: null,
				handleReset: null,
				handleClear: null
			}
		},

		created() {
			// 当前表单合法
			rocket.on('ZHT_FORM_VALID', this.handleValid = (formId) => {
				if(this.btnType === 'validate') {
					if(this.formId === formId) {
						this.$emit('click', this.event)
					}
				}
			})

			// 当前表单已重置
			rocket.on('ZHT_FORM_RESET', this.handleReset = (formId) => {
				if(this.btnType === 'reset') {
					if(this.formId === formId) {
						this.$emit('click', this.event)
					}
				}
			})

			// 当前表单已清空
			rocket.on('ZHT_FORM_CLEARED', this.handleClear = (formId) => {
				if(this.btnType === 'clear') {
					if(this.formId === formId) {
						this.$emit('click', this.event)
					}
				}
			})
		},

		beforeDestroy() {
			rocket.off('ZHT_FORM_VALID', this.handleValid)
			rocket.off('ZHT_FORM_RESET', this.handleReset)
			rocket.off('ZHT_FORM_CLEARED', this.handleClear)
		},

		methods: {
			onClick(event) {
				this.event = event

				this.unlocked ? this.action() : this.limitEvent(this.action)
			},

			action() {
				const btnType = btnTypes.get(this.btnType)
				
				if(btnType === 'click') {
					this.$emit('click', this.event)
					return
				}

				rocket.emit(btnType, this.formId)
			}
		}
	}
</script>