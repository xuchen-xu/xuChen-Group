import Mock from 'mockjs'

const data = {
    items: [{
            id: 2,
            name: "夏季大热促销",
            type: 1,
            pic: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/xiaomi.jpg",
            start_time: "2018-11-01T06:01:37.000Z",
            end_time: "2018-11-15T06:01:37.000Z",
            status: 1,
            click_count: 0,
            order_count: 0,
            url: null,
            note: "夏季大热促销",
            sort: 0
        },
        {
            id: 3,
            name: "夏季大热促销1",
            type: 1,
            pic: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf58Ndefaac16.jpg",
            start_time: "2018-11-13T06:01:37.000Z",
            end_time: "2018-11-13T06:01:37.000Z",
            status: 0,
            click_count: 0,
            order_count: 0,
            url: null,
            note: "夏季大热促销1",
            sort: 0
        },
        {
            id: 4,
            name: "夏季大热促销2",
            type: 1,
            pic: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5a9d248cN071f4959.jpg",
            start_time: "2018-11-13T06:01:37.000Z",
            end_time: "2018-11-13T06:01:37.000Z",
            status: 1,
            click_count: 0,
            order_count: 0,
            url: null,
            note: "夏季大热促销2",
            sort: 0
        },
        {
            id: 9,
            name: "电影推荐广告",
            type: 1,
            pic: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20181113/movie_ad.jpg",
            start_time: "2018-10-31T16:00:00.000Z",
            end_time: "2018-11-23T16:00:00.000Z",
            status: 1,
            click_count: 0,
            order_count: 0,
            url: "www.baidu.com",
            note: "电影推荐广告",
            sort: 100
        },
        {
            id: 10,
            name: "汽车促销广告",
            type: 1,
            pic: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20181113/car_ad.jpg",
            start_time: "2018-11-12T16:00:00.000Z",
            end_time: "2018-11-23T16:00:00.000Z",
            status: 1,
            click_count: 0,
            order_count: 0,
            url: "xxx",
            note: null,
            sort: 99
        },
        {
            id: 11,
            name: "汽车推荐广告",
            type: 1,
            pic: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20181113/car_ad2.jpg",
            start_time: "2018-11-12T16:00:00.000Z",
            end_time: "2018-11-29T16:00:00.000Z",
            status: 1,
            click_count: 0,
            order_count: 0,
            url: "xxx",
            note: null,
            sort: 98
        }
    ]
}

export default [{
    url: '/vue-admin-template/product/advertiselist',
    type: 'get',
    response: config => {
        const { page = 1, limit = 5 } = config.query
        const items = data.items
        return {
            code: 20000,
            data: {
                total: items.length,
                items: items.slice((page - 1) * limit, limit * page)
            }
        }
    }
}]