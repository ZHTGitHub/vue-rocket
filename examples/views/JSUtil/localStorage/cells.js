const importCode =
` import { localStorage } from 'vue-rocket'
`

const setCode =
` // 1、存储名为 name 的一个值 Leslie
  localStorage.set('name', 'Leslie')

  // 2、通过对象的形式存储 name、profile 对应的值
  localStorage.set({
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
  localStorage.get('name')

  // 2、返回名称为 name、profile 对应的值，若不存在返回 null
  localStorage.get(['name', 'profile'])
`

const deleteCode =
` // 1、删除名称为 name 的信息
  localStorage.delete('name')

  // 2、删除名称为 name、profile 对应的信息
  localStorage.delete(['name', 'profile'])
`

const clearCode = 
` // 清空 localStorage 中所有信息
  localStorage.clear()
`

export default {
  importCode,
  setCode,
  getCode,
  deleteCode,
  clearCode
}