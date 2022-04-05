
// 通用
import ZBtn from './ZBtn'
import ZTypography from './ZTypography'
import { 
	Paragraph as ZTypographyParagraph,
	Text as ZTypographyText,
	Title as ZTypographyTitle
} from './ZTypography'

// 导航
import ZPagination from './ZPagination'

// 数据录入
import ZAutocomplete from './ZAutocomplete'
import ZBtnToggle from './ZBtnToggle'
import ZCheckbox from './ZCheckbox'
import ZCheckboxs from './ZCheckboxs'
import ZDatePicker from './ZDatePicker'
import ZDynamicForm from './ZDynamicForm'
import ZFileInput from './ZFileInput'
import ZRadios from './ZRadios'
import ZSelect from './ZSelect'
import ZSwitch from './ZSwitch'
import ZTextarea from './ZTextarea'
import ZTextField from './ZTextField'
import ZUpload from './ZUpload'

// 其它
import ZDrawImage from './ZDrawImage'

import rocket from './scripts/rocket'
import forms from './scripts/forms'
import R from './scripts/tools'
import './styles/styles.scss'

const components = [
	ZBtn,
	ZTypography,
	ZTypographyParagraph,
	ZTypographyText,
	ZTypographyTitle,

	ZPagination,

	ZAutocomplete,
	ZBtnToggle,
	ZCheckbox,
	ZCheckboxs,
	ZDatePicker,
	ZDynamicForm,
	ZFileInput,
	ZRadios,
	ZSelect,
	ZSwitch,
	ZTextarea,
	ZTextField,
	ZUpload,

	ZDrawImage
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
	ZBtn,
	ZTypography,
	ZTypographyParagraph,
	ZTypographyText,
	ZTypographyTitle,

	ZPagination,

	ZAutocomplete,
	ZBtnToggle,
	ZCheckboxs,
	ZDatePicker,
	ZDynamicForm,
	ZFileInput,
	ZRadios,
	ZSelect,
	ZSwitch,
	ZTextarea,
	ZTextField,
	ZUpload,

	ZDrawImage
}