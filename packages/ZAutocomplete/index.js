import ZAutocomplete from './ZAutocomplete'

ZAutocomplete.install = function (Vue) {
  Vue.component(ZAutocomplete.name, ZAutocomplete)
}

export { ZAutocomplete }
export default ZAutocomplete