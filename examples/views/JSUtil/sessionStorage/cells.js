const importCode =
` import { sessionStorage } from 'vue-rocket'
`

const setCode =
` // 1、存储名为 name 的一个值 Leslie
  sessionStorage.set('name', 'Leslie')

  // 2、通过对象的形式存储 name、profile 对应的值
  sessionStorage.set({
    name: 'Leslie',
    profile: {
      name: 'Leslie',
      age: 18,
      gender: 'male'
    }
  })
`

const getCode =
` // 1、获取名称为 name 的值，若 name 不存在返回 null
  sessionStorage.get('name')

  // 2、返回名称为 name、profile 对应的值，若不存在返回 null
  sessionStorage.get(['name', 'profile'])
`

const deleteCode =
` // 1、删除名称为 name 的信息
  sessionStorage.delete('name')

  // 2、删除名称为 name、profile 对应的信息
  sessionStorage.delete(['name', 'profile'])
`

const clearCode = 
` // 清空 sessionStorage 中所有信息
  sessionStorage.clear()
`

export default {
  importCode,
  setCode,
  getCode,
  deleteCode,
  clearCode
}