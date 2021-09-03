import ZBtn from './ZBtn'
import ZCheckboxs from './ZCheckboxs'
import ZDatePicker from './ZDatePicker'
import ZPagination from './ZPagination'
import ZRadios from './ZRadios'
import ZSelect from './ZSelect'
import ZSwitch from './ZSwitch'
import ZTextField from './ZTextField'
import ZDrawer from './ZDrawer'

const components = [
	ZBtn,
	ZCheckboxs,
	ZDatePicker,
	ZPagination,
	ZRadios,
	ZSelect,
	ZSwitch,
	ZTextField,
	ZDrawer
]

const install = function (Vue) {
	if(install.installed) return
	components.map(component => Vue.component(component.name, component))
}

if(typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install
}