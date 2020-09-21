<template>
    <div id="app">
        <h4>姓名:{{name}}</h4>
        <h4>年龄:{{age}}</h4>
        {{person}}
        <button @click="logPerson('大聊聊',60)">调用方法</button>
    </div>    
</template>
<script>
export default {
    name:'PropsComponent',
    // props:{
    //     name: String,
    //     age:Number,
    //     person:Object,
    //     logPerson:Function
    // },
     props:{
         name:{type:String, required:true, default:'撩课'},
         age:Number,
         person:Object,
         logPerson:Function
        
     }
}
</script>