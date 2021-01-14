import request from '@/utils/request'

export function getProductCouponList(params) {
    return request({
        url: '/vue-admin-template/product/couponlist',
        method: 'get',
        params
    })
}

export function getCoupon(params) {
    return request({
        url: '/vue-admin-template/product/coupondetail+ id',
        method: 'get',
        params
    })
}


export function getCouponHistory(params) {
    return request({
        url: '/vue-admin-template/product/couponhistory',
        method: 'get',
        params
    })
}


export function updateCoupon(params) {
    return request({
        url: '/vue-admin-template/product/couponupdate+id',
        method: 'get',
        params
    })
}


export function deleteCoupon(params) {
    return request({
        url: '/vue-admin-template/product/delete/',
        method: 'get',
        params
    })
}