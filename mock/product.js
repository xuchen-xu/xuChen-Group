import Mock from "mockjs";

const data = {
  items: [
    {
      id: 87,
      title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
      add_time: "2015-04-19",
      zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
      click: 0,
      img_url:
        "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/xiaomi.jpg",
      sell_price: 2195,
      market_price: 2499,
      stock_quantity: 60,
      recommendStatus: 1
    },
    {
      id: 88,
      title: "苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）",
      add_time: "2015-04-19",
      zhaiyao: "iPhone 6 Plus设计上和iPhone 6",
      click: 0,
      img_url:
        "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf58Ndefaac16.jpg",
      sell_price: 5780,
      market_price: 6388,
      stock_quantity: 200,
      recommendStatus: 0
    },
    {
      id: 89,
      title: "小米（Mi）小米Note 16G双网通版",
      add_time: "2015-04-19",
      zhaiyao: "小米Note此次采用的5.7英寸夏普/JDI分辨率",
      click: 4,
      img_url:
        "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5a9d248cN071f4959.jpg",
      sell_price: 2199,
      market_price: 2699,
      stock_quantity: 60,
      recommendStatus: 0
    },
    {
      id: 90,
      title: "佳能（Canon） EOS 700D 单反套机",
      add_time: "2015-04-19",
      zhaiyao: "◆ 佳能普及型单反新旗舰记忆的片段，偶然的相遇，铭",
      click: 1,
      img_url:
        "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20181113/movie_ad.jpg",
      sell_price: 4799,
      market_price: 5099,
      stock_quantity: 100,
      recommendStatus: 1
    },
    {
      id: 91,
      title: "尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）",
      add_time: "2015-04-19",
      zhaiyao: "作为D3200的升级版，尼康D3300最大特点即是",
      click: 0,
      img_url:
        "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20181113/movie_ad.jpg",
      sell_price: 3180,
      market_price: 3150,
      stock_quantity: 10,
      recommendStatus: 1
    },
    {
      id: 92,
      title: "联想（Lenovo） G510AM 15.6英寸笔记本电脑",
      add_time: "2015-04-19",
      zhaiyao: "G系列全面支持Windows 8 简体中文版，在秉",
      click: 0,
      img_url:
        "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/xiaomi.jpg",
      sell_price: 2999,
      market_price: 4599,
      stock_quantity: 100,
      recommendStatus: 1
    },
    {
      id: 93,
      title: "Apple iMac MF883CH/A 21.5英寸一体机电脑",
      add_time: "2015-04-19",
      zhaiyao: "—— iMac —— 锋锐设计，锋芒表现。iMac",
      click: 0,
      img_url:
        "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/xiaomi.jpg",
      sell_price: 7200,
      market_price: 7988,
      stock_quantity: 10,
      recommendStatus: 0
    },
    {
      id: 94,
      title: "金士顿（Kingston） DataTraveler SE9 32GB 金属U盘",
      add_time: "2015-04-19",
      zhaiyao: "品名：金士顿颜色：银色容量：32GB USB2.0",
      click: 0,
      img_url:
        "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/xiaomi.jpg",
      sell_price: 79,
      market_price: 99,
      stock_quantity: 100,
      recommendStatus: 1
    }
  ]
};

exports.data = data ;

export default [
  {
    url: "/vue-admin-template/product/list",
    type: "get",
    response: config => {
      const { page = 1, limit = 3 } = config.query;
      const items = data.items;
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items.slice((page - 1) * limit, limit * page)
        }
      };
    }
  },
  {
    url: "/vue-admin-template/product/delete",
    type: "get",
    response: config => {
      const id = config.query.id;
      const items = data.items;
      var index = items.findIndex(item => {
        if (item.id == id) {
          return true;
        }
      });
      items.splice(index, 1);
      return {
        code: 20000,
        data: {
          message: "删除商品成功"
        }
      };
    }
  },
  {
    url: "/vue-admin-template/product/new",
    type: "post",
    response: config => {
      var product = config.body;
      console.log(product, "99999999999999999999999999");
      data.items.push(product);
      return {
        code: 20000,
        data: {
          message: "添加商品成功"
        }
      };
    }
  },
  {
    url: "/vue-admin-template/product/edit",
    type: "post",
    response: config => {
      var product = config.body;
      console.log(product, "99999999999999999999999999");
      // data.items.push(product);
      // console.log(data)
      var productDetail = data.items.map(item => {
        if (item.id == product.id) {
          return product;
        }
        return item;
      });
      console.log(productDetail)
      data.items=productDetail;
      return {
        code: 20000,
        data: {
          message: "编辑商品成功"
        }
      };
    }
  }
  // {
  //   url: "/vue-admin-template/product/edit/:id",
  //   type: "get",
  //   response: config => {
  //     var id = config.params["id"];
  //     console.log(id, "99999999999999999999999999");
  //     // data.items.push(product);
  //     var data = data.items.map(item => {
  //       if (item.id == id) {
  //         return item;
  //       }
  //     });
  //     return {
  //       code: 20000,
  //       data: {
  //         message: "添加商品成功"
  //       }
  //     };
  //   }
  // },
];
