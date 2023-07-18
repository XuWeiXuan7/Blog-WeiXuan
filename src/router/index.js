import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('../view/Home/index.vue'),
        }, {
            path: '/time',
            component: () => import('../view/Time/index.vue'),
        },
        {
            path: '/classification',
            component: () => import('../view/Classification/index.vue'),
        },
        {
            path: '/works',
            component: () => import('../view/Work/index.vue'),
        },
        {
            path: '/friends',
            component: () => import('../view/Friends/index.vue'),
        },
        {
            path: '/gossip',
            component: () => import('../view/Gossip/index.vue'),
        },
        {
            path: '/about',
            component: () => import('../view/About/index.vue'),
        }
    ]
})