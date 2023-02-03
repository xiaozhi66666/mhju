import request from '@/utils/request'

/**
 * 
 * @param {Object} data 用户登录信息
 * @returns 
 */
export const loginAPI = (data) => {
    return request({
        url: '/login',
        method: 'POST',
        data
    })
}