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