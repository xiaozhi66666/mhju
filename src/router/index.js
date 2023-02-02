import Vue from 'vue'

import Router from 'vue-router'

// import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/Login',
        },
        {
            path: '/login',
            component: () => import('@/components/Login')
        },
        {
            path: '/home',
            component: () => import('@/components/Home')
        }
    ],
    mode: 'history'
})