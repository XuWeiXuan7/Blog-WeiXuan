import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('../view/Home/index.vue')
        }, {
            path: '/time',
            component: () => import('../view/Time/index.vue')
        }
    ]
})