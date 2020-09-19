<template>
<div>
    <label>姓：<input type="text" placeholder="请输入姓氏" v-model="firstName"></label>
    <label>名：<input type="text" placeholder="请输入姓名字" v-model="lastName"></label>
<p>-------------------------------------------------------------------------------------</p>
<label>姓名：<input type="text" placeholder="请输入姓名" v-model="fullName"></label>
</div>
</template>
<script>
export default {
    name:"ComputedAndWatch",
    data(){
        return{
            firstName:'',//姓
            lastName:'',//名           
        }
    },
    computed:{
        //计算属性 姓名
        fullName(){  //全名 类似函数 get方法
                return this.firstName+'.'+this.lastName

        }
    }
}
</script>>