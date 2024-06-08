import Home from '@/home/index.vue';

export default [
    {path: '/', redirect: '/home'},
    {
        path: '/home',
        component: Home
    }
]
