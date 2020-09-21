<template>
    <div>
        <li>
            <label>
                <input type="checkbox" v-model="todo.finished">
                <span>{{todo.title}}</span>
            </label>
            <button class="btn btn-warning">删除</button>
        </li>    
    </div>      
</template>
<script>
export default {
    name:'nameitem',
    props:{
        todo:Object
    }
}
</script>
<style scoped>
li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}


li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top:-1px;
}
li button{
    padding: 4px 10px;
    float:right;
    margin-top:3px;
}
li:before{
    content: initial;
}
li:last-child{
    border-bottom: none;
}
</style>
