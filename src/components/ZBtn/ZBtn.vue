<template>
	<div class="z-btn">
		<md-button 
			:class="['md-raised', `md-${ color }`]"
			@click="onClick"
		>
			<slot></slot>
		</md-button>
	</div>
</template>

<script>
	export default {
		name: 'ZBtn',
		props: {
			color: {
				type: String,
				validator(value) {
					return ['primary', 'warning', 'accent', 'disabled'].indexOf(value) !== -1
				},
				default: undefined
			}
		},

		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>