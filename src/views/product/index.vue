<template>
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <!-- <el-button
          style="float:right"
          type="primary"
          @click="handleSearchList()"
          size="small"
        >
          查询搜索
        </el-button> -->
        <el-button
          style="float:right;margin-right: 15px"
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
          <!-- <el-form-item label="商品名称：">
            <el-input
              v-model="listQuery.title"
              class="input-width"
              placeholder="商品名称"
            ></el-input> 
          </el-form-item> -->
          <el-select
            v-model="value"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading"
          >
          </el-select>

          <el-form-item label="推荐状态：">
            <el-select
              v-model="listQuery.recommendStatus"
              placeholder="全部"
              clearable
              class="input-width"
            >
              <el-option
                v-for="item in recommendOptions"
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
    <router-link to="/product/new">
      <el-button type="primary">添加商品</el-button>
    </router-link>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <!-- <el-table-column
        type="selection"
        width="60"
        align="center"
      ></el-table-column> -->

      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="商品名字" width="200">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="添加时间" width="210" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.add_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="摘要" width="210" align="center">
        <template slot-scope="scope">{{ scope.row.zhaiyao }}</template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="图片"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          <img :src="scope.row.img_url" width="60px" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="售价" width="60">
        <template slot-scope="scope">{{ scope.row.sell_price }}</template>
      </el-table-column>
      <el-table-column align="center" label="市场价" width="60">
        <template slot-scope="scope">{{ scope.row.market_price }}</template>
      </el-table-column>
      <el-table-column label="是否推荐" width="120" align="center">
        <template slot-scope="scope">
          <el-switch
            @change="handleRecommendStatusStatusChange(scope.$index, scope.row)"
            :active-value="1"
            :inactive-value="0"
            v-model="scope.row.recommendStatus"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <!-- <router-link to="/product/edit"> -->
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.row.id, scope.row)"
            >编辑</el-button
          >
          <!-- </router-link> -->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
      <!-- <el-dialog title="设置排序" :visible.sync="sortDialogVisible" width="40%">
      <el-form :model="sortDialogData" label-width="150px">
        <el-form-item label="排序：">
          <el-input
            v-model="sortDialogData.sort"
            style="width: 200px"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="sortDialogVisible = false" size="small"
          >取 消</el-button
        >
        <el-button type="primary" @click="handleUpdateSort" size="small"
          >确 定</el-button
        >
      </span>
    </el-dialog> -->
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getProList"
    />
  </div>
</template>

<script>
import { getProductList, deleteProduct } from "@/api/productself";
import Pagination from "@/components/Pagination";
import { data as dataorigin } from "../../../mock/product";

const defaultListQuery = {
  page: 1,
  limit: 5,
  title: null,
  recommendStatus: null
};

const defaultRecommendOptions = [
  {
    label: "未推荐",
    value: 0
  },
  {
    label: "推荐中",
    value: 1
  }
];

export default {
  data() {
    return {
      multipleSelection: [],
      listQuery: Object.assign({}, defaultListQuery),
      recommendOptions: Object.assign({}, defaultRecommendOptions),
      list: [],
      listLoading: true,
      total: 0,
      sortDialogVisible: false,
      sortDialogData: { sort: 0, id: null },
      // listQuery: {
      //   page: 1,
      //   limit: 3
      // }
      options: [],
      value: [],
      loading: false,
      states: ["mm"]
    };
  },
  created() {
    this.getProList();
  },
  methods: {
    async getProList() {
      this.listLoading = true;
      const result = await getProductList(this.listQuery);
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
    async handleDelete(index, row) {
      //调用deleteProduct来向服务器发送请求删除商品
      const result = await deleteProduct({ id: row.id });
      //商品删除成功重新调用getProList来获取商品列表数据
      this.getProList();
    },
    handleSearchList(title) {
      // this.getProList();
      this.listQuery.page = 1;
      // var arr = list.filter(item => item.title == title);
      this.getProList();
      // list = arr;
    },
    handleResetSearch() {
      this.listQuery = Object.assign({}, defaultListQuery);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    remoteMethod(query) {
      console.log(query);
      if (query !== "") {
        // this.loading = true;
        setTimeout(() => {
          // this.loading = false;
          // console.log(this.list);
          var productList = dataorigin.items.find(item => {
            if (query == item.title) {
              return item;
            }
            console.log(item, "00000");
          });
          console.log(productList, "1111");
          var arr = [];
          arr.push(productList);
        //   for (let i in productList) {
        //     arr.push(productList[i]); //属性
        //   };
        //   console.log(arr,"33333")
        //   this.list=arr
        this.list=arr;
        }, 200);
        // console.log(this.options);
      } else {
        // this.options = [];
      }
    },
    handleEdit(index, row) {
      this.$router.push({ path: "/product/edit/", query: { id: row.id } });
      console.log(row.id);
    }
  },
  components: {
    Pagination
  }
  // mounted() {
  //   this.list = this.states.map(item => {
  //     return { title: `title:${item.title}` };
  //   });
  // }
};
</script>
