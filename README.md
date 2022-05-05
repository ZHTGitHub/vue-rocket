# 超快速开发后台管理系统，统一管理表单数据，常用JS方法封装，提供丰富的全局样式。


## Install
```shell
npm install vue-rocket -S
```


## Quick Start
``` javascript
import Vue from 'vue'
import VueRocket from 'vue-rocket'
import 'vue-rocket/lib/vuerocket.css'

Vue.use(VueRocket)

// or
import {
  ZBtn,
  ZSelect
  // ...
} from 'vue-rocket'

Vue.component(ZBtn.name, ZBtn)
Vue.component(ZSelect.name, ZSelect)
```


``` javascript
import Vue from 'vue'
import Vuex from 'vuex'
import { forms } from 'vue-rocket'

Vue.use(Vuex)

const store = new Vuex.Store({
  ...forms
})
```


## Browser Support
Modern browsers and IE11/Safari 9(Supported with polyfill).
