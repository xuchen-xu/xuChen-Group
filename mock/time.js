import Mock from 'mockjs'

const data = {
    items: [{
            id: 1,
            name: "8:00",
            start_time: "08:00:29",
            end_time: "09:00:33",
            status: 1,
            create_time: "2018-11-16T05:22:17.000Z"
        },
        {
            id: 2,
            name: "10:00",
            start_time: "10:00:33",
            end_time: "11:00:33",
            status: 1,
            create_time: "2018-11-16T05:22:34.000Z"
        },
        {
            id: 3,
            name: "12:00",
            start_time: "12:00:00",
            end_time: "13:00:22",
            status: 1,
            create_time: "2018-11-16T05:22:37.000Z"
        },
        {
            id: 4,
            name: "14:00",
            start_time: "14:00:00",
            end_time: "15:00:00",
            status: 1,
            create_time: "2018-11-16T05:22:41.000Z"
        },
        {
            id: 5,
            name: "16:00",
            start_time: "16:00:00",
            end_time: "17:00:00",
            status: 1,
            create_time: "2018-11-16T05:22:45.000Z"
        },
        {
            id: 6,
            name: "18:00",
            start_time: "18:00:00",
            end_time: "19:00:00",
            status: 1,
            create_time: "2018-11-16T05:21:34.000Z"
        },
        {
            id: 7,
            name: "20:00",
            start_time: "20:00:33",
            end_time: "21:00:33",
            status: 0,
            create_time: "2018-11-16T05:22:55.000Z"
        }
    ]
}

export default [{
    url: '/vue-admin-template/product/timelist',
    type: 'get',
    response: config => {
        const items = data.items
        return {
            code: 20000,
            data: {
                total: items.length,
                items: items
            }
        }
    }
}]