import Vue from 'vue'
import ZApp from './ZApp'
import ZBtn from './ZBtn'
import ZTextField from './ZTextField'

export default () => {
    Vue.component('z-app', ZApp)
    Vue.component('z-btn', ZBtn)
    Vue.component('z-text-field', ZTextField)
}

