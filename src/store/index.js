import Vue from 'vue'
import Vuex from 'vuex'
import Home from './Home'
Vue.use(Vuex)
import createPersistedstate from 'vuex-persistedstate'
export default new Vuex.Store({
    modules: {
        Home
    },
    plugins: [
        createPersistedstate({
            key: 'Home'
        })
    ]
})