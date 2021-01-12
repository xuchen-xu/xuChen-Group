import request from '@/utils/request'

export function getOrderList(params) {
  return request({
    url: '/vue-admin-template/order/list',
    method: 'get',
    params
  })
}