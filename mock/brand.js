import Mock from 'mockjs'

const data = {
    items: [{
            id: 1,
            brand_id: 1,
            brand_name: "万和",
            recommend_status: 1,
            sort: 200
        },
        {
            id: 2,
            brand_id: 2,
            brand_name: "三星",
            recommend_status: 1,
            sort: 0
        },
        {
            id: 6,
            brand_id: 6,
            brand_name: "小米",
            recommend_status: 1,
            sort: 300
        },
        {
            id: 8,
            brand_id: 5,
            brand_name: "方太",
            recommend_status: 1,
            sort: 100
        },
        {
            id: 31,
            brand_id: 49,
            brand_name: "七匹狼",
            recommend_status: 0,
            sort: 0
        },
        {
            id: 32,
            brand_id: 50,
            brand_name: "海澜之家",
            recommend_status: 1,
            sort: 0
        },
        {
            id: 33,
            brand_id: 51,
            brand_name: "苹果",
            recommend_status: 1,
            sort: 0
        },
        {
            id: 34,
            brand_id: 2,
            brand_name: "三星",
            recommend_status: 0,
            sort: 0
        },
        {
            id: 35,
            brand_id: 3,
            brand_name: "华为",
            recommend_status: 1,
            sort: 0
        },
        {
            id: 36,
            brand_id: 4,
            brand_name: "格力",
            recommend_status: 1,
            sort: 0
        },
        {
            id: 37,
            brand_id: 5,
            brand_name: "方太",
            recommend_status: 1,
            sort: 0
        },
        {
            id: 38,
            brand_id: 1,
            brand_name: "万和",
            recommend_status: 1,
            sort: 0
        },
        {
            id: 39,
            brand_id: 21,
            brand_name: "OPPO",
            recommend_status: 1,
            sort: 0
        }
    ]
}


export default [{
    url: '/vue-admin-template/product/brandlist',
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