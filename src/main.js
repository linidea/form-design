import Vue from 'vue'
import App from './App'

// 表单设计器
import FormDesign from './designer/form';

// 注册表单设计器
Vue.use(FormDesign)

Vue.config.productionTip = false

new Vue({render: h => h(App)}).$mount('#app')
