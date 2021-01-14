/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
    path: '/sms',
    component: Layout,
    redirect: '/sms/coupon',
    name: 'sms',
    meta: {
        title: '营销',
        icon: 'sms'
    },
    children: [{
            path: 'flash',
            component: () =>
                import ('@/views/sms/flash/index'),
            name: 'flash',
            meta: { title: '秒杀活动列表', icon: 'sms-flash' }
        },
        {
            path: 'session',
            component: () =>
                import ('@/views/sms/flash/sessionList'),
            name: 'session',
            meta: { title: '秒杀时间段列表' },
            hidden: true
        },
        {
            path: 'coupon',
            component: () =>
                import ('@/views/sms/coupon/index'),
            name: 'coupon',
            meta: { title: '优惠券列表', icon: 'sms-coupon' }
        },
        {
            path: 'addCoupon',
            component: () =>
                import ('@/views/sms/coupon/add'),
            name: 'addCoupon',
            meta: { title: '添加优惠券' },
            hidden: true
        },
        {
            path: 'viewCoupon',
            component: () =>
                import ('@/views/sms/coupon/viewCoupon'),
            name: 'viewCoupon',
            meta: { title: '优惠券领取详情' },
            hidden: true
        },
        {
            path: 'updateCoupon',
            component: () =>
                import ('@/views/sms/coupon/updateCoupon'),
            name: 'updateCoupon',
            meta: { title: '修改优惠券' },
            hidden: true
        },
        {
            path: 'brand',
            component: () =>
                import ('@/views/sms/brand/index'),
            name: 'brand',
            meta: { title: '品牌推荐', icon: 'product-brand' }
        },
        {
            path: 'new',
            component: () =>
                import ('@/views/sms/new/index'),
            name: 'new',
            meta: { title: '新品推荐', icon: 'sms-new' }
        },
        {
            path: 'dropzone',
            component: () =>
                import ('@/views/sms/dropzone'),
            name: 'DropzoneDemo',
            meta: { title: '人气推荐', icon: 'sms-hot' }
        },
        {
            path: 'sticky',
            component: () =>
                import ('@/views/sms/sticky'),
            name: 'StickyDemo',
            meta: { title: '专题推荐', icon: 'sms-subject' }
        },
        {
            path: 'advertise',
            component: () =>
                import ('@/views/sms/advertise/index'),
            name: 'advertise',
            meta: { title: '广告列表', icon: 'sms-ad' }
        }
    ]
}

export default componentsRouter