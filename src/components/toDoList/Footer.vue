<template>
    <div class="todo-footer">
        <label><input type="checkbox" v-model="isCheck"></label>
        <span>
            <span>已经完成{{finishedCount}}件</span>/总计{{todos.length}}件
        </span>
        <button class="btn btn-warning" @click="delFinishedTodos">清除已经完成的任务</button>
    </div>      
</template>
<script>
export default {
    name:'Footer',
    props:{
        todos:Array,
        selectedAllTodo:Function,
        delFinishedTodos:Function
    },
    computed:{
        finishedCount(){
            return this.todos.reduce((total,todo)=>total+(todo.finished?1:0),0)
        },
        isCheck:{
            get(){
                return this.finishedCount ===this.todos.length && this.todos.length>0
            },
            set(value){
              this.selectedAllTodo(value)
            }
        }
    }
}
</script>
<style scoped>
.todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}
.todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor:pointer
}
.todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
}
.todo-footer .button{
    float:right;
    margin-top: 5px;
}
</style>