import Vue from 'vue'
import { loginAPI } from '@/api/user'
import { Message } from 'element-ui'
import storage from '@/utils/storage';
import router from '@/router';
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    userInfo: storage.get('userInfo') || {}
}
const mutations = {
    getLogin(state, patLoad) {
        state.userInfo = patLoad
        // 存入本地
        storage.set('userInfo', state.userInfo)
    },
    loginOut(state) {
        // 清空vuex
        state.userInfo = {}
        // 清除本地
        storage.remove('userInfo')
    }
}

const actions = {
    async getLoginAction(content, userInfo) {
        // 校验是否通过
        const { data } = await loginAPI(userInfo)
        const { status, message } = data.data
        console.log('触发登录');
        if (status === 200) {
            Message({ message, type: 'success' })
            content.commit('getLogin', data.data)
            // this.getLogin(data.data)
            // router.push(
            //     { path: '/home' }
            // )
            router.push('/home')
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