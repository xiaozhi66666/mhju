import storage from "./utils/storage";

import store from "./store";

import router from '@/router'
import { Message } from "element-ui";
const whiteList = ['/login', '/404']
const isLogin = store.state.userInfo.token
router.beforeEach((to, from, next) => {
    // 已登录
    if (isLogin) {
        // next(to.path)
        // 判断是否登录后要跳转的是登录页 => 是 => 强制不允许再次访问login页面 => 否则放行
        if (to.path == '/login') {
            store.commit('loginOut')
            next('/')
        } else {
            next()
        }
    } else {
        // 未登录
        // 未登录，可访问路由白名单
        const isWhite = whiteList.includes(to.path)
        if (isWhite) {
            next()
        } else {
            Message({ message: '暂未登录，请先登录', type: 'error' })
            next('/login')
        }
    }
})
