import drawImageAttributes from '../../mockdata/draw-image-attributes.json'
import drawImageMethods from '../../mockdata/draw-image-methods.json'
import drawImageSlots from '../../mockdata/draw-image-slots.json'

const actions = {
  GET_DRAW_IMAGE_ATTRIBUTES() {
    return drawImageAttributes
  },

  GET_DRAW_IMAGE_METHODS() {
    return drawImageMethods
  },

  GET_DRAW_IMAGE_SLOTS() {
    return drawImageSlots
  }
}

export default {
  actions
}