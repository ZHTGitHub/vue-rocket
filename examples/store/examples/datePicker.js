import datePickerAttributes from '../../mockdata/date-picker-attributes.json'
import datePickerSlots from '../../mockdata/date-picker-slots.json'

const actions = {
  GET_DATE_PICKER_ATTRIBUTES() {
    return datePickerAttributes
  },

  GET_DATE_PICKER_SLOTS() {
    return datePickerSlots
  }
}

export default {
  actions
}