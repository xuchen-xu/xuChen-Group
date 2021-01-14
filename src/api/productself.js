import request from '@/utils/request'

export function getProductList(params) {
    return request({
        url: '/vue-admin-template/productxuchen/list',
        method: 'get',
        params
    })
}

export function getProductListHot(params) {
    return request({
        url: '/vue-admin-template/productxuchenHot/list',
        method: 'get',
        params
    })
}


export function deleteProductHot(params) {
    return request({
        url: '/vue-admin-template/productxuchenHot/delete/',
        method: 'get',
        params
    })
}

export function deleteProduct(params) {
    return request({
        url: '/vue-admin-template/productxuchen/delete/',
        method: 'get',
        params
    })
}
//注意：post请求参数需要通过data来传递
export function addProduct(params) {
    return request({
        url: '/vue-admin-template/productxuchen/new/',
        method: 'post',
        data: params
    })
}

//注意：post请求参数需要通过data来传递
export function addProductHot(params) {
    return request({
        url: '/vue-admin-template/productxuchenHot/new/',
        method: 'post',
        data: params
    })
}

//注意：post请求参数需要通过data来传递
export function editProduct(params) {
    return request({
        url: '/vue-admin-template/productxuchen/edit',
        method: 'post',
        data: params
    })
}

export function editProductHot(params) {
    return request({
        url: '/vue-admin-template/productxuchenHot/edit',
        method: 'post',
        data: params
    })
}
//注意：post请求参数需要通过data来传递
// export function getEditProduct(id) {
//     return request({
//         url: '/vue-admin-template/product/edit/:id',
//         method: 'get',
//         // data: params
//     })
// }