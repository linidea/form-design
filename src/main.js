import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);import Vue from 'vue'
import App from './App'

import AvueFormDesign from '../packages/';
import AvueUeditor from 'avue-plugin-ueditor'

Vue.use(window.AVUE)
Vue.use(AvueFormDesign)
Vue.use(AvueUeditor)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
