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
            <el-input v-model="input"
              class="input-width"
              placeholder="优惠券名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="优惠券类型：">
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
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button size="mini" class="btn-add" style="float: right" @click="goAdd()">添加</el-button>
    </el-card>
    <div class="table-container">
      <el-table :data="tableData" border style="width: 100%; margin-top: 30px">
        <el-table-column type="selection" width="60" align="center"> </el-table-column>
        <el-table-column prop="id" label="编号" width="100" align="center">
        </el-table-column>
        <el-table-column prop="name" label="活动标题" align="center">
        </el-table-column>
        <el-table-column prop="address" label="活动状态" width="140" align="center"> </el-table-column>
        <el-table-column prop="address" label="开始时间" width="140" align="center"> </el-table-column>
        <el-table-column prop="address" label="结束时间" width="140" align="center"> </el-table-column>
        <el-table-column prop="address" label="上线/下线" width="200" align="center"> </el-table-column>
        <el-table-column prop="address" label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="text"
                       @click="handleSelectSession(scope.$index, scope.row)">设置商品
            </el-button>
            <el-button size="mini"
                       type="text"
                       @click="handleUpdate(scope.$index, scope.row)">
              编辑
            </el-button>
            <el-button size="mini"
                       type="text"
                       @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
       options: [{
          value: '选项1',
          label: '全场赠券'
        }, {
          value: '选项2',
          label: '会员赠券'
        }, {
          value: '选项3',
          label: '购物赠券'
        }, {
          value: '选项4',
          label: '注册赠券'
        }],
        value: ''
    };
  },
  methods: {
    goAdd(){
      this.$router.push({ path: "/sms/addCoupon" });
    }
  }
};
</script>
