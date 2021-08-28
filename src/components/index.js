import Vue from 'vue'
import ZBtn from './ZBtn'
import ZTextField from './ZTextField'
import ZSelect from './ZSelect'
import ZCheckboxs from './ZCheckboxs'
import ZRadios from './ZRadios'
import ZSwitch from './ZSwitch'
import ZPagination from './ZPagination'

import UsageDemo from '@/views/demo/demo-components/UsageDemo'

export default () => {
	Vue.component('z-btn', ZBtn)
	Vue.component('z-text-field', ZTextField)
	Vue.component('z-select', ZSelect)
	Vue.component('z-checkboxs', ZCheckboxs)
	Vue.component('z-radios', ZRadios)
	Vue.component('z-switch', ZSwitch)
	Vue.component('z-pagination', ZPagination)
	Vue.component('usage-demo', UsageDemo)
}