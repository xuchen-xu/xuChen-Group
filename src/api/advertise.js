import request from '@/utils/request'

export function getAdvertiseList(params) {
    return request({
        url: '/vue-admin-template/product/advertiselist',
        method: 'get',
        params
    })
}