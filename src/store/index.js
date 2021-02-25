import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        looked(state, payload) {
            console.log(payload)
            state.counter++
        }
    },
    getters: {},
    actions: {},
    modules: {}
})
