import request from "@/utils/request";

export const getStuListAPI = () => {
    return request({
        url: '/stu/list'
    })
}