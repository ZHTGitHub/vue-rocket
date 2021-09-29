export default {
  props: {
    absolute: {
      type: Boolean,
      default: false
    },

    block: {
      type: Boolean,
      default: false
    },

    bottom: {
      type: Boolean,
      default: false
    },

    color: {
      type: String,
      required: false
    },

    depressed: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    elevation: {
      type: [Number, String],
      required: false
    },

    fab: {
      type: Boolean,
      default: false
    },

    fixed: {
      type: Boolean,
      default: false
    },

    height: {
      type: [Number, String],
      required: false
    },

    icon: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    },

    larger: {
      type: Boolean,
      default: false
    },

    left: {
      type: Boolean,
      default: false
    },

    lockedTime: {
      type: [Number, String],
      default: 2500
    },

    outlined: {
      type: Boolean,
      default: false
    },

    plain: {
      type: Boolean,
      default: false
    },

    right: {
      type: Boolean,
      default: false
    },

    rounded: {
      type: Boolean,
      default: false
    },

    small: {
      type: Boolean,
      default: false
    },

    smaller: {
      type: Boolean,
      default: false
    },

    text: {
      type: Boolean,
      default: false
    },

    tile: {
      type: Boolean,
      default: false
    },

    top: {
      type: Boolean,
      default: false
    },

    width: {
      type: [Number, String],
      required: false
    }
  },

  data() {
    return {
      oldTime: null
    }
  },

  methods: {
    lockClick() {
      if(this.oldTime == null) {
        this.oldTime = new Date().getTime()
        return true
      }else {
        let newTime = new Date().getTime()
        if(newTime - this.oldTime > this.lockedTime) {
          this.oldTime = new Date().getTime()
          return true
        }else {
          return false
        }
      }
    }
  }
}