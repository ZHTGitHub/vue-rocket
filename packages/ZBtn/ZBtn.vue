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
	export default {
		name: 'ZBtn',
		props: {
			formId: {
				type: String,
				required: false
			},

			btnType: {
				validator(value) {
					return ['normal', 'new', 'modify', 'detail', 'delete', 'reset', 'clear', 'submit'].indexOf(value) !== -1
				},
				default: 'normal'
			},

			lockedTime: {
				type: [Number, String],
				default: 2500
			},

			absolute: {
				type: Boolean,
				default: false
			},

			block: {
				type: Boolean,
				default: false
			},

			bottom: {
				type: Boolean,
				default: false
			},

			color: {
				type: String,
				required: false
			},

			depressed: {
				type: Boolean,
				default: false
			},

			disabled: {
				type: Boolean,
				default: false
			},

			elevation: {
				type: [Number, String],
				required: false
			},

			fab: {
				type: Boolean,
				default: false
			},

			fixed: {
				type: Boolean,
				default: false
			},

			height: {
				type: [Number, String],
				required: false
			},

			icon: {
				type: Boolean,
				default: false
			},

			large: {
				type: Boolean,
				default: false
			},

			larger: {
				type: Boolean,
				default: false
			},

			left: {
				type: Boolean,
				default: false
			},

			outlined: {
				type: Boolean,
				default: false
			},

			plain: {
				type: Boolean,
				default: false
			},

			right: {
				type: Boolean,
				default: false
			},

			rounded: {
				type: Boolean,
				default: false
			},

			small: {
				type: Boolean,
				default: false
			},

			smaller: {
				type: Boolean,
				default: false
			},

			tile: {
				type: Boolean,
				default: false
			},

			top: {
				type: Boolean,
				default: false
			},

			width: {
				type: [Number, String],
				required: false
			}
		},

		data() {
			return {
				btnEvent: null,
        oldTime: null
			}
		},

		created() {
			this.$bus.on('ZHT_ALL_VALUE_VALID', (formId) => {
				if(this.btnType === 'submit') {

					if(this.formId === formId) {
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
			},

			lockClick() {
				if(this.oldTime == null) {
					this.oldTime = new Date().getTime()
					return true
				}else {
					let newTime = new Date().getTime()
					if(newTime - this.oldTime > this.lockedTime) {
						this.oldTime = new Date().getTime()
						return true
					}else {
						return false
					}
				}
			}
		}
	}
</script>

<style scoped lang="css">
	@import url("../styles/styles.css");
</style>