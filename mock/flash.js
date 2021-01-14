import Mock from 'mockjs'

const data = {
    items: [{
        id: 2,
        title: "春季家电家具疯狂秒杀1",
        start_date: "2018-11-11T16:00:00.000Z",
        end_date: "2018-11-22T16:00:00.000Z",
        status: 1,
        create_time: "2018-11-16T03:12:13.000Z"
    }, {
        id: 3,
        title: "手机特卖",
        start_date: "2018-11-02T16:00:00.000Z",
        end_date: "2018-11-09T16:00:00.000Z",
        status: 1,
        create_time: "2018-11-16T03:11:31.000Z"
    }, {
        id: 4,
        title: "春季家电家具疯狂秒杀3",
        start_date: "2018-11-23T16:00:00.000Z",
        end_date: "2018-11-24T16:00:00.000Z",
        status: 1,
        create_time: "2018-11-16T03:12:19.000Z"
    }, {
        id: 5,
        title: "春季家电家具疯狂秒杀4",
        start_date: "2018-11-15T16:00:00.000Z",
        end_date: "2018-11-15T16:00:00.000Z",
        status: 1,
        create_time: "2018-11-16T03:12:24.000Z"
    }, {
        id: 6,
        title: "春季家电家具疯狂秒杀5",
        start_date: "2018-11-15T16:00:00.000Z",
        end_date: "2018-11-15T16:00:00.000Z",
        status: 1,
        create_time: "2018-11-16T03:12:31.000Z"
    }, {
        id: 7,
        title: "春季家电家具疯狂秒杀6",
        start_date: "2018-11-15T16:00:00.000Z",
        end_date: "2018-11-15T16:00:00.000Z",
        status: 1,
        create_time: "2018-11-16T03:12:35.000Z"
    }, {
        id: 8,
        title: "春季家电家具疯狂秒杀7",
        start_date: "2018-11-15T16:00:00.000Z",
        end_date: "2018-11-15T16:00:00.000Z",
        status: 0,
        create_time: "2018-11-16T03:12:39.000Z"
    }, {
        id: 9,
        title: "春季家电家具疯狂秒杀8",
        start_date: "2018-11-15T16:00:00.000Z",
        end_date: "2018-11-15T16:00:00.000Z",
        status: 0,
        create_time: "2018-11-16T03:12:42.000Z"
    }, {
        id: 13,
        title: "测试",
        start_date: "2018-10-31T16:00:00.000Z",
        end_date: "2018-11-29T16:00:00.000Z",
        status: 0,
        create_time: "2018-11-19T02:34:24.000Z"
    }]
}

export default [{
    url: '/vue-admin-template/product/list',
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