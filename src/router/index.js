import Vue from 'vue'

import Router from 'vue-router'

// import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            hidden: true,
        },
        {
            path: '/login',
            name: 'login',
            hidden: true,
            component: () => import('@/components/Login')
        },
        {
            path: '/home',
            name: '学生管理',
            icon: 'fa fa-users',
            redirect: '/home/student',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: '/home/student',
                    name: '学生列表',
                    icon: 'fa fa-list',
                    component: () => import('@/components/Students/studentList.vue'),
                },
                {
                    path: '/home/info',
                    name: '信息列表',
                    icon: 'fa fa-list',
                    component: () => import('@/components/Students/InfoList.vue'),
                }, {
                    path: '/home/infos',
                    name: '信息管理',
                    icon: 'fa fa-list-alt',
                    component: () => import('@/components/Students/InfoMange.vue'),
                }, {
                    path: '/home/work',
                    name: '作业列表',
                    icon: 'fa fa-list-ul',
                    component: () => import('@/components/Students/WorkList.vue'),
                }, {
                    path: '/home/works',
                    name: '作业管理',
                    icon: 'fa fa-list',
                    component: () => import('@/components/Students/WorkMent.vue'),
                }
            ]
        },
        {
            path: '/map',
            name: '数据管理',
            icon: 'fa fa-bar-chart',
            redirect: '/map/student',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: '/map/dataView',
                    name: '数据概览',
                    icon: 'fa fa-bar-chart',
                    component: () => import('@/components/dataAnalysis/DataView.vue'),
                },
                {
                    path: '/map/mapView',
                    name: '地图预览',
                    icon: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/MapView.vue'),
                }, {
                    path: '/map/scoreMap',
                    name: '分数地图',
                    icon: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/ScoreMap.vue'),
                }, {
                    path: '/map/travelMap',
                    name: '旅游地图',
                    icon: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/TravelMap.vue'),
                }
            ]
        },
        {
            path: '/user',
            name: '用户中心',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: '/user/user',
                    name: '权限管理',
                    icon: 'fa fa-user',
                    component: () => import('@/components/users/User.vue'),
                }
            ]
        },
        {
            path: '*',
            name: 'notFound',
            hidden: true,
            component: () => import('@/components/NotFound')
        }
    ],
    mode: 'history'
})