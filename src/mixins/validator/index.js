import FormMixins from '../form'

import validator from './validator'

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
			errorMessage: ''
		}
	},

	watch: {
		value: {
			handler(value) {
				if(value !== undefined) {
					for(let item of this.rules) {
						const rule = Object.keys(item)[0]

						if(!validator[rule]) {
							return
						}

						if(!validator[rule](value)) {
							this.errorMessage = item.message
							return
						}else {
							this.errorMessage = ''
						}
					}
				}

			}
		}
	}
}