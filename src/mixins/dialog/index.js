export default {
  data() {
		return {
			dgId: 'Dialog',
			dgFormId: '',
			dgShow: false,
			/**
			 * N: New
			 * M: Modify
			 * D: Detail
			 */ 
			dgState: '',
			dgTitle: '',

			dgDessertsParams: {},
			dgDesserts: [],
			dgIds: [],
			dgDetail: {},

			dgPagination: {
				total: 0
			}
		}
	},

	created() {
		this.getDgDesserts()
	},

	methods: {
		async getDgDesserts() {
			if(this.dgGetHandler) {
				const result = await this.$store.dispatch(this.dgGetHandler, this.dessertsParams)
				if(result) {
					this.desserts = result.data
					this.pagination.total = result.total
				}
				return result
			}
		}
	},
}