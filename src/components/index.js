import Vue from 'vue'
import ZBtn from './ZBtn'
import ZTextField from './ZTextField'
import ZSelect from './ZSelect'
import ZCheckboxs from './ZCheckboxs'
import ZRadios from './ZRadios'
import ZSwitch from './ZSwitch'

export default () => {
	Vue.component('z-btn', ZBtn)
	Vue.component('z-text-field', ZTextField)
	Vue.component('z-select', ZSelect)
	Vue.component('z-checkboxs', ZCheckboxs)
	Vue.component('z-radios', ZRadios)
	Vue.component('z-switch', ZSwitch)
}