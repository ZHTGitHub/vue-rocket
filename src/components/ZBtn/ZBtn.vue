<template>
	<div class="z-btn">
		<v-btn
			:color="color"
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
					return ['normal', 'primary', 'warning', 'error'].indexOf(value) !== -1
				},
				default: 'primary'
			}
		},

		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>