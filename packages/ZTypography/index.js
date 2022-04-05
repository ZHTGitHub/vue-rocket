import ZTypography from './ZTypography'
import Title from './Title'
import Text from './Text'
import Paragraph from './Paragraph'

ZTypography.install = function(Vue) {
  Vue.component(ZTypography.name, ZTypography)
}

Paragraph.install = function(Vue) {
  Vue.component(Paragraph.name, Paragraph)
}

Text.install = function(Vue) {
  Vue.component(Text.name, Text)
}

Title.install = function(Vue) {
  Vue.component(Title.name, Title)
}

export {
  Paragraph,
  Text,
  Title
}

export default ZTypography