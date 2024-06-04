import Config from './component'
import FormDesign from './index.vue'

import { getAsVal, avueVersion } from '../util/index.js'

export default {
  install(Vue) {
    Vue.use(Config)
    Vue.component('Avue' + FormDesign.name, FormDesign);

    Vue.prototype.getAsVal = getAsVal
    Vue.prototype.avueVersion = avueVersion
  }
}
