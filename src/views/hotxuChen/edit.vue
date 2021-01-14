<template>
  <div class="app-container">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="200px"
      class="demo-ruleForm"
    >
      <el-form-item label="id" prop="id">
        <el-col :span="11">
          <el-input v-model="list.id">
            <!-- prop="id" -->
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="名称" prop="title">
        <el-col :span="11">
          <el-input v-model="list.title"> </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="添加时间" prop="time">
        <el-col :span="11">
          <el-input v-model="list.add_time"> </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="摘要" prop="zhaiyao">
        <el-col :span="11">
          <el-input v-model="list.zhaiyao"> </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="点击次数" prop="click">
        <el-col :span="11">
          <el-input v-model="list.click"> </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="图片链接" prop="img_url">
        <el-col :span="11">
          <el-input v-model="list.img_url"> </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="销售价" prop="sell_price">
        <el-col :span="11">
          <el-input v-model="list.sell_price"> </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="市场价" prop="market_price">
        <el-col :span="11">
          <el-input v-model="list.market_price"> </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="库存" prop="stock_quantity">
        <el-col :span="11">
          <el-input v-model="list.stock_quantity"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item
        label="是否推荐，1为推荐，其他数字为不推荐"
        prop="recommendStatus"
      >
        <el-col :span="11">
          <el-input v-model="list.stock_quantity"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="test()">测试</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { editProductHot, getEditProduct } from "@/api/productself";
import { data as dataoriginHot } from "../../../mock/hotXuchen";
export default {
  data() {
    return {
      ruleForm: {
        id: this.$route.query.id,
        title: "",
        zhaiyao: "",
        click: "",
        img_url: "",
        sell_price: "",
        market_price: "",
        stock_quantity: ""
      },
      list: {},
      total: 0
    };
  },
  created() {
    this.getInform(this.$route.query.id);
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let result = await editProductHot(this.list);
          // console.log(result)
          this.$router.push("/productxuchen/hot")
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // getInform(){
    //  console.log(this.$route.query.id)
    // }
    getInform(id) {
      console.log(dataoriginHot)
      let product = dataoriginHot.items.find(item => {
        if (item.id == id) {
          return item;
        }
      });
      // console.log(product);
      this.list = product;
      // console.log(this.list, "0000000000");
    }
  }
};
</script>
