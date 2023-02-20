import request from "@/utils/request";


/**
 * 获取学生列表
 * @returns 
 */
export const getStuListAPI = () => {
    return request({
        url: '/stu/list'
    })
}

/**
 * 获取信息列表
 * @returns 
 */
export const getInfosAPI = () => {
    return request({
        method: 'GET',
        url: '/stu/info',
    })
}