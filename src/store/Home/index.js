const Home = {
    namespaced: true,
    state: {
        navActiveNum: 0
    },
    mutations: {
        upDateActive(state, num) {
            state.navActiveNum = num
        }
    },
    actions: {
        //存储导航栏高亮状态
        setActive({ commit }, num) {
            commit('upDateActive', num)
        }
    },
    getters: {

    },

}
export default Home