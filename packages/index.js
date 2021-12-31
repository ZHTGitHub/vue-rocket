import ZAutocomplete from './ZAutocomplete'
import ZBtn from './ZBtn'
import ZBtnToggle from './ZBtnToggle'
import ZCalendar from './ZCalendar'
import ZCheckbox from './ZCheckbox'
import ZCheckboxs from './ZCheckboxs'
import ZDatePicker from './ZDatePicker'
import ZDrawer from './ZDrawer'
import ZDropdown from './ZDropdown'
import ZDynamicForm from './ZDynamicForm'
import ZFileInput from './ZFileInput'
import ZPagination from './ZPagination'
import ZRadios from './ZRadios'
import ZSelect from './ZSelect'
import ZSwitch from './ZSwitch'
import ZTextarea from './ZTextarea'
import ZTextField from './ZTextField'
import ZUpload from './ZUpload'

import rocket from './scripts/rocket'
import forms from './scripts/forms'
import R from './scripts/tools'
import './styles/styles.scss'

const components = [
	ZAutocomplete,
	ZBtn,
	ZBtnToggle,
	ZCalendar,
	ZCheckbox,
	ZCheckboxs,
	ZDatePicker,
	ZDrawer,
	ZDropdown,
	ZDynamicForm,
	ZFileInput,
	ZPagination,
	ZRadios,
	ZSelect,
	ZSwitch,
	ZTextarea,
	ZTextField,
	ZUpload
]

const install = function (Vue) {
	if(install.installed) return
	components.map(component => Vue.component(component.name, component))
}

if(typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export {
	rocket,
	forms,
	R
}

export default {
	install,
	ZAutocomplete,
	ZBtn,
	ZBtnToggle,
	ZCalendar,
	ZCheckboxs,
	ZDatePicker,
	ZDrawer,
	ZDropdown,
	ZDynamicForm,
	ZFileInput,
	ZPagination,
	ZRadios,
	ZSelect,
	ZSwitch,
	ZTextarea,
	ZTextField,
	ZUpload
}