<template>
    <div>
        <!--v-text 标签里注入文字内容  和v-html 标签里注入标签-->  
        <p>{{content}})(Like it,LIke)</p><br><!--拼接式-->
        <p v-text="content">(Like it,LIke)</p><!--覆盖式式-->
        <p v-html="content"></p><!--解析html标签-->
        <p v-pre>{{intro}}</p><!--不被选软  原装输出-->
        <p v-cloak>{{message}}</p>
        <p v-once>{{name}}</p><!-- v-one只会渲染一次-->
        <p>{{name}}</p><!-- v-one只会渲染一次-->
        <input type="text" name="" id="" placeholder="请输入姓名" v-model="name">
        <!--ref-->
        <p style="color:red">-----------------------ref--------------------------------</p>
        <p ref="fish" data="">我是一只鱼</p>
        <p ref="hhh">我是一只乌龟</p>
        <button @click="log">输出内容</button>
        <p style="color:red">-----------------------使用自定义指令--------------------------------</p>
        <p v-upper-word="word1"></p>
         <p v-lower-word="word2"></p>
    </div>
</template>
<script>
export default {
    name:"OtherInstruct",
    data(){
        return {
            content:'<a href="http://www.itlike.com">撩课学院</a>',
            intro:'LIKE IT',
            message:'还有半个小时就放学了',
            name:'小王',
            word1:'it like ,like it',
            word2:'IT LIKE ,LIKE IT',
        }
    },
    methods:{
        log(){
           //console.log()
                    console.log(this.$refs.hhh)
                    console.log(this.$refs.hhh.innerHTML)
           
        }
    }, //自定义局部指令 用钩子
    directives:{
        'lower-word'(el,binding){
            el.textContent = binding.value.toLowerCase();
        }
    }
    
}
</script>
<style scoped>
[v-cloak]{
    display: none;
}
</style>>