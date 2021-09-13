import ZBtn from './ZBtn'
import ZBtnToggle from './ZBtnToggle'
import ZCheckboxs from './ZCheckboxs'
import ZDatePicker from './ZDatePicker'
import ZPagination from './ZPagination'
import ZRadios from './ZRadios'
import ZSelect from './ZSelect'
import ZSwitch from './ZSwitch'
import ZTextarea from './ZTextarea'
import ZTextField from './ZTextField'
import ZDrawer from './ZDrawer'

import "./styles/styles.css"

const components = [
	ZBtn,
	ZBtnToggle,
	ZCheckboxs,
	ZDatePicker,
	ZPagination,
	ZRadios,
	ZSelect,
	ZSwitch,
	ZTextarea,
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
	install,
	ZBtn,
	ZBtnToggle,
	ZCheckboxs,
	ZDatePicker,
	ZPagination,
	ZRadios,
	ZSelect,
	ZSwitch,
	ZTextarea,
	ZTextField,
	ZDrawer
}