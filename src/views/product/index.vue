<template>
  <div>
    <!-- <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
          type="primary"
          style="float: right; "
        >查询结果</el-button>
        <el-button  style="float: right; margin-right:20px; " >重置</el-button>
      </div>
      <el-form ref="form" :model="formInline" label-width="80px">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="输入搜索">
                        <el-input v-model="formInline.name" placeholder="商品名称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="商品货号">
                        <el-input v-model="formInline.name" placeholder="商品货号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
              <div class="block" >
                <span class="demonstration">商品分类</span>
                    <el-cascader
                        v-model="value"
                        :options="options"
                        @change="handleChange"></el-cascader>
              </div>
            </el-col>

            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="商品品牌">
            <el-select v-model="value1" placeholder="请选择" :inline="false">
                <el-option
                    v-for="item in brandOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="上架状态">
                        <el-select v-model="formInline.user" placeholder="请选择">
                            <el-option label="上架" value="shanghai"></el-option>
                            <el-option label="下架" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="审核状态">
                        <el-select v-model="formInline.user" placeholder="请选择">
                            <el-option label="审核" value="shanghai"></el-option>
                            <el-option label="未审核" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </el-card> -->
    <el-card class="box-card data">
      <div slot="header" class="clearfix">
        <span>数据列表</span>
        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
      </div>
    </el-card>
    <el-table
      :data="list"
      border
      style="width: 1200px; margin:20px auto;"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="180"
      />
      <el-table-column
        label="商品图片"
        width="180"
        prop="pic"
      />
      <el-table-column
        prop="name"
        label="商品名称"
      />
      <el-table-column
        prop="price"
        label="价格"
      />
      <el-table-column
        prop="product_sn"
        label="货号"
      />
      <el-table-column
        prop="stock"
        label="库存"
      />
      <el-table-column
        prop="stock"
        label="销量"
      />
      <el-table-column
        label="操作"
      />

    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getProList"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { getProductList } from '@/api/product'

export default {
  name: 'Documentation',
  components: { Pagination },
  data() {
    return {
      formInline: {
        name: '',
        user: '',
        region: ''
      },
      brandOptions: [{
        value: '选项1',
        label: '小米'
      }, {
        value: '选项2',
        label: '七匹狼'
      }, {
        value: '选项3',
        label: '海澜之家'
      }, {
        value: '选项4',
        label: '苹果'
      }, {
        value: '选项5',
        label: '三星'
      }, {
        value: '选项6',
        label: '华为'
      }, {
        value: '选项7',
        label: '格力'
      }, {
        value: '选项8',
        label: '方太'
      }, {
        value: '选项9',
        label: '万和'
      }, {
        value: '选项10',
        label: 'OPPO'
      }, {
        value: '选项11',
        label: 'NIKE'
      }
      ],
      value1: '',
      value: [],
      options: [{
        value: 'cloth',
        label: '服装',
        children:
          [
            {
              value: 'coat',
              label: '外套'

            }, {
              value: 'daohang',
              label: 'T恤'

            }, {
              value: 'zujian',
              label: '休闲裤'
            }, {
              value: 'form',
              label: '牛仔裤'
            }, {
              value: 'data',
              label: '衬衫'
            }, {
              value: 'notice',
              label: '男鞋'
            }
          ]
      },
      {
        value: 'phone',
        label: '手机数码',
        children:
          [
            {
              value: 'coat',
              label: '手机通讯'

            }, {
              value: 'daohang',
              label: '手机配件'

            }, {
              value: 'zujian',
              label: '摄影摄像'
            }, {
              value: 'form',
              label: '影音娱乐'
            }, {
              value: 'data',
              label: '数码配件'
            }, {
              value: 'notice',
              label: '智能设备'
            }
          ]
      },
      {
        value: 'cloth',
        label: '家用电器',
        children:
          [
            {
              value: 'coat',
              label: '电视'

            }, {
              value: 'daohang',
              label: '空调'

            }, {
              value: 'zujian',
              label: '洗衣机'
            }, {
              value: 'form',
              label: '冰箱'
            }, {
              value: 'data',
              label: '厨卫大电'
            }, {
              value: 'notice',
              label: '厨卫小电'
            }, {
              value: 'notice',
              label: '生活电器'
            }, {
              value: 'notice',
              label: '个护健康'
            }
          ]
      },
      {
        value: 'cloth',
        label: '家居家装',
        children:
          [
            {
              value: 'coat',
              label: '厨房卫浴'

            }, {
              value: 'daohang',
              label: '灯饰照明'

            }, {
              value: 'zujian',
              label: '五金工具'
            }, {
              value: 'form',
              label: '卧室家具'
            }, {
              value: 'data',
              label: '客厅家具'
            }
          ]
      },
      {
        value: 'cloth',
        label: '汽车用品',
        children:
          [
            {
              value: 'coat',
              label: '全新整车'

            }, {
              value: 'daohang',
              label: '车载电器'

            }, {
              value: 'zujian',
              label: '维修保养'
            }, {
              value: 'form',
              label: '汽车装饰'
            }
          ]
      }
      ],
      list: [],
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 5
      }

    }
  },

  created() {
    this.getProList()
  },
  methods: {
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },

    async getProList() {
      this.listLoading = true
      const result = await getProductList(this.listQuery)
      this.list = result.data.items
      this.total = result.data.total
      this.listLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 1200px;
  padding: 20px;
  margin: 20px auto;

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
}

.data{
  .el-card__body{
    height:0;
  }
}
</style>

