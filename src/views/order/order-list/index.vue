<template>
  <div class="order-list">
    <el-card shadow="hover">
      <div class="search">
        <p>筛选搜索</p>
      </div>
      <div class="form-data"></div>
    </el-card>
    <el-card shadow="hover">
      <div class="search">
        <p>数据</p>
      </div>
    </el-card>
    <el-card shadow="hover">
      <el-table
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column
          type="selection"
          width="45"
          align="center"
        ></el-table-column>
        <el-table-column align="center" label="编号" width="65">
          <template slot-scope="scope">
            {{ scope.row.id }}
          </template>
        </el-table-column>
        <el-table-column label="订单编号" width="170" align="center">
          <template slot-scope="scope">
            {{ scope.row.order_sn }}
          </template>
        </el-table-column>
        <el-table-column label="提交时间" width="180" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.create_time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="用户账号" width="90" align="center">
          <template slot-scope="scope">
            {{ scope.row.member_username }}
          </template>
        </el-table-column>
        <el-table-column label="订单金额" width="100" align="center">
          <template slot-scope="scope">
            ￥{{ scope.row.total_amount }}
          </template>
        </el-table-column>
        <el-table-column label="支付方式" width="100" align="center">
          <template slot-scope="scope">
            {{ scope.row.pay_type | formatPayType }}
          </template>
        </el-table-column>
        <el-table-column label="订单来源" width="100" align="center">
          <template slot-scope="scope">
            {{ scope.row.source_type | formatSourceType }}
          </template>
        </el-table-column>
        <el-table-column label="订单状态" width="100" align="center">
          <template slot-scope="scope">
            {{ scope.row.status | formatStatus }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="210" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row.id, scope.row)"
              >查看订单</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id, scope.row)"
            >
              {{ scope.row.status | formatStatus2 }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="fetchData"
      />
    </el-card>
  </div>
</template>
<style lang="less" scoped>
.order-list {
  margin: 20px;
  .el-card {
    margin-bottom: 20px;
  }
}
</style>
<script>
import { getOrderList } from "@/api/orderlist";
import Pagination from "@/components/Pagination";
export default {
  data() {
    return {
      listLoading: true,
      list: [],
      listQuery: {
        page: 1,
        limit: 5,
      },
      total: 0,
    };
  },
  created() {
    this.fetchData();
  },
  filters: {
    formatPayType(value) {
      if (value === 1) {
        return "支付宝";
      } else if (value === 2) {
        return "微信";
      } else {
        return "未支付";
      }
    },
    formatSourceType(value) {
      if (value == 0) {
        return "PC订单";
      } else {
        return "APP订单";
      }
    },
    formatStatus(value) {
      if (value === 1) {
        return "待发货";
      } else if (value === 2) {
        return "已发货";
      } else if (value === 3) {
        return "已完成";
      } else if (value === 4) {
        return "已关闭";
      } else if (value === 5) {
        return "无效订单";
      } else {
        return "待付款";
      }
    },
    formatStatus2(value) {
      if (value === 1) {
        return "订单发货";
      } else if (value === 2) {
        return "订单跟踪";
      } else if (value === 3) {
        return "订单跟踪";
      } else if (value === 4) {
        return "删除订单";
      } else if (value === 5) {
        return "删除订单";
      } else {
        return "待付款";
      }
    },
  },
  methods: {
    async fetchData() {
      this.listLoading = true;
      let result = await getOrderList(this.listQuery);
      this.list = result.data.items;
      this.total = result.data.total;
      console.log(this.list, this.listQuery);
      this.listLoading = false;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  components: {
    Pagination,
  },
};
</script>