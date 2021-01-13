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
          <el-input v-model="ruleForm.id">
            <!-- prop="id" -->
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="商品名字" prop="title" v-for="keyItem in Object.keys(list)" :key="keyItem"> 
        <el-col :span="11">
          <el-input v-model="ruleForm.title" > 
           <!-- <span >{{keyItem}}</span> -->
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="摘要" prop="zhaiyao">
        <el-col :span="11">
          <el-input v-model="ruleForm.zhaiyao"> </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="点击次数" prop="click">
        <el-col :span="11">
          <el-input v-model="ruleForm.click"> </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="图片链接" prop="img_url">
        <el-col :span="11">
          <el-input v-model="ruleForm.img_url"> </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="销售价" prop="sell_price">
        <el-col :span="11">
          <el-input v-model="ruleForm.sell_price"> </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="市场价" prop="market_price">
        <el-col :span="11">
          <el-input v-model="ruleForm.market_price"> </el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="库存" prop="stock_quantity">
        <el-col :span="11">
          <el-input v-model="ruleForm.stock_quantity"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item
        label="是否推荐，1为推荐，其他数字为不推荐"
        prop="recommendStatus"
      >
        <el-col :span="11">
          <el-input v-model="ruleForm.stock_quantity"></el-input>
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
import { editProduct, getEditProduct } from "@/api/productself";
import { data as dataorigin } from "../../../mock/product";
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
      // this.$refs[formName].validate(async valid => {
      //   if (valid) {
      //     let result = await editProduct(this.ruleForm);
      //     console.log(result)
      //   //   this.$router.push("/product/index")
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // getInform(){
    //  console.log(this.$route.query.id)
    // }
   getInform(id) {
      let product = dataorigin.items.find(item => {
        if (item.id == id) {
          return item;
        }
      });
       console.log(product);
       this.list=product;
       console.log(this.list,"0000000000")
    },
  
  }
};
</script>
