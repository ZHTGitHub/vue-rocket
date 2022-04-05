import Vue from 'vue'
import ZTypographyMixins from '../ZTypographyMixins'
import '../style.scss'

const Title = Vue.component('ZTypography.Title', {
  mixins: [ZTypographyMixins],

  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  
  render(createElement) {
    return createElement(
      'h' + this.level,

      {
        class: [
          'z-typography', 
          'z-typography-' + this.type,
          this.disabled ? 'z-typography-disabled' : ''
        ]
      },

      [
        (() => {
          let currentContent = this.$slots.default

          function wrap(needed, tag) {
            if(!needed) return

            currentContent = createElement(tag, {}, [currentContent])
          }

          wrap(this.strong, 'strong')
          wrap(this.underline, 'u')
          wrap(this.delete, 'del')
          wrap(this.code, 'code')
          wrap(this.mark, 'mark')
          // wrap(this.keyboard, 'kbd')
          wrap(this.italic, 'i')

          return currentContent
        })(),

        // icon
        (() => {
          if(this.editable) {
            return createElement(
              'div', 
    
              {
                style: {
                  border: 0,
                  background: 'transparent',
                  padding: 0,
                  lineHeight: 'inherit',
                  display: 'inline-block'
                }
              },
    
              [
                createElement(
                  'v-icon', 
                  'mdi-circle-edit-outline'
                )
              ]
            )
          }
        })()
      ]
    )
  },
})

export default Title

