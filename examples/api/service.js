import axios from 'axios'

/**
 * @description 基础路径
 */ 
function arenaBaseUrl() {
    const devUrl = ``
    const proUrl = ``

    const env = process.env.NODE_ENV || 'development'
    
    if (env.trim() === 'development') {
        return devUrl
    }
    return proUrl
}

/**
 * @description 创建请求实例
 */ 
function createService() {
    // 创建一个 axios 实例
    const service = axios.create()

    // 请求拦截
    service.interceptors.request.use(
        config => {
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )

    // 响应拦截
    service.interceptors.response.use(
        response => {
            const dataAxios = response.data
            const { success } = dataAxios
            const code = dataAxios.code || null
            // const message = dataAxios.message || null

            if(success) {
                switch (code) {
                    case 1001: break 
                    default: break
                }
            }else {
                switch (code) {
                    case 1001: break
                    default: break
                }
            }

            dataAxios.api = response.config.url
            return dataAxios
        },
        error => {
            const status = error.response.status
            switch (status) {
                case 400: error.message = '请求错误'; break
                case 401: error.message = '未授权，请登录'; break
                case 403: error.message = '拒绝访问'; break
                case 404: error.message = '请求地址不存在'; break
                case 408: error.message = '请求超时'; break
                case 500: error.message = '服务器内部错误'; break
                case 501: error.message = '服务未实现'; break
                case 502: error.message = '网关错误'; break
                case 503: error.message = '服务不可用'; break
                case 504: error.message = '网关超时'; break
                case 505: error.message = 'HTTP版本不受支持'; break
                default: break
            }
            return Promise.reject(error)
        }
    )

    return service
}

/**
 * @description 创建请求方法
 * @param {Object} service axios 实例
 */ 
function createRequest(service) {
    return function(config) {
        // const token = util.storage.get('token')
        const headers = {
            // Authorization: `Bearer ${ token }`,
            'Content-Type': 'application/json;charset=UTF-8'
        }
        const defaultConfig = {
            method: 'get',
            baseURL: arenaBaseUrl(),
            headers,
            data: {},
            // timeout: 3000
        }
        const assignConfig = Object.assign(defaultConfig, config)
        assignConfig.headers.Authorization = headers.Authorization
        return service(assignConfig)
    }
}

const service = createService()
const request = createRequest(service)

export default request