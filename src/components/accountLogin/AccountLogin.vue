<template>
    <div>
        <el-form :model="ruleForm"  :rules="rules" ref="ruleForm">
            <el-form-item prop="username">
                <el-input placeholder="请输入用户名" 
                v-model="ruleForm.username">
                    <i slot="prefix" class="el-icon-user"></i>
                </el-input>
            </el-form-item>

            <el-form-item prop="password"  >
                <el-input 
                placeholder="请输入密码" 
                show-password 
                v-model="ruleForm.password">
                    <i slot="prefix" class=" el-icon-lock"></i>
                </el-input>    
            </el-form-item>

            <el-form-item>
                <el-button 
                v-on:click="login" type="primary" style="width:100%">登录</el-button>
            </el-form-item>
        </el-form>    
    </div>
</template>
<script>
export default {
    name:'AccountLogin',
    components:{},
    data(){
        return {}
    },
    props:{
        ruleForm:{
            type:Object,
            required:true
        },
        rules:{
            type:Object,
            required:true
        }
    },
    methods:{
        login(){
            this.$refs.ruleForm.validate((valid)=>{
                if(valid){
                    this.$emit('submit')
                }else{
                    this.$emit('errHandle')
                }
            })
        }
    }
}
</script>