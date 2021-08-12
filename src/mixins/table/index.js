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

			loading: true,
			loadingText: 'Loading... Please wait',

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
		this.getList()
	},

	methods: {
		// 检索
		onSearch() {
			this.dessertsParams = {
				...this.dessertsParams,
				...this.forms[this.searchFormId],
				...defaultDessertsParams
			}
			this.getList()
		},

		// 分页
		handlePagination() {

		},

		// 获取列表
		async getList() {
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
		async getDetail() {
			
		}
	},

	computed: {
		...mapState(['forms'])
	}
}