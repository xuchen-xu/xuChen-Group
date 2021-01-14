import Mock from 'mockjs'

const data = {
    items: [{
            id: 2,
            coupon_id: 2,
            member_id: 1,
            coupon_code: "4931048380330002",
            member_nickname: "windir",
            get_type: 1,
            create_time: "2018-08-29T06:04:12.000Z",
            use_status: 1,
            use_time: "2018-11-12T06:38:47.000Z",
            order_id: 12,
            order_sn: "201809150101000001"
        },
        {
            id: 3,
            coupon_id: 3,
            member_id: 1,
            coupon_code: "4931048380330003",
            member_nickname: "windir",
            get_type: 1,
            create_time: "2018-08-29T06:04:29.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 4,
            coupon_id: 4,
            member_id: 1,
            coupon_code: "4931048380330004",
            member_nickname: "windir",
            get_type: 1,
            create_time: "2018-08-29T06:04:32.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 11,
            coupon_id: 7,
            member_id: 1,
            coupon_code: "4931048380330001",
            member_nickname: "windir",
            get_type: 1,
            create_time: "2018-09-04T08:21:50.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 12,
            coupon_id: 2,
            member_id: 4,
            coupon_code: "0340981248320004",
            member_nickname: "zhensan",
            get_type: 1,
            create_time: "2018-11-12T06:16:50.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 13,
            coupon_id: 3,
            member_id: 4,
            coupon_code: "0342977234360004",
            member_nickname: "zhensan",
            get_type: 1,
            create_time: "2018-11-12T06:17:10.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 14,
            coupon_id: 4,
            member_id: 4,
            coupon_code: "0343342928830004",
            member_nickname: "zhensan",
            get_type: 1,
            create_time: "2018-11-12T06:17:13.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 15,
            coupon_id: 2,
            member_id: 5,
            coupon_code: "0351883832180005",
            member_nickname: "lisi",
            get_type: 1,
            create_time: "2018-11-12T06:18:39.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 16,
            coupon_id: 3,
            member_id: 5,
            coupon_code: "0352201672680005",
            member_nickname: "lisi",
            get_type: 1,
            create_time: "2018-11-12T06:18:42.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 17,
            coupon_id: 4,
            member_id: 5,
            coupon_code: "0352505810180005",
            member_nickname: "lisi",
            get_type: 1,
            create_time: "2018-11-12T06:18:45.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 18,
            coupon_id: 2,
            member_id: 6,
            coupon_code: "0356114588380006",
            member_nickname: "wangwu",
            get_type: 1,
            create_time: "2018-11-12T06:19:21.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 19,
            coupon_id: 3,
            member_id: 6,
            coupon_code: "0356382856920006",
            member_nickname: "wangwu",
            get_type: 1,
            create_time: "2018-11-12T06:19:24.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 20,
            coupon_id: 4,
            member_id: 6,
            coupon_code: "0356656798470006",
            member_nickname: "wangwu",
            get_type: 1,
            create_time: "2018-11-12T06:19:27.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 21,
            coupon_id: 2,
            member_id: 3,
            coupon_code: "0363644984620003",
            member_nickname: "windy",
            get_type: 1,
            create_time: "2018-11-12T06:20:36.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 22,
            coupon_id: 3,
            member_id: 3,
            coupon_code: "0363932820300003",
            member_nickname: "windy",
            get_type: 1,
            create_time: "2018-11-12T06:20:39.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 23,
            coupon_id: 4,
            member_id: 3,
            coupon_code: "0364238275840003",
            member_nickname: "windy",
            get_type: 1,
            create_time: "2018-11-12T06:20:42.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 24,
            coupon_id: 2,
            member_id: 7,
            coupon_code: "0385034833070007",
            member_nickname: "lion",
            get_type: 1,
            create_time: "2018-11-12T06:24:10.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 25,
            coupon_id: 3,
            member_id: 7,
            coupon_code: "0385350208650007",
            member_nickname: "lion",
            get_type: 1,
            create_time: "2018-11-12T06:24:13.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 26,
            coupon_id: 4,
            member_id: 7,
            coupon_code: "0385632733900007",
            member_nickname: "lion",
            get_type: 1,
            create_time: "2018-11-12T06:24:16.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 27,
            coupon_id: 2,
            member_id: 8,
            coupon_code: "0388779132990008",
            member_nickname: "shari",
            get_type: 1,
            create_time: "2018-11-12T06:24:48.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 28,
            coupon_id: 3,
            member_id: 8,
            coupon_code: "0388943658810008",
            member_nickname: "shari",
            get_type: 1,
            create_time: "2018-11-12T06:24:49.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 29,
            coupon_id: 4,
            member_id: 8,
            coupon_code: "0389069398320008",
            member_nickname: "shari",
            get_type: 1,
            create_time: "2018-11-12T06:24:51.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 30,
            coupon_id: 2,
            member_id: 9,
            coupon_code: "0390753935250009",
            member_nickname: "aewen",
            get_type: 1,
            create_time: "2018-11-12T06:25:08.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 31,
            coupon_id: 3,
            member_id: 9,
            coupon_code: "0390882954470009",
            member_nickname: "aewen",
            get_type: 1,
            create_time: "2018-11-12T06:25:09.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        },
        {
            id: 32,
            coupon_id: 4,
            member_id: 9,
            coupon_code: "0391025542810009",
            member_nickname: "aewen",
            get_type: 1,
            create_time: "2018-11-12T06:25:10.000Z",
            use_status: 0,
            use_time: null,
            order_id: null,
            order_sn: null
        }
    ]
}

export default [{
        url: '/vue-admin-template/product/couponhistory',
        type: 'get',
        response: config => {
            const { page = 1, limit = 5 } = config.query
            const items = data.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    items: items
                }
            }
        }
    },
    {
        url: '/vue-admin-template/product/couponupdate',
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
    }
]