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
export default {
  name: "Login",
  data() {
    const validateName = (rule,value,callback) =>{
      let reg = /(^[a-zA-Z0-9]{4,10}$)/
      if(value === ''){
        callback(new Error('请输入用户名'))
      }else if(!reg.test(value)){
        callback(new Error('请输入4~10位用户名'))
      }else{
        callback()
      }
    }
    const validatePass = (rule,value,callback) =>{
      let pass = /(^[a-zA-Z0-9]{4,10}$)/
      if(value === ''){
        callback(new Error('请输入密码'))
      }else if(!pass.test(value)){
        callback(new Error('请输入4~10位密码'))
      }else{
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: ''
      },
      rules:{
        username:[{validator: validateName, trigger: 'blur'}],
        password:[{validator: validatePass, trigger: 'blur'}]
      }
    }
  },
  methods:{
    login(form){
        this.$refs[form].validate((valid) => {
            if(valid){
                console.log(this.form)
                /* this.axios.post('https://rapserve.sunmi.com/app/mock/340/login',this.form)
                .then(res =>{
                  console.log(res);
                if(res.data.status===20){
                  localStorage.setItem('username',res.data.username)
                  this.$message({message:res.data.message,type:'success'})
                  this.$router.push('/home')
                }
                })
                .catch(err => {
                  console.log(err);
                }) */
            }else{
                console.error(this.form);
            }
        })
    }
  }
};
</script>
    
<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #409eff;
  .box-card {
    width: 450px;
    margin: 200px auto;
    .span{
        margin: auto;
    }
    .el-card_header{
        font-size: 34px
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>