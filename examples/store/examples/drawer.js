import drawerAttributes from '../../mockdata/drawer-attributes.json'
import drawerMethods from '../../mockdata/drawer-methods.json'
import drawerSlots from '../../mockdata/drawer-slots.json'

const actions = {
  GET_DRAWER_ATTRIBUTES() {
    return drawerAttributes
  },

  GET_DRAWER_METHODS() {
    return drawerMethods
  },

  GET_DRAWER_SLOTS() {
    return drawerSlots
  }
}

export default {
  actions
}