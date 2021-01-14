<template>
  <div class="app-container">
    <el-card shadow="hover">
      <div class="top">
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button type="primary" round style="float: right"
          >查询搜索</el-button
        >
        <el-button round style="float: right; margin-right: 15px"
          >重置</el-button
        >
      </div>
      <div>
        <el-form :inline="true" size="small" label-width="140px">
          <el-form-item label="优惠券名称：">
            <el-input
              v-model="input"
              class="input-width"
              placeholder="优惠券名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="优惠券类型：">
            <el-select v-model="value" placeholder="全部">
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never" style="margin-top: 30px">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button
        size="mini"
        class="btn-add"
        style="float: right"
        @click="goAdd()"
        >添加</el-button
      >
    </el-card>
    <div class="table-container">
      <el-table :data="list" border style="width: 100%; margin-top: 30px">
        <el-table-column type="selection" width="60" align="center">
        </el-table-column>
        <el-table-column label="编号" width="60" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="优惠券名称" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="优惠券类型" width="100" align="center">
          <template slot-scope="scope">{{
            scope.row.type | formatType
          }}</template>
        </el-table-column>
        <el-table-column label="可使用商品" width="100" align="center">
          <template slot-scope="scope">{{
            scope.row.useType | formatUseType
          }}</template>
        </el-table-column>
        <el-table-column label="使用门槛" width="100" align="center">
          <template slot-scope="scope">满{{ scope.row.amount }}可用</template>
        </el-table-column>
        <el-table-column label="面值" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.min_point }}元</template>
        </el-table-column>
        <el-table-column label="适用平台" width="100" align="center">
          <template slot-scope="scope">{{
            scope.row.platform | formatPlatform
          }}</template>
        </el-table-column>
        <el-table-column label="有效期" width="200" align="center">
          <template slot-scope="scope"
            >{{ scope.row.start_time | formatDate }}至{{
              scope.row.end_time | formatDate
            }}</template
          >
        </el-table-column>
        <el-table-column label="状态" width="100" align="center">
          <template slot-scope="scope">{{
            scope.row.end_time | formatStatus
          }}</template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleView(scope.$index, scope.row)"
              >查看
            </el-button>
            <el-button
              size="mini"
              type="text"
              @click="handleUpdate(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="mini"
              type="text"
              @click="handleDelete(scope.$index, scope.row)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getCouponList"
    />
  </div>
</template>

<script>
import { getProductCouponList,updateCoupon,deleteCoupon} from "@/api/couponList";
import Pagination from "@/components/Pagination";
import { formatDate } from "@/utils/date";

const options = [
  {
    value: 0,
    label: "全场赠券",
  },
  {
    value: 1,
    label: "会员赠券",
  },
  {
    value: 2,
    label: "购物赠券",
  },
  {
    value: 3,
    label: "注册赠券",
  },
];
const defaultFlashPromotion = {
  id: null,
  title: null,
  startDate: null,
  endDate: null,
  status: 0,
};
export default {
  data() {
    return {
      input: "",
      value: "",
      listQuery: {
        page: 1,
        limit: 5,
      },
      list: null,
      total: 0,
      listLoading: false,
      multipleSelection: [],
      typeOptions: Object.assign({}, options),
      isEdit: false,
    };
  },
  created() {
    this.getCouponList();
  },
  filters: {
    formatType(type) {
      for (let i = 0; i < options.length; i++) {
        if (type === options[i].value) {
          return options[i].label;
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
      let endDate = new Date(endTime);
      if (endDate > now) {
        return "未过期";
      } else {
        return "已过期";
      }
    },
  },
  components: {
    Pagination
  },
  methods: {
    handleView(index, row) {
      this.$router.push({ path: "/sms/viewCoupon",query:{id:row.id} });
       console.log(index, row);
    },
    handleUpdate(index, row) {
       this.$router.push({ path: "/sms/updateCoupon",query:{id:row.id}});
      console.log(index, row);
    },
     async handleDelete(index, row) {
      //调用deleteProduct来向服务器发送请求删除商品
      const result = await deleteCoupon({ id: row.id });
      //商品删除成功重新调用getProList来获取商品列表数据
      this.getCouponList();
    },
    handleSearchList() {
        this.listQuery.pageNum = 1;
        this.getCouponList();
      },
      handleSelectionChange(val){
        this.multipleSelection = val;
      },
    handleSizeChange(val) {
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      this.getCouponList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val;
      this.getCouponList();
    },
    goAdd() {
      this.$router.push({ path: "/sms/addCoupon" });
    },
    async getCouponList() {
      this.listLoading = true;
      let result = await getProductCouponList(this.listQuery);
      console.log(result, "33333");
      this.listLoading = false;
      this.list = result.data.items;
      this.total = result.data.total;
    },
  },
};
</script>
