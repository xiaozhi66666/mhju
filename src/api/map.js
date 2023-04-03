import request from '@/utils/request'

/**
 * 获取数据概览数据
 * @returns promises
 */
export const getMapDataAPI = () => {
    return request({
        method: 'GET',
        url: '/map/mapData'
    })
}


/**
 * 获取概览数据
 * @returns promise
 */
export const getMapPointsAPI = () => {
    return request({
        method: 'GET',
        url: '/map/point'
    })
}


/**
 * 
 * @returns peomise
 */
export const getMapLineAPI = () => {
    return request({
        method: 'GET',
        url: '/map/line'
    })
}