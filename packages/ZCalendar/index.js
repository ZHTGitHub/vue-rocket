import ZCalendar from './ZCalendar'

ZCalendar.install = function (Vue) {
  Vue.component(ZCalendar.name, ZCalendar)
}

export { ZCalendar }
export default ZCalendar