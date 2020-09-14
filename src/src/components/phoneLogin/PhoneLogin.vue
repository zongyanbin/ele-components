<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="phone">  <!--1-->
                <el-input placeholder="请输入手机号" v-model="ruleForm.phone">
                    <i slot="prefix" class="el-icon-phone"></i>
                </el-input>
           </el-form-item>   

        <el-form-item prop="code"> <!--2-->
            <el-row :gutter="20">
                <el-col :span="18">
                    <el-input placeholder="请输入验证码" v-model="ruleForm.code">
                        <i slot="prefix" class="el-icon-tickets"></i>
                    </el-input>
                </el-col>
                <el-col :span="6">
                    <el-button v-on:click="sendCode" :disabled="disabled">{{btnText}}</el-button>
                </el-col> 
            </el-row>    
        </el-form-item>

        <el-form-item> <!--3-->
            <el-button type="primary" style="width:100" v-on:click="phoneLogin">登录</el-button>
        </el-form-item>

        </el-form>
    </div>
</template>
<script>
export default {
    name:'phoneLogin',
    components:{},
    props:{
      ruleForm:{
          type:Object,
          required:true
      },
      countDown:{  //都倒计时
            type:Number,
            default:60
      },
      test:{
          type:Number,
          default:110
      }
    },
    data(){
        let checkPhone = (rule,value,callback)=>{
            if(!value){
                return callback(new Error('手机号码不能为空'))
            }else{
                let reg = /^1[3|4|5|7|8][0-9]\d{8}/
                if(reg.test(value) && value.length==11){
                    callback()
                }else{
                    if(value.length>11){
                        return callback(new Error('手机号码超出11位，请输入正确都手机号码'))
                    }                   
                    return callback(new Error('请输入正确手机号码'))
                }
            }
        }
        return {
            rules:{
                phone:[
                    {validator:checkPhone,trigger:'change'}
                ],
                code:[
                    {required:true,message:'验证码不能为空',trigger:'blur'}
                ]
            },
            disabled:false,
            btnText:'发送验证码',
            time:0
        }
    },
    methods:{
        sendCode(){
            //1.手机号码必须输入正确,如果输入不正确，就提示
            this.$refs.ruleForm.validateField('phone',errorMessage=>{
                console.log(errorMessage)
                if(errorMessage){
                    this.$mesage.error(errorMessage);
                }else{
                       alert(this.test)
                    //1.时间开始倒数
                    //2.按钮进入禁用状态
                    //3.如果倒计时结束 按钮可恢复状态 按钮文字变成重新发送 把倒计时时间重置
                    //4.倒计时的过程中 按钮文字为 多少s后重新发送
                    let timer = setInterval(()=>{
                        this.time--
                        this.btnText = `${this.time}s后重新发送`
                        this.disabled =  true
                        if(this.time ===0){
                            this.disabled = false
                            this.btnText = "重新发送"
                            this.time = this.countDown
                            clearInterval(timer)
                        }
                        
                    },1000)  //定时器
                    this.$emit('send')
                }
            })
        },
        phoneLogin(){
            this.$refs.ruleForm.validate((valid)=>{
                if(valid){
                    this.$emit('submit')
                }else{
                    this.$emit('errHandle')
                }
            })
        }
    },
    mounted(){
        this.time = this.countDown
     
    }
}
</script>>