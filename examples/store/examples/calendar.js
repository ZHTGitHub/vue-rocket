import calendarAttributes from '../../mockdata/calendar-attributes.json'
import calendarMethods from '../../mockdata/calendar-methods.json'

const actions = {
  GET_CALENDAR_ATTRIBUTES() {
    return calendarAttributes
  },

  GET_CALENDAR_METHODS() {
    return calendarMethods
  }
}

export default {
  actions
}