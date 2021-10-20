# admin


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


## Browser Support
Modern browsers and IE11/Safari 9(Supported with polyfill).


## LICENSE
[MIT](LICENSE)