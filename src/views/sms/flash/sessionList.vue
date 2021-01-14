<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button
        size="mini"
        class="btn-add"
        @click="handleAdd()"
        style="float: right; margin-right: 15px"
        >添加</el-button
      >
    </el-card>
    <div class="table-container" style="margin-top:30px;">
      <el-table :data="list" border style="width: 100%">
        <el-table-column label="编号" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="秒杀时间段名称" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="每日开始时间" align="center"> 
          <template slot-scope="scope">{{ scope.row.start_time }}</template>
        </el-table-column>
      <el-table-column label="每日结束时间" width="180" align="center">
        <template slot-scope="scope">{{ scope.row.end_time }}</template>
      </el-table-column>
        <el-table-column label="启用" width="180" align="center">
          <template slot-scope="scope">
            <el-switch
            @change="handleStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center"> 
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
    <el-dialog title="添加活动" :visible.sync="dialogVisible" width="40%">
      <el-form
        :model="flashPromotion"
        ref="flashPromotionForm"
        label-width="150px"
        size="small"
      >
        <el-form-item label="活动标题：">
          <el-input
            v-model="flashPromotion.title"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item label="开始时间：">
          <el-date-picker
            v-model="flashPromotion.startDate"
            type="date"
            placeholder="请选择时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间：">
          <el-date-picker
            v-model="flashPromotion.endDate"
            type="date"
            placeholder="请选择时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="上线/下线">
          <el-radio-group v-model="flashPromotion.status">
            <el-radio :label="1">上线</el-radio>
            <el-radio :label="0">下线</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" size="small">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getProductTimeList } from "@/api/time";
import { formatDate } from "@/utils/date";
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
      list: null,
      total: 0,
      listLoading: false,
      dialogVisible: false,
      flashPromotion: Object.assign({}, defaultFlashPromotion),
      isEdit: false,
    };
  },
  created() {
    this.getTimeList();
  },
  methods: {
    handleAdd() {
      this.dialogVisible = true;
      this.isEdit = false;
      this.flashPromotion = Object.assign({}, defaultFlashPromotion);
    },
    handleStatusChange(){

    },
    handleUpdate(){

    },
    handleDelete(){

    },
    async getTimeList() {
      this.listLoading = true;
      let result = await getProductTimeList(this.listQuery);
      console.log(result, "2222");
      this.listLoading = false;
      this.list = result.data.items;
    },
    // handleDialogConfirm() {
    //   this.$confirm("是否要确认?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   }).then(() => {
    //     if (this.isEdit) {
    //       updateFlash(this.flashPromotion.id, this.flashPromotion).then(
    //         (response) => {
    //           this.$message({
    //             message: "修改成功！",
    //             type: "success",
    //           });
    //           this.dialogVisible = false;
    //           this.getList();
    //         }
    //       );
    //     } else {
    //       createFlash(this.flashPromotion).then((response) => {
    //         this.$message({
    //           message: "添加成功！",
    //           type: "success",
    //         });
    //         this.dialogVisible = false;
    //         this.getList();
    //       });
    //     }
    //   });
    // },
  },
};
</script>