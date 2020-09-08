<template>
<div class="login">
    <H1>普通登录组件</H1>
    <div id="account" class="account">
        <accountLogin 
        :rule-form="ruleForm" 
        :rules="rules"
        @submit="submit"
        @errHandle="errHandle"
         ></accountLogin>
    </div>

    <h1>短信验证码登录组件</h1>
    <div class="phone">
        <phone-login 
        :rule-form="phoneForm" 
        v-on:send="send"
        v-on:submit="submit"
        v-on:errHandle="errHandle"
        :countDown="30"
        ></phone-login>
    </div>
</div>
</template>
<script>
export default {
    name:'login',
    components:{},
    props:[],
    data(){
        return{
            ruleForm:{
                username:'',
                password:'',
            },
            rules:{
                username:[
                    {
                        required:true,
                        message:'用户名不能为空',
                        trigger:'blur'
                    },
                    {
                        mix:2,
                        max:6,
                        message:'用户名在2-6个字符之间',
                        trigger:'blur'
                    }
                ],
                password:[
                    {
                        required:true,
                        message:'密码不能为空',
                        trigger:'blur'
                    },
                    {
                        mix:6,
                        max:15,
                        message:'密码在6-15个字符之间',
                        trigger:'blur'
                    }

                ]
            },
            phoneForm:{
                phone:'',
                code:''
            }
        }
    },
    methods:{
        submit(){
            this.$message.success('提交成功')
        },
        errHandle(){
            this.$message.error('表单填写错误，请检查')
        },
        send(){
            //发送逻辑
            this.$message.info('发送验证码成功')
        }

    }
}
</script>
<style>
.login{
    margin-top: 30px;
    margin-left: 30px;

}

.account, .phone{
    width:500px;
}
</style>
