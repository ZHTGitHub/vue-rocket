const code = 
` import { Toasted } from 'vue-rocket'

  // 自定义对应 Toasted 类型的值
  const customTypes = new Map([
    [200, 'success'],
    [300, 'info'],
    [400, 'warning'],
    [500, 'error']
  ])

  // 与 vue-toasted 的 options 保持一致
  const customOptions = {}

  // 可直接 const toasted = new Toasted()
  const toasted = new Toasted(customTypes, customOptions)
`

export default {
  code
}