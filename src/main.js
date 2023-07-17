import Vue from 'vue'
import '@/assets/css/mixin.less'
import App from './App.vue'
Vue.config.productionTip = false
import '@/assets/css/base.less'
import '@/assets/css/common.less'
import '@/assets/css/icon.less'
import router from '@/router/index'
import './utils/element'
import './utils/antdesign'
import 'ant-design-vue/dist/antd.css';
import "@/assets/css/mixin.less";
import 'animate.css'
import store from '@/store/index'
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
