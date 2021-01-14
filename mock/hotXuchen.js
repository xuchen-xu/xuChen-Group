import Mock from "mockjs";

const data = {
  items: [
    {
      id: 87,
      title: "HLA海澜之家简约动物印花棉袄",
      add_time: "2019-04-19",
      zhaiyao: "你值得拥有",
      click: 0,
      img_url:
        "https://res.gucci.cn/resources/2020/12/17/16081940703515097_ws_470X470.jpg",
      sell_price: 2195,
      market_price: 2499,
      stock_quantity: 60,
      recommendStatus: 1
    },
    {
      id: 88,
      title: "华为 HUAWEI P20",
      add_time: "2015-04-19",
      zhaiyao: "iPhone 6 Plus设计上和iPhone 6",
      click: 0,
      img_url:
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3091627343,1722093308&fm=26&gp=0.jpg",
      sell_price: 5780,
      market_price: 6388,
      stock_quantity: 200,
      recommendStatus: 0
    },
    {
      id: 89,
      title: "小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待",
      add_time: "2015-04-19",
      zhaiyao: "小米Note此次采用的5.7英寸夏普/JDI分辨率",
      click: 4,
      img_url:
        "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2961943381,2311492722&fm=26&gp=0.jpg",
      sell_price: 2199,
      market_price: 2699,
      stock_quantity: 60,
      recommendStatus: 0
    },
    {
      id: 90,
      title: "小米 红米5A 全网通版 3GB+32GB 香槟金 移动联通电信4G手机 双卡双待",
      add_time: "2015-04-19",
      zhaiyao: "◆ 全新的小米手机，网速快，性价比高",
      click: 1,
      img_url:
        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2497946786,1018996092&fm=26&gp=0.jpg",
      sell_price: 4799,
      market_price: 5099,
      stock_quantity: 100,
      recommendStatus: 1
    },
    {
      id: 91,
      title: "Apple iPhone 8 Plus 64GB 红色特别版 移动联通电信4G手机",
      add_time: "2015-04-19",
      zhaiyao: "作为D3200的升级版，Apple最大特点即是像素高",
      click: 0,
      img_url:
        "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2497946786,1018996092&fm=26&gp=0.jpg",
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
    url: "/vue-admin-template/productxuchenHot/list",
    type: "get",
    response: config => {
      const { page = 1, limit = 5 } = config.query;
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
    url: "/vue-admin-template/productxuchenHot/delete",
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
    url: "/vue-admin-template/productxuchenHot/new",
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
    url: "/vue-admin-template/productxuchen/edit",
    type: "post",
    response: config => {
      var product = config.body;
      // console.log(product, "99999999999999999999999999");
      // data.items.push(product);
      // console.log(data)
      var productDetail = data.items.map(item => {
        if (item.id == product.id) {
          return product;
        }
        return item;
      });
      // console.log(productDetail)
      data.items=productDetail;
      return {
        code: 20000,
        data: {
          message: "编辑商品成功"
        }
      };
    }
  },
   {
    url: "/vue-admin-template/productxuchenHot/edit",
    type: "post",
    response: config => {
      var product = config.body;
      // console.log(product, "99999999999999999999999999");
      // data.items.push(product);
      // console.log(data)
      var productDetail = data.items.map(item => {
        if (item.id == product.id) {
          return product;
        }
        return item;
      });
      // console.log(productDetail)
      data.items=productDetail;
      return {
        code: 20000,
        data: {
          message: "编辑商品成功"
        }
      };
    }
  }
];
