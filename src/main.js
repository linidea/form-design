import Vue from 'vue'
import App from './App'
//
import router from './router'
import store from './store'

//
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
console.info(
    `
    __                      __     _            ______            _ 
   / /_    __  __          / /    (_)   ____   / ____/  __  __   (_)
  / __ \\  / / / /         / /    / /   / __ \\ / / __   / / / /  / / 
 / /_/ / / /_/ /         / /___ / /   / / / // /_/ /  / /_/ /  / /  
/_.___/  \\__, /         /_____//_/   /_/ /_/ \\____/   \\__,_/  /_/   
        /____/                                                      
`
);
