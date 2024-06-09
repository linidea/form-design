import Config from './component'
import FormDesign from './index.vue'
import AvueUeditor from 'avue-plugin-ueditor'

import {getAsVal} from './util/index.js'

export default {
    install(Vue) {
        Vue.use(window.AVUE);
        Vue.use(Config);
        Vue.component('Avue' + FormDesign.name, FormDesign);
        Vue.use(AvueUeditor); // 代码编辑需要用到的插件

        Vue.prototype.getAsVal = getAsVal;
    }
}
