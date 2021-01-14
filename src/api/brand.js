import request from '@/utils/request'

export function getBrandList(params) {
    return request({
        url: '/vue-admin-template/product/brandlist',
        method: 'get',
        params
    })
}