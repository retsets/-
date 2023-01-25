<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { setToken } from "@/utils/setToken.js";
import { nameRule, passRule } from "../utils/vaildate.js";
import { login } from "../api/api";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: nameRule, trigger: "blur" }],
        password: [{ validator: passRule, trigger: "blur" }],
      },
    };
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
           /*  把这个登录房费封装成api进行调用
           this.service.post('/login', this.form)
            .then((res) => {
                if (res.data.status === 200) {
                    setToken('username', res.data.username)
                    setToken('token', res.data.token)
                    this.$message({message: res.data.message, type: 'success'})
                    this.$router.push('/home')
                }
            }) 
            */
           login(this.form).then(res => {
                if (res.data.status === 200) {
                    setToken('username', res.data.username)
                    setToken('token', res.data.token)
                    this.$message({message: res.data.message, type: 'success'})
                    this.$router.push('/home')
                }
           })
        } else {
          console.error(this.form);
        }
      });
    },
  },
};
</script>
    
<style lang="scss" >
*{
  margin: 0;
  padding: 0;
}
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(../assets/登陆背景图.jpeg) center no-repeat;
  background-size:cover;
  .el-card{
    background-color: #65768557;
  }
  .box-card {
    opacity: 0.7;
    width: 450px;
    margin: 200px auto;
    color: #fff;
     /* .span {
      margin: auto;
      text-align:center;
    }  */
    .el-from .el-from-item__label{
      color:#fff;
    }
    .el-card__header {
      font-size: 34px;
      margin: auto;
      text-align: center;
      
    }
    .el-button {
      width: 250px;
      
    }
  }
}
</style>