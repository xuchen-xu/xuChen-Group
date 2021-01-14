import request from '@/utils/request'

export function getProductTimeList(params) {
    return request({
        url: '/vue-admin-template/product/timelist',
        method: 'get',
        params
    })
}