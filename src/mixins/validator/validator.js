const validator = {
	required: (value) => {
		return /[\S]+/.test(value)
	},
	email: (value) => {
		return value.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
	},
	// min: (value) => {

	// },
	// max: (value) => {

	// },
	// min_value: (value) => {

	// },
	// max_value: (value) => {

	// },
	// length: (value) => {

	// },
	// numeric: (value) => {

	// },
	// excluded: (value) => {

	// },
	// mimes: (value) => {

	// },
	// size: (value) => {

	// },
	// url: (value) => {

	// },
	// regex: (value) => {

	// }
}

export default validator