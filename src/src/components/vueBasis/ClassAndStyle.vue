<template>
<div>
    <h3>class得使用</h3>
    <div v-bind:class="oneClass">常用：样式类可以是字符串</div>
    <div v-bind:class="{classOne:true,classTwo:true}"> 了解：样式类可以对象，key 类名字 value是true/false</div>
    <div v-bind:class="['classOne','classTwo']">了解：样式类可以是数组class="['classOne','classTwo']"</div>
    <div v-bind:class="[oneClass,twoClass]">常用：样式类可以是数组class="[oneClass,twoClass]"</div>
    <p>----------------------------------------------------</p>
     <h3>style得使用</h3>
    <div style="width:300px; height:200px; margin:10px auto;"
    v-bind:style="{backgroundColor:bgColor,fontSize:fSize}"
    >常用：给一个标检动态添加样式，css属性 对于后面定义通用性组件非常有帮助</div>

</div>    
</template>

<script>
export default {
    name:'ClassAndStyle',
    data(){
        return {
            oneClass:'classOne',
            twoClass:'classTwo',
            bgColor:'red',
            fSize:'30px'
        }
    }
  
}
</script>
<style>
.classOne{
    font-size: 30px;
    color:red;
}
.classTwo{
    width: 200px;
    height: 200px;
    font-size: 30px;
    color:red;
    background-color:blue;
    margin: 10px auto;
}
</style>