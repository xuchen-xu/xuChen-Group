<template>
   
  <div class="app-container">
    <div class="table-layout">
      <el-row>
        <el-col :span="4" class="table-cell-title">名称</el-col>
        <el-col :span="4" class="table-cell-title">优惠券类型</el-col>
        <el-col :span="4" class="table-cell-title">可使用商品</el-col>
        <el-col :span="4" class="table-cell-title">使用门槛</el-col>
        <el-col :span="4" class="table-cell-title">面值</el-col>
        <el-col :span="4" class="table-cell-title">状态</el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="table-cell">{{ list.name }}</el-col>
        <el-col :span="4" class="table-cell">{{
          list.type | formatType
        }}</el-col>
        <el-col :span="4" class="table-cell">{{
          list.use_type | formatUseType
        }}</el-col>
        <el-col :span="4" class="table-cell"
          >满{{ list.min_point }}元可用</el-col
        >
        <el-col :span="4" class="table-cell">{{ list.amount }}元</el-col>
        <el-col :span="4" class="table-cell">{{
          list.end_time | formatStatus
        }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="table-cell-title">有效期</el-col>
        <el-col :span="4" class="table-cell-title">总发行量</el-col>
        <el-col :span="4" class="table-cell-title">已领取</el-col>
        <el-col :span="4" class="table-cell-title">待领取</el-col>
        <el-col :span="4" class="table-cell-title">已使用</el-col>
        <el-col :span="4" class="table-cell-title">未使用</el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="table-cell" style="font-size: 13px">
          {{ list.start_time | formatDate }}至{{ list.end_time | formatDate }}
        </el-col>
        <el-col :span="4" class="table-cell">{{ list.publish_count }}</el-col>
        <el-col :span="4" class="table-cell">{{ list.receive_count }}</el-col>
        <el-col :span="4" class="table-cell">{{
          list.publish_count - list.receive_count
        }}</el-col>
        <el-col :span="4" class="table-cell">{{ list.use_count }}</el-col>
        <el-col :span="4" class="table-cell">{{
          list.publish_count - list.use_count
        }}</el-col>
      </el-row>
    </div>
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
          style="float: right"
          type="primary"
          @click="handleSearchList()"
          size="small"
        >
          查询搜索
        </el-button>
        <el-button
          style="float: right; margin-right: 15px"
          @click="handleResetSearch()"
          size="small"
        >
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form
          :inline="true"
          :model="listQuery"
          size="small"
          label-width="140px"
        >
          <el-form-item label="使用状态：">
            <el-select
              v-model="listQuery.useStatus"
              placeholder="全部"
              clearable
              class="input-width"
            >
              <el-option
                v-for="item in useTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单编号：">
            <el-input
              v-model="listQuery.orderSn"
              class="input-width"
              placeholder="订单编号"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <div class="table-container"  style="margin-top:30px;">
      <el-table
        ref="couponHistoryTable"
        :data="list3"
        style="width: 100%"
        v-loading="listLoading"
        border
      >
        <el-table-column label="优惠码" width="160" align="center">
          <template slot-scope="scope">{{ scope.row.coupon_code }}</template>
        </el-table-column>
        <el-table-column label="领取会员" width="140" align="center">
          <template slot-scope="scope">{{
            scope.row.member_nickname
          }}</template>
        </el-table-column>
        <el-table-column label="领取方式" width="100" align="center">
          <template slot-scope="scope">{{
            scope.row.get_type | formatGetType
          }}</template>
        </el-table-column>
        <el-table-column label="领取时间" width="160" align="center">
          <template slot-scope="scope">{{
            scope.row.create_time | formatTime
          }}</template>
        </el-table-column>
        <el-table-column label="当前状态" width="140" align="center">
          <template slot-scope="scope">{{
            scope.row.use_status | formatCouponHistoryUseType
          }}</template>
        </el-table-column>
        <el-table-column label="使用时间" width="160" align="center">
          <template slot-scope="scope">{{
            scope.row.use_time | formatTime
          }}</template>
        </el-table-column>
        <el-table-column label="订单编号" align="center">
          <template slot-scope="scope">{{
            scope.row.order_sn === null ? "N/A" : scope.row.order_sn
          }}</template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :current-page.sync="listQuery.pageNum"
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :total="total">
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
import { formatDate } from "@/utils/date";
import { getCoupon, getCouponHistory } from "@/api/couponList";
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
const defaultListQuery = {
  pageNum: 1,
  pageSize: 10,
  useStatus: null,
  orderSn: null,
  couponId: null,
};
const defaultUseTypeOptions = [
  {
    label: "未使用",
    value: 0,
  },
  {
    label: "已使用",
    value: 1,
  },
  {
    label: "已过期",
    value: 2,
  },
];
export default {
  data() {
    return {
      id: "",
      coupon_id: "",
      list: [],
      list2: [],
      list3: [],
      listQuery: Object.assign({}, defaultListQuery),
      useTypeOptions: Object.assign({}, defaultUseTypeOptions),
      list: null,
      total: null,
      listLoading: false,
    };
  },
  created() {
    this.id = this.list = this.$route.query.id;
    this.getProductsDetail(this.id);
    this.listQuery.couponId = this.$route.query.id;
    console.log(this.listQuery.couponId, "222222223");
    this.getHistoryDetail();
  },
  filters: {
    formatType(type) {
      for (let i = 0; i < defaultTypeOptions.length; i++) {
        if (type === defaultTypeOptions[i].value) {
          return defaultTypeOptions[i].label;
        }
      }
      return "";
    },
    formatUseType(useType) {
      if (useType === 0) {
        return "全场通用";
      } else if (useType === 1) {
        return "指定分类";
      } else {
        return "指定商品";
      }
    },
    formatPlatform(platform) {
      if (platform === 1) {
        return "移动平台";
      } else if (platform === 2) {
        return "PC平台";
      } else {
        return "全平台";
      }
    },
    formatDate(time) {
      if (time == null || time === "") {
        return "N/A";
      }
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
    formatStatus(endTime) {
      let now = new Date().getTime();
      if (endTime > now) {
        return "未过期";
      } else {
        return "已过期";
      }
    },
    formatGetType(type) {
      if (type === 1) {
        return "主动获取";
      } else {
        return "后台赠送";
      }
    },
    formatCouponHistoryUseType(useType) {
      if (useType === 0) {
        return "未使用";
      } else if (useType === 1) {
        return "已使用";
      } else {
        return "已过期";
      }
    },
    formatTime(time) {
      if (time == null || time === "") {
        return "N/A";
      }
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
  },
  methods: {
    async getProductsDetail(id) {
      let result = await getCoupon({ id: id });
      this.list = result.data.items;
      console.log(this.list.id, "99999");
    },
    async getHistoryDetail() {
      this.listLoading = true;
      let result2 = await getCouponHistory(this.listQuery);
      this.listLoading = false;
      this.list2 = result2.data.items;
      this.total = result2.data.total;
      console.log(result2, "3333111111113");
      this.listQuery.couponId = this.$route.query.id;
      console.log(this.listQuery.couponId, "2222222235555555");
      this.list3 = this.list2.filter((item, index) => {
        if (item.coupon_id == this.listQuery.couponId) {
          console.log(item.coupon_id,"1005");
          console.log(item,index,"1997")
          return item;
        }
      });
      console.log(this.list3);
    },
    handleResetSearch() {
      this.listQuery = Object.assign({}, defaultListQuery);
      this.listQuery.couponId = this.$route.query.id;
    },
  },
};
</script>

<style scoped>
.app-container {
  width: 80%;
  margin: 20px auto;
}

.filter-container {
  margin-top: 20px;
}

.table-layout {
  margin-top: 20px;
  border-left: 1px solid #dcdfe6;
  border-top: 1px solid #dcdfe6;
}

.table-cell {
  height: 60px;
  line-height: 40px;
  border-right: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
  padding: 10px;
  font-size: 14px;
  color: #606266;
  text-align: center;
  overflow: hidden;
}

.table-cell-title {
  border-right: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
  padding: 10px;
  background: #f2f6fc;
  text-align: center;
  font-size: 14px;
  color: #303133;
}
</style>
