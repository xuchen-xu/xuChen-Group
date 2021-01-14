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
          <el-form-item label="品牌名称：">
            <el-input
              v-model="input"
              class="input-width"
              placeholder="品牌名称："
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="推荐状态：">
            <el-select v-model="value" placeholder="全部">
              <el-option
                v-for="item in options"
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
      <el-button size="mini" class="btn-add" style="float: right"
        >选择品牌</el-button
      >
    </el-card>
    <div class="table-container">
      <el-table :data="list" border style="width: 100%; margin-top: 30px">
        <el-table-column type="selection" width="60" align="center">
        </el-table-column>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="品牌名称" align="center">
          <template slot-scope="scope">{{ scope.row.brand_name }}</template>
        </el-table-column>
        <el-table-column label="是否推荐" width="140" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="handleStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.recommend_status"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="排序" width="140" align="center">
          <template slot-scope="scope">{{ scope.row.sort }}</template>
        </el-table-column>
        <el-table-column label="状态" width="140" align="center">
          <template slot-scope="scope">{{
            scope.row.recommend_status | formatRecommendStatus
          }}</template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleEditSort(scope.$index, scope.row)"
              >设置排序
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
      @pagination="getAllBrandList"
    />
  </div>
</template>

<script>
import { getBrandList } from "@/api/brand";
import Pagination from "@/components/Pagination";
import { formatDate } from "@/utils/date";
export default {
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: "推荐中",
        },
        {
          value: "选项2",
          label: "未推荐",
        },
      ],
      value: "",
      listQuery: {
        page: 1,
        limit: 5,
      },
      list: null,
      total: 0,
      listLoading: false,
      isEdit: false,
      sortDialogVisible: false,
      sortDialogData: { sort: 0, id: null },
    };
  },
  filters: {
    formatRecommendStatus(recommendStatus) {
      if (recommendStatus === 1) {
        return "推荐中";
      } else {
        return "未推荐";
      }
    },
  },
  created() {
    this.getAllBrandList();
  },
  methods: {
    handleEditSort(index, row) {
      this.sortDialogVisible = true;
      this.sortDialogData.sort = row.sort;
      this.sortDialogData.id = row.id;
    },
    handleDelete() {},
    async getAllBrandList() {
      this.listLoading = true;
      let result = await getBrandList(this.listQuery);
      console.log(result);
      this.listLoading = false;
      this.list = result.data.items;
      this.total = result.data.total;
    },
  },
  components: {
    Pagination,
  },
};
</script>
