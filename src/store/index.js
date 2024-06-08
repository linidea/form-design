import Vue from "vue";
import Vuex from "vuex";

// Import the module
import home from "./module/home";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {home}
})
