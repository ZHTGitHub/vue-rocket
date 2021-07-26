// import { mapState } from 'vuex'
import FormMixins from './FormMixins'

const validator = new Map([
	['required', ''],
	['email', ''],
	['min', ''],
	['max', ''],
	['min_value', ''],
	['max_value', ''],
	['length', ''],
	['numeric', ''],
	['excluded', ''],
	['mimes', ''],
	['size', ''],
	['url', ''],
	['regex', '']
])

export default {
	mixins: [FormMixins],

  props: {
		rules: {
			type: [String, Array],
			required: false
		}
	},

	data() {
		return {
			errorItem: {},
			errorMessage: ''
		}
	},

	// computed: {
	// 	...mapState(['forms'])
	// },

	watch: {
		value: {
			handler(value) {

				if(value !== undefined) {
					console.log(value)
					console.log(this.rules)

					for(let item of this.rules) {
						this.errorItem = item
						

						if(!value) {
							this.errorMessage = this.errorItem.message
						}
						else {
							this.errorMessage = ''
						}

						console.log(item)
					}
				}

			}
		}
	}
}