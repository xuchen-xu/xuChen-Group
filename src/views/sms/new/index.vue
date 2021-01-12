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
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button size="mini" class="btn-add">选择品牌</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input10: "",
       options: [{
          value: '选项1',
          label: '推荐中'
        }, {
          value: '选项2',
          label: '未推荐'
        }],
        value: ''
    };
  },
};
</script>
