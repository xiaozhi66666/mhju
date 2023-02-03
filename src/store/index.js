import Vue from 'vue'
import { loginAPI } from '@/api/user'
import { Message } from 'element-ui'
import storage from '@/utils/storage';
import router from '@/router';
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    userInfo: {}
}

const mutations = {
    getLogin(state, patLoad) {
        state.userInfo = patLoad
        // 存入本地
        storage.set('userInfo', state.userInfo)
    }
}

const actions = {
    async getLoginAction(content, userInfo) {
        // 校验是否通过

        const { data } = await loginAPI(userInfo)
        const { status, message } = data.data
        if (status === 200) {
            Message({ message, type: 'success' })
            content.commit('getLogin', data.data)
            // this.getLogin(data.data)
            router.push(
                { path: '/home' }
            )
        }

    }
}

const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters

})