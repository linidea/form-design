import Vue from 'vue'
import App from './App'
import router from './router'

// 表单设计器
// import FormDesign from './designer/form';

// 注册表单设计器
// Vue.use(FormDesign)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
