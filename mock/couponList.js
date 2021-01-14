import Mock from 'mockjs'

const data = {
    items: [{
            id: 2,
            type: 0,
            name: "全品类通用券",
            platform: 0,
            count: 92,
            amount: 10,
            per_limit: 1,
            min_point: 100,
            start_time: "2018-08-27T08:40:47.000Z",
            end_time: "2018-11-23T08:40:47.000Z",
            use_type: 0,
            note: "满100减10",
            publish_count: 100,
            use_count: 0,
            receive_count: 8,
            enable_time: "2018-08-27T08:40:47.000Z",
            code: null,
            member_level: null
        },
        {
            id: 3,
            type: 0,
            name: "小米手机专用券",
            platform: 0,
            count: 92,
            amount: 50,
            per_limit: 1,
            min_point: 1000,
            start_time: "2018-08-27T08:40:47.000Z",
            end_time: "2018-11-16T08:40:47.000Z",
            use_type: 2,
            note: "小米手机专用优惠券",
            publish_count: 100,
            use_count: 0,
            receive_count: 8,
            enable_time: "2018-08-27T08:40:47.000Z",
            code: null,
            member_level: null
        },
        {
            id: 4,
            type: 0,
            name: "手机品类专用券",
            platform: 0,
            count: 92,
            amount: 300,
            per_limit: 1,
            min_point: 2000,
            start_time: "2018-08-27T08:40:47.000Z",
            end_time: "2018-09-15T08:40:47.000Z",
            use_type: 1,
            note: "手机分类专用优惠券",
            publish_count: 100,
            use_count: 0,
            receive_count: 8,
            enable_time: "2018-08-27T08:40:47.000Z",
            code: null,
            member_level: null
        },
        {
            id: 7,
            type: 0,
            name: "T恤分类专用优惠券",
            platform: 0,
            count: 93,
            amount: 50,
            per_limit: 1,
            min_point: 500,
            start_time: "2018-08-27T08:40:47.000Z",
            end_time: "2018-08-15T08:40:47.000Z",
            use_type: 1,
            note: "满500减50",
            publish_count: 100,
            use_count: 0,
            receive_count: 7,
            enable_time: "2018-08-27T08:40:47.000Z",
            code: null,
            member_level: null
        },
        {
            id: 8,
            type: 0,
            name: "新优惠券",
            platform: 0,
            count: 100,
            amount: 100,
            per_limit: 1,
            min_point: 1000,
            start_time: "2018-11-07T16:00:00.000Z",
            end_time: "2018-11-26T16:00:00.000Z",
            use_type: 0,
            note: "测试",
            publish_count: 100,
            use_count: 0,
            receive_count: 1,
            enable_time: null,
            code: null,
            member_level: null
        },
        {
            id: 9,
            type: 0,
            name: "全品类通用券",
            platform: 0,
            count: 100,
            amount: 5,
            per_limit: 1,
            min_point: 100,
            start_time: "2018-11-07T16:00:00.000Z",
            end_time: "2018-11-09T16:00:00.000Z",
            use_type: 0,
            note: null,
            publish_count: 100,
            use_count: 0,
            receive_count: 1,
            enable_time: null,
            code: null,
            member_level: null
        },
        {
            id: 10,
            type: 0,
            name: "全品类通用券",
            platform: 0,
            count: 100,
            amount: 15,
            per_limit: 1,
            min_point: 200,
            start_time: "2018-11-07T16:00:00.000Z",
            end_time: "2018-11-09T16:00:00.000Z",
            use_type: 0,
            note: null,
            publish_count: 100,
            use_count: 0,
            receive_count: 1,
            enable_time: null,
            code: null,
            member_level: null
        },
        {
            id: 11,
            type: 0,
            name: "全品类通用券",
            platform: 0,
            count: 1000,
            amount: 50,
            per_limit: 1,
            min_point: 1000,
            start_time: "2018-11-07T16:00:00.000Z",
            end_time: "2018-11-09T16:00:00.000Z",
            use_type: 0,
            note: null,
            publish_count: 1000,
            use_count: 0,
            receive_count: 0,
            enable_time: null,
            code: null,
            member_level: null
        },
        {
            id: 12,
            type: 0,
            name: "移动端全品类通用券",
            platform: 1,
            count: 1,
            amount: 10,
            per_limit: 1,
            min_point: 100,
            start_time: "2018-11-07T16:00:00.000Z",
            end_time: "2018-11-09T16:00:00.000Z",
            use_type: 0,
            note: null,
            publish_count: 100,
            use_count: 0,
            receive_count: 0,
            enable_time: null,
            code: null,
            member_level: null
        },
        {
            id: 19,
            type: 0,
            name: "手机分类专用",
            platform: 0,
            count: 100,
            amount: 100,
            per_limit: 1,
            min_point: 1000,
            start_time: "2018-11-08T16:00:00.000Z",
            end_time: "2018-11-16T16:00:00.000Z",
            use_type: 1,
            note: "手机分类专用",
            publish_count: 100,
            use_count: 0,
            receive_count: 0,
            enable_time: null,
            code: null,
            member_level: null
        },
        {
            id: 20,
            type: 0,
            name: "小米手机专用",
            platform: 0,
            count: 100,
            amount: 200,
            per_limit: 1,
            min_point: 1000,
            start_time: "2018-11-08T16:00:00.000Z",
            end_time: "2018-11-23T16:00:00.000Z",
            use_type: 2,
            note: "小米手机专用",
            publish_count: 100,
            use_count: 0,
            receive_count: 0,
            enable_time: null,
            code: null,
            member_level: null
        },
        {
            id: 21,
            type: 0,
            name: "xxx",
            platform: 0,
            count: 100,
            amount: 10,
            per_limit: 1,
            min_point: 100,
            start_time: "2018-11-08T16:00:00.000Z",
            end_time: "2018-11-29T16:00:00.000Z",
            use_type: 2,
            note: null,
            publish_count: 100,
            use_count: 0,
            receive_count: 0,
            enable_time: null,
            code: null,
            member_level: null
        },
        {
            id: 22,
            type: 0,
            name: "string",
            platform: 0,
            count: 0,
            amount: 0,
            per_limit: 0,
            min_point: 0,
            start_time: "2019-08-18T07:36:11.000Z",
            end_time: "2019-08-18T07:36:11.000Z",
            use_type: 0,
            note: "string",
            publish_count: 0,
            use_count: 0,
            receive_count: 0,
            enable_time: "2019-08-18T07:36:11.000Z",
            code: "string",
            member_level: 0
        },
        {
            id: 23,
            type: 0,
            name: "有效期测试",
            platform: 0,
            count: 100,
            amount: 10,
            per_limit: 1,
            min_point: 100,
            start_time: "2019-10-04T16:00:00.000Z",
            end_time: "2019-10-08T16:00:00.000Z",
            use_type: 0,
            note: null,
            publish_count: 100,
            use_count: 0,
            receive_count: 0,
            enable_time: null,
            code: null,
            member_level: null
        }
    ]
}


export default [{
        url: '/vue-admin-template/product/couponlist',
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
    },
    {
        url: '/vue-admin-template/product/coupondetail',
        type: 'get',
        response: config => {
            const id = config.query.id
            console.log(id, "88888");
            const items = data.items
                // console.log(items)
            var products = items.find(item => {
                if (item.id == id) {
                    return item;
                }
            })
            console.log(products);
            return {
                code: 20000,
                data: {
                    items: products
                }
            }

        }

    },
    {
        url: '/vue-admin-template/product/delete',
        type: 'get',
        response: config => {
            const id = config.query.id
            const items = data.items
            var index = items.findIndex(item => {
                if (item.id == id) {
                    return true;
                }
            })
            items.splice(index, 1);
            return {
                code: 20000,
                data: {
                    message: "删除商品成功"
                }
            }
        }
    }
]