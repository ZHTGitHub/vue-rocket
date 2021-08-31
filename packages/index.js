import ZBtn from './ZBtn'
import ZCheckboxs from './ZCheckboxs'
import ZRadios from './ZRadios'
import ZSelect from './ZSelect'
import ZSwitch from './ZSwitch'
import ZTextField from './ZTextField'
import ZPagination from './ZPagination'

const components = [
	ZBtn,
	ZCheckboxs,
	ZRadios,
	ZSelect,
	ZSwitch,
	ZTextField,
	ZPagination
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