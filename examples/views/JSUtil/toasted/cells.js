const code = 
` import { Toasted } from 'vue-rocket'

  // 自定义对应 Toasted 类型的值
  const customTypes = new Map([
    [200, 'success'],
    [300, 'info'],
    [400, 'warning'],
    [500, 'error']
  ])

  // 默认值
  const defaultOptions = {
    closeButton: 'button',
    closeOnClick: true,
    draggable: true,
    draggablePercent: 0.6,
    hideProgressBar: true,
    icon: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    position: 'top-right',
    rtl: false,
    showCloseButtonOnHover: false,
    timeout: 5000
  }

  // 可直接 const toasted = new Toasted()
  const toasted = new Toasted(customTypes, defaultOptions)

  // 与 vue-toastification 的 options 保持一致
  const customOptions = {}
`

export default {
  code
}