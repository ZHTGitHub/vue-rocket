import { mapState } from 'vuex'

const defaultParams = {
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

			params: {},
			desserts: [],
			ids: [],
			detail: {},

			pagination: {
				total: 0
			},

			search: ''
		}
	},

	created() {
		this.stickFormId()
		this.getList()
	},

	methods: {
		// 本地检索
		onLocalSearch() {
			const searchForm = this.forms[this.searchFormId]
			this.search = searchForm.search
		},

		// 检索
		onSearch() {
			this.params = {
				...this.params,
				...this.forms[this.searchFormId],
				...defaultParams
			}
			this.getList()
		},

		// 分页
		handlePagination() {

		},

		// 获取列表
		async getList() {
			if(this.getHandler) {
				const result = await this.$store.dispatch(this.getHandler, this.params)
				this.loading = false
				if(result) {
					console.log(result)
					this.desserts = result.data
					this.pagination.total = result.total
				}
				return result
			}
		},

		// 获取详情
		async getDetail() {
			
		},

		stickFormId() {
			this.searchFormId = this.formId + this.searchId
		}
	},

	computed: {
		...mapState(['forms'])
	}
}