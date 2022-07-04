// const rules = [
//   {
//     name: 'set(key, value)',
//     intrs: [
//       { text: '当 key 的类型为 String：存储名为 key 的一个值 value，若 key 存在更新 value;' },
//       { text: '当 key 的类型为 Object：通过对象的形式存储多个数据.' }
//     ],
//     params: [
//       { text: 'key (*): 任意值.' },
//       { text: 'value (*): 任意值.' }
//     ]
//   },

//   {
//     name: 'get(key)',
//     intrs: [
//       { text: '当 key 的类型为 String：获取名称为 key 的值，若 key 不存在返回 null;' },
//       { text: '当 key 的类型为 Array：返回数组里每个 key 对应的值，若 key 不存在返回 null.' }
//     ],
//     params: [
//       { text: 'key (*): 任意值.' }
//     ]
//   },

//   {
//     name: 'delete(key)',
//     intrs: [
//       { text: '当 key 的类型为 String：删除名称为 key 的信息，这个 key 对应的 value 也会被删除;' },
//       { text: '当 key 的类型为 Array：删除数组里每个 key 对应的信息，这个 key 对应的 value 也会被删除.' }
//     ],
//     params: [
//       { text: 'key (*): 任意值.' }
//     ]
//   },

//   {
//     name: 'clear()',
//     intrs: [
//       { text: '清空 localStorage 中所有信息.' }
//     ],
//     params: [
//       { text: '无.' }
//     ]
//   }
// ]

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