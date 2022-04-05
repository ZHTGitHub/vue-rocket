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
		handlePagination() {},

		// 获取列表
		async getList() {
			// 等待废弃
			if(this.getHandler) {
				const result = await this.$store.dispatch(this.getHandler, this.params)
				this.loading = false
				if(result) {
					this.desserts = result.data
					this.pagination.total = result.total
				}
				return result
			}

			if(this.dispatchList) {
        const result = await this.$store.dispatch(this.dispatchList)

        if(result.code === 200) {
          this.desserts = result.items
        }

				this.loading = false
      }
		},

		// 获取详情
		async getDetail() {},

		stickFormId() {
			this.searchFormId = this.formId + this.searchId
		}
	},

	computed: {
		...mapState(['forms'])
	}
}