import request from '@/utils/request'

export function getProductList(params) {
  return request({
    url: '/vue-admin-template/product/list',
    method: 'get',
    params
  })
}
