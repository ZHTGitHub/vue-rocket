import { mapState } from 'vuex'

const defaultDessertsParams = {
	pageSize: 10,
	pageNum: 1
}

export default {
	data() {
		return {
			searchId: 'Search',
			searchFormId: '',

			dessertsParams: {},
			desserts: [],
			ids: [],
			detail: {},

			pagination: {
				total: 0
			}
		}
	},

	created() {
		this.getDesserts()
	},

	methods: {
		// 检索
		onSearch: function() {
			this.dessertsParams = {
				...this.dessertsParams,
				...this.forms[this.searchFormId],
				...defaultDessertsParams
			}
			this.getDesserts()
		},

		// 获取列表
		async getDesserts() {
			if(this.getHandler) {
				const result = await this.$store.dispatch(this.getHandler, this.dessertsParams)
				if(result) {
					this.desserts = result.data
					this.pagination.total = result.total
				}
				return result
			}
		},

		// 获取详情
		async getDetail(item = {}, state) {
			switch (state) {
				case 'N':
					
					break;
			
				default:
					break;
			}
		}
	},

	computed: {
		...mapState('forms')
	}
}