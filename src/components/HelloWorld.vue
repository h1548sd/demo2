<template>
  <div class="backimage">
<!--    登录-->
      <div class="loginbox" v-if="show">
           <div class="hname">
             后台管理系统
           </div>
           <div class="formbox">
             <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
               <el-form-item  prop="email">
                 <el-input type="text" placeholder="邮箱" v-model="ruleForm.email" autocomplete="off"></el-input>
               </el-form-item>
               <el-form-item prop="password">

                 <el-input type="password" placeholder="密码" v-model="ruleForm.password" autocomplete="off"></el-input>
               </el-form-item>
               <el-button type="primary" class="btn" @click="submit">登录</el-button>
             </el-form>
           </div>
            <p style="align-self: flex-end" @click="show = false">>>去注册</p>
      </div>
<!--    注册-->
    <div class="loginbox" v-else>
      <div class="hname">
        后台管理系统
      </div>
      <div class="formbox">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item  prop="email">
            <el-input type="text" placeholder="邮箱" v-model="ruleForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" placeholder="密码" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="text" placeholder="昵称" v-model="ruleForm.nickname" autocomplete="off"></el-input>
          </el-form-item>
          <div class="code">
            <el-input type="text" placeholder="验证码" v-model="ruleForm.code" autocomplete="off" style="width: 50%;height: 100%" ></el-input>
            <el-button type="primary" style="width: 40%;height: 100%" v-if="codebtn" @click="getcode()">获取验证码</el-button>
            <el-button type="primary" style="width: 40%;height: 100%" v-else>{{count}}</el-button>
          </div>
          <el-button type="primary" class="btn" @click="enroll()">注册</el-button>
        </el-form>
      </div>
      <p style="align-self: flex-end"  @click="show = true">去登录</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      show:true,
      codebtn:true,
      ruleForm: {
        email: '',
        password: '',
        nickname:'',
        code:''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      },
      // 定时器
      timer:null,
      count:0
    }
  },
  methods: {
    getcode() {
      if (!this.timer) {
        this.count = 60;
        this.codebtn = false;
        // setInterval() 第一个参数是函数（function）,第二个参数是间隔的毫秒数，1秒=1000毫米
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= 60) {
            this.count--;
          } else {
            this.codebtn = true;
            //clearInterval(参数) 方法用于停止 setInterval() 方法执行的函数代码，参数：需停止的全局变量名，指的是this.timer
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);//1秒=1000毫米
        this.$axios({
          method: 'post',//请求后端的方式（请求方式由后端规定）
          url: '/api/code',//请求的接口地址（api表示的是域名，code表示这里需要获取验证码的接口。同一个服务器的域名都是相同的，只是请求的接口不同）
          // url: '/api/login?email='+this.ruleForm.email+'&password='+this.ruleForm.password,//请求的接口地址
          params: {//需要传递给后台的参数，需要几个参数就传几个参数
            email: this.ruleForm.email
          }
        }).then((result) => {
          console.log(result)
          if (result.data.code == 200) {
            this.$message({//警告提示框
              message: result.data.msg,
              type: 'success'
            });
          } else {
            this.$message({//警告提示框
              message: result.data.msg,
              type: 'warning'
            });
          }
        })
      }
    },
    submit() {
      if (this.ruleForm.email) {
        if (this.ruleForm.password) {
          this.$router.push('/slde')
        }else {
          this.$message({//警告提示框
            message: '请输入密码',
            type: 'warning'
          });
        }
      }else {
        this.$message({//警告提示框
          message: '请输入邮箱',
          type: 'warning'
        });
    }

      // this.$refs[formName].validate((valid) => {
      //   console.log(valid)
      //   // if (valid) {
        //   alert('submit!');
        // } else {
        //   console.log('error submit!!');
        //   return false;
        // }
      // });
      //请求后台
      // this.$axios({
      //   method: 'get',//请求后端的方式（请求方式由后端规定）
      //   url: '/api/login',//请求的接口地址
      //   // url: '/api/login?email='+this.ruleForm.email+'&password='+this.ruleForm.password,//请求的接口地址
      //   params: {//需要几个参数就传几个参数
      //     email:this.ruleForm.email,
      //     password: this.ruleForm.password
      //   }
      //
      // }).then((result) => {
      //   console.log(result)
      //   if(result.data.code == 200){
      //     this.$message({//警告提示框
      //       message: result.data.msg,
      //       type: 'success'
      //     });
      //     this.$router.push('/car')
      //
      //   }else {
      //     this.$message({//警告提示框
      //       message: result.data.msg,
      //       type: 'warning'
      //     });
      //   }
      // })
    },
    enroll(){
      if(this.ruleForm.email){
        if(this.ruleForm.password){
          if(this.ruleForm.nickname){
            if(this.ruleForm.code){
              this.$axios({
                method: 'post',//请求后端的方式（请求方式由后端规定）
                url: '/api/register',//请求的接口地址
                // url: '/api/login?email='+this.ruleForm.email+'&password='+this.ruleForm.password,//请求的接口地址
                params: {//需要几个参数就传几个参数
                  email:this.ruleForm.email,
                  password: this.ruleForm.password,
                  nickname: this.ruleForm.nickname,
                  code:this.ruleForm.code
                }

              }).then((result) => {
                console.log(result)
                if(result.data.code == 200){
                  this.$message({//警告提示框
                    message: result.data.msg,
                    type: 'success'
                  });


                }else {
                  this.$message({//警告提示框
                    message: result.data.msg,
                    type: 'warning'
                  });
                }
              })

            }else {
              this.$message({//警告提示框
                message: '请输入验证码',
                type: 'warning'
              });
            }
          }else {
            this.$message({//警告提示框
              message: '请输入昵称',
              type: 'warning'
            });
          }
        }else {
          this.$message({//警告提示框
            message: '请输入密码',
            type: 'warning'
          });
        }
      }else {
        this.$message({//警告提示框
          message: '请输入邮箱',
          type: 'warning'
        });
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .backimage{
    width: 100%;
    height: 100%;
    background: url("../assets/login-bg.jpg") no-repeat;
    background-size: 100%; /*图片大小占盒子的大小的多少*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
.loginbox{
  width: 350px;
  height: 350px;
  background: rgba(225,225,225,0.7);/*透明度*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  .hname{
    width: 100%;
    height: 50px;
    /*background: white;*/
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    border-bottom: 2px solid #eeeeee;

  }
  .formbox{
    width: 100%;
    height: 230px;
    /*background: yellowgreen;*/

  }
  .demo-ruleForm{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .btn{
    width: 60%;
    height: 30px;
  }
.code{
  width: 60%;
  height: 30px;
  /*background: yellowgreen;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>
