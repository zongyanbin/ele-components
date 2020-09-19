<template>
<div>
    <label>姓：<input type="text" placeholder="请输入姓氏" v-model="firstName"></label>
    <label>名：<input type="text" placeholder="请输入姓名字" v-model="lastName"></label>
<p>-------------------------------------------------------------------------------------</p>
<label>单相绑定     姓名：<input type="text" placeholder="请输入姓名" v-model="fullNameOne"></label>
<p></p>
<label>双向绑定     姓名：<input type="text" placeholder="请输入姓名" v-model="fullNameTwo"></label>
<p></p>
<label>watch监听     姓名：<input type="text" placeholder="请输入姓名" v-model="fullNameTwo"></label>
</div>
</template>
<script>
export default {
    name:"ComputedAndWatch",
    data(){
        return{
            firstName:'',//姓
            lastName:'',//名 
            //被watch 监听改变
            fullNameThree:''          
        }
    },
    //配置计算属性
    computed:{
        //计算属性 姓名
        fullNameOne:{  //全名 类似函数 get方法
               get(){
                    return this.firstName+'.'+this.lastName;

               }
        },
        fullNameTwo:{
             get(){
                    return this.firstName+'.'+this.lastName;

               },
            set(value){
              let names = value.split('.')
              this.firstName = names[0];
              this.lastName = names[1];
    
            }
        }
    }
    ,
    watch:{
        //监听firstName
        firstName(value){
            console.log(`watch监听firstName发生改变：${value}`);
            //更新fullNameThree
            this.fullNameThree = value+'.'+this.lastName;
        },
        lastName(value){
            console.log(`watch监听到lastName发生改变：${value}`)
             //更新fullNameThree
            this.fullNameThree = this.firstName+'.'+value;
        }
    }
}
</script>