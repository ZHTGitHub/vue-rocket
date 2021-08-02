import validator from './validator'

export default {
  props: {
		rules: {
			type: [String, Array],
			required: false
		}
	},

	data() {
		return {
			errorMessage: ''
		}
	},

	created() {
		this.$bus.on('validate', () => {
			this.value = this.value === undefined ? '' : this.value
			console.log(this.value)
			this.validator()
		})

		this.$bus.on('reset', () => {
			this.reset()
		})
	},

	methods: {
		validator() {
			if(this.value !== undefined) {
				for(let item of this.rules) {
					const rule = Object.keys(item)[0]

					if(!validator[rule]) {
						return
					}

					if(!validator[rule](this.value)) {
						this.errorMessage = item.message
						return
					}else {
						this.errorMessage = ''
					}
				}
			}
		},

		reset() {
			this.errorMessage = ''
		}
	},

	watch: {
		value: {
			handler() {
				this.validator()
			}
		}
	}
}