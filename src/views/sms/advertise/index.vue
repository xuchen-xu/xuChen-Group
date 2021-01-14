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
          <el-form-item label="广告名称：">
            <el-input
              v-model="input"
              class="input-width"
              placeholder="广告名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="广告位置：">
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
          <el-form-item label="到期时间：">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期">
            </el-date-picker>
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
        <el-table-column label="广告名称" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="广告位置" width="140" align="center">
          <template slot-scope="scope">{{scope.row.type}}</template>
        </el-table-column>
        <el-table-column label="广告图片" width="140" align="center">
          <template slot-scope="scope"><img style="height: 80px" :src="scope.row.pic"></template>
        </el-table-column>
        <el-table-column label="时间" width="140" align="center">
           <template slot-scope="scope">
            <p>开始时间：{{scope.row.start_time}}</p>
            <p>到期时间：{{scope.row.end_time}}</p>
          </template>
        </el-table-column>
        <el-table-column label="上线/下线" width="200" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="handleUpdateStatus(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="点击次数" width="200" align="center">
          <template slot-scope="scope">{{scope.row.click_count}}</template>
        </el-table-column>
        <el-table-column label="生成订单" width="200" align="center">
          <template slot-scope="scope">{{scope.row.order_count}}</template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
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
  </div>
</template>

<script>
import { getAdvertiseList } from "@/api/advertise";
import Pagination from "@/components/Pagination";
import { formatDate } from "@/utils/date";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: "PC首页轮播",
        },
        {
          value: "选项2",
          label: "APP首页轮播",
        },
      ],
      value: "",
      value1: "",
      listQuery: {
        page: 1,
        limit: 5,
      },
      list: null,
      total: 0,
      listLoading: false,
    };
  },
  created() {
    this.getAllAdvertiseList();
  },
  methods: {
    handleUpdate(){

    },
    handleDelete(){

    },
    handleUpdateStatus(){

    },
    async getAllAdvertiseList() {
      this.listLoading = true;
      let result = await getAdvertiseList(this.listQuery);
      console.log(result, "888888888");
      this.listLoading = false;
      this.list = result.data.items;
      this.total = result.data.total;
    },
  },
};
</script>
