<template>
   
  <el-card class="form-container" shadow="never">
    <el-form
      :model="list"
      :rules="rules"
      ref="couponFrom"
      label-width="150px"
      size="small"
    >
      <el-form-item label="优惠券类型：">
        <el-select v-model="list.type">
          <el-option
            v-for="type in typeOptions"
            :key="type.value"
            :label="type.label"
            :value="type.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="优惠券名称：" prop="name">
        <el-input v-model="list.name" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="适用平台：">
        <el-select v-model="list.platform">
          <el-option
            v-for="item in platformOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="总发行量：" prop="publish_count">
        <el-input
          v-model.number="list.publish_count"
          placeholder="只能输入正整数"
          class="input-width"
        ></el-input>
      </el-form-item>
      <el-form-item label="面额：" prop="amount">
        <el-input
          v-model.number="list.amount"
          placeholder="面值只能是数值，限2位小数"
          class="input-width"
        >
          <template slot="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item label="每人限领：">
        <el-input
          v-model="list.per_limit"
          placeholder="只能输入正整数"
          class="input-width"
        >
          <template slot="append">张</template>
        </el-input>
      </el-form-item>
      <el-form-item label="使用门槛：" prop="min_point">
        <el-input
          v-model.number="list.min_point"
          placeholder="只能输入正整数"
          class="input-width"
        >
          <template slot="prepend">满</template>
          <template slot="append">元可用</template>
        </el-input>
      </el-form-item>
      <el-form-item label="有效期：">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="list.start_time"
          style="width: 150px"
        ></el-date-picker>
        <span style="margin-left: 20px; margin-right: 20px">至</span>
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="list.end_time"
          style="width: 150px"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="可使用商品：">
        <el-radio-group v-model="list.use_type">
          <el-radio-button :label="0">全场通用</el-radio-button>
          <el-radio-button :label="1">指定分类</el-radio-button>
          <el-radio-button :label="2">指定商品</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-show="list.use_type === 1">
        <el-cascader
          clearable
          placeholder="请选择分类名称"
          v-model="selectProductCate"
          :options="productCateOptions"
        >
        </el-cascader>
        <el-button @click="handleAddProductCategoryRelation()">添加</el-button>
        <el-table
          ref="productCateRelationTable"
          :data="list.productCategoryRelationList"
          style="width: 100%; margin-top: 20px"
          border
        >
          <el-table-column label="分类名称" align="center">
            <template slot-scope="scope"
              >{{ scope.row.parentCategoryName }}>{{
                scope.row.productCategoryName
              }}</template
            >
          </el-table-column>
          <el-table-column label="操作" align="center" width="100">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="text"
                @click="
                  handleDeleteProductCateRelation(scope.$index, scope.row)
                "
                >删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item v-show="coupon.useType === 2">
        <el-select
          v-model="selectProduct"
          filterable
          remote
          reserve-keyword
          placeholder="商品名称/商品货号"
          :loading="selectProductLoading"
        >
          <el-option
            v-for="item in selectProductOptions"
            :key="item.productId"
            :label="item.productName"
            :value="item.productId"
          >
            <span style="float: left">{{ item.productName }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px"
              >NO.{{ item.productSn }}</span
            >
          </el-option>
        </el-select>
        <el-button @click="handleAddProductRelation()">添加</el-button>
        <el-table
          ref="productRelationTable"
          :data="list.productRelationList"
          style="width: 100%; margin-top: 20px"
          border
        >
          <el-table-column label="商品名称" align="center">
            <template slot-scope="scope">{{ scope.row.productName }}</template>
          </el-table-column>
          <el-table-column label="货号" align="center" width="120">
            <template slot-scope="scope">NO.{{ scope.row.productSn }}</template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="100">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="text"
                @click="handleDeleteProductRelation(scope.$index, scope.row)"
                >删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item label="备注：">
        <el-input
          class="input-width"
          type="textarea"
          :rows="5"
          placeholder="请输入内容"
          v-model="coupon.note"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('couponFrom')"
          >提交</el-button
        >
        <el-button v-if="!isEdit" @click="resetForm('couponFrom')"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { getCoupon } from "@/api/couponList";
// import {createCoupon,getCoupon,updateCoupon} from '@/api/coupon';
// import {fetchSimpleList as fetchProductList} from '@/api/product';
// import {fetchListWithChildren} from '@/api/productCate'
const defaultCoupon = {
  type: 0,
  name: null,
  platform: 0,
  amount: null,
  perLimit: 1,
  minPoint: null,
  startTime: null,
  endTime: null,
  useType: 0,
  note: null,
  publishCount: null,
  productRelationList: [],
  productCategoryRelationList: [],
};
const defaultTypeOptions = [
  {
    label: "全场赠券",
    value: 0,
  },
  {
    label: "会员赠券",
    value: 1,
  },
  {
    label: "购物赠券",
    value: 2,
  },
  {
    label: "注册赠券",
    value: 3,
  },
];
const defaultPlatformOptions = [
  {
    label: "全平台",
    value: 0,
  },
  {
    label: "移动平台",
    value: 1,
  },
  {
    label: "PC平台",
    value: 2,
  },
];
export default {
  name: "CouponDetail",
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      list: [],
      coupon: Object.assign({}, defaultCoupon),
      typeOptions: Object.assign({}, defaultTypeOptions),
      platformOptions: Object.assign({}, defaultPlatformOptions),
      rules: {
        name: [
          { required: true, message: "请输入优惠券名称", trigger: "blur" },
          {
            min: 2,
            max: 140,
            message: "长度在 2 到 140 个字符",
            trigger: "blur",
          },
        ],
        publishCount: [
          {
            type: "number",
            required: true,
            message: "只能输入正整数",
            trigger: "blur",
          },
        ],
        amount: [
          {
            type: "number",
            required: true,
            message: "面值只能是数值，0.01-10000，限2位小数",
            trigger: "blur",
          },
        ],
        minPoint: [
          {
            type: "number",
            required: true,
            message: "只能输入正整数",
            trigger: "blur",
          },
        ],
      },
      selectProduct: null,
      selectProductLoading: false,
      selectProductOptions: [],
      selectProductCate: null,
      productCateOptions: [],
    };
  },
  created() {
    this.id = this.list = this.$route.query.id;
    this.getProductsDetail(this.id);
    // if (this.isEdit) {
    //   getCoupon(this.$route.query.id).then((response) => {
    //     this.coupon = response.data;
    //   });
    // }
    // this.getProductCateList();
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$confirm("是否提交数据", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }).then(() => {
            if (this.isEdit) {
              updateCoupon(this.$route.query.id, this.coupon).then(
                (response) => {
                  this.$refs[formName].resetFields();
                  this.$message({
                    message: "修改成功",
                    type: "success",
                    duration: 1000,
                  });
                  this.$router.back();
                }
              );
            } else {
              createCoupon(this.coupon).then((response) => {
                this.$refs[formName].resetFields();
                this.$message({
                  message: "提交成功",
                  type: "success",
                  duration: 1000,
                });
                this.$router.back();
              });
            }
          });
        } else {
          this.$message({
            message: "验证失败",
            type: "error",
            duration: 1000,
          });
          return false;
        }
      });
    },
    // handleAddProductRelation() {
    //   if (this.selectProduct === null) {
    //     this.$message({
    //       message: "请先选择商品",
    //       type: "warning",
    //     });
    //     return;
    //   }
    //   this.coupon.productRelationList.push(
    //     this.getProductById(this.selectProduct)
    //   );
    //   this.selectProduct = null;
    // },
    handleDeleteProductRelation(index, row) {
      this.coupon.productRelationList.splice(index, 1);
    },
    handleDeleteProductCateRelation(index, row) {
      this.coupon.productCategoryRelationList.splice(index, 1);
    },
    async getProductsDetail(id) {
      let result = await getCoupon({ id: id });
      this.list = result.data.items;
      console.log(this.list, "99999");
    },
  },
};
</script>
<style scoped>
.input-width {
  width: 60%;
}
</style>


