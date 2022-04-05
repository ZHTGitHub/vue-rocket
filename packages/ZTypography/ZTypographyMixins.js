export default {
  props: {
    code: {
      type: Boolean,
      default: false
    },

    copyable: {
      type: Boolean,
      default: false
    },

    delete: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    editable: {
      type: [Boolean, Object],
      default: false
    },

    ellipsis: {
      type: Boolean,
      default: false
    },

    mark: {
      type: Boolean,
      default: false
    },

    italic: {
      type: Boolean,
      default: false
    },

    strong: {
      type: Boolean,
      default: false
    },

    type: {
      validator(value) {
        return ~['secondary', 'success', 'warning', 'danger'].indexOf(value)
      },
      required: false
    },

    underline: {
      type: Boolean,
      default: false
    }
  }
}