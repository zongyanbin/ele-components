<template>
    <div>
        <div class="todo-container">
            <div class="todo-wrap">
                <Header :addTodo='addTodo'></Header>
                <List :todos='todos' :delTodo='delTodo'></List>
                <Footer :todos='todos' :selectedAllTodo="selectedAllTodo" :delFinishedTodos="delFinishedTodos"></Footer>
            </div>
        </div>
    </div>   
</template>
<script>
//引入

import '../assets/index.css';
import Header from '../components/toDoList/Header'
import List from '../components/toDoList/List'
import Footer from '../components/toDoList/Footer'
export default {
    name:'nameToDuList',
    components:{
        Header,
        List,
        Footer
    },
    data(){
        return{
            todos:[
                {title:'学习vue得组件通信',finished:false},
                {title:'学习vuex得使用',finished:false},
                {title:'学习php',finished:false},
                {title:'学习java',finished:true},
                {title:'学习ps',finished:false},
                {title:'学习to',finished:false},                
            ]
        }
    },
    methods:{
        //插入一条数据
        addTodo(todo){
            this.todos.unshift(todo)
        },
        //根据索引删除一条记录
        delTodo(index){
            this.todos.splice(index,1)
        },
        //是否选中所有
        selectedAllTodo(isCheck){
            this.todos.forEach(todo=>{
                todo.finished = isCheck
            })
        },
        delFinishedTodos(){
            this.todos = this.todos.filter(todo=>!todo.finished) //false得都留下来放到新数组里
        }
    }
}
</script>
<style scoped>
.todo-container{
    width:600px;
    margin: 0 auto;
}
.todo-container .todo-wrap{
    padding:10px;
    border: 1px solid#ddd;
    border-radius: 5px;
}
</style>