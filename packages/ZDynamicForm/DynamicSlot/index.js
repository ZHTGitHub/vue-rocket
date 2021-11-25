import DynamicSlot from './DynamicSlot'

DynamicSlot.install = function (Vue) {
  Vue.component(DynamicSlot.name, DynamicSlot)
}

export { DynamicSlot }
export default DynamicSlot