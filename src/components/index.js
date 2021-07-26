import Vue from 'vue'
import ZBtn from './ZBtn/ZBtn.vue'
import ZText from './ZInput/ZText.vue'

export default () => {
    Vue.component('z-button', ZBtn)
    Vue.component('z-input', ZText)
}

