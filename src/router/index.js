import Vue from 'vue';
import VueRouter from 'vue-router'
import BaseRoutes from '@/router/route/base';
import DesignerRoutes from '@/router/route/designer';

Vue.use(VueRouter);

const routes = [
    ...BaseRoutes,
    ...DesignerRoutes
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    next();
})
export default router;
