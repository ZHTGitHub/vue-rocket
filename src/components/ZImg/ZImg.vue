<template>
	<div class="z-img">
		<v-img
			:height="height"
			:width="width"
			:src="src"
		></v-img>
	</div>
</template>

<script>
	export default {
		name: 'ZImg',
		props: {
			src: {
				type: String,
				default: ''
			},

			width: {
				type: [String, Number],
				default: undefined
			},

			height: {
				type: [String, Number],
				default: undefined
			}
		}
	}
</script>

<style lang="scss">
	.z-img {
		display: inline-block;
	}
</style>