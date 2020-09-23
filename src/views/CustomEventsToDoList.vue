<template>
    <div>
        <div class="todo-container">
            <div class="todo-wrap">
                <Header ref="header"></Header>
                <List :todos='todos' :delTodo='delTodo'></List>
                <Footer :todos='todos' :selectedAllTodo="selectedAllTodo" :delFinishedTodos="delFinishedTodos"></Footer>
            </div>
        </div>
    </div>   
</template>
<script>
//引入

//工具类
import localStorageUtil from '../util/localStorageUtil'

import '../assets/index.css';
import Header from '../components/toDoList/CustomEventsHeader'
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
                //todos:[
                
                // {title:'学习vue得组件通信',finished:false},
                // {title:'学习vuex得使用',finished:false},
                // {title:'学习php',finished:false},
                // {title:'学习java',finished:true},
                // {title:'学习ps',finished:false},
                // {title:'学习to',finished:false},                
          //  ]
      
           todos:localStorageUtil.readTodos()
        }
    },
    mounted(){
        //绑定自定义事件（addTodo监听）      
        this.$refs.header.$on('addTodo',this.addTodo)// 父组件绑定接受子组件数据
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
    },
    watch:{
        //深度监视 还能监视 数组对象里的属性值得变化
        todos:{
            handler:localStorageUtil.saveTodos,
            deep:true, //深度监视  true能监听对象属性值变化  能监听数组值变化  
            // immediate:true //true 已进入执行 handler里的函数  false 值改变执行handler函数
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
        