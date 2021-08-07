import Vue from 'vue'
import ZApp from './ZApp'
import ZBtn from './ZBtn'
import ZTextField from './ZTextField'
import ZSelect from './ZSelect'
import ZCheckboxs from './ZCheckboxs'
import ZRadios from './ZRadios'

export default () => {
	Vue.component('z-app', ZApp)
	Vue.component('z-btn', ZBtn)
	Vue.component('z-text-field', ZTextField)
	Vue.component('z-select', ZSelect)
	Vue.component('z-checkboxs', ZCheckboxs)
	Vue.component('z-radios', ZRadios)
}

