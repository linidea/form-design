import Vue from 'vue';
import VueRouter from 'vue-router'
import HomeRoutes from '@/router/homeRoutes';

Vue.use(VueRouter);

const routes = [
    ...HomeRoutes
]

const router = new VueRouter({
    mode: 'history', // 使用 HTML5 history 模式
    routes
})

router.beforeEach((to, from, next) => {
    next();
})
export default router;
