<template>
    <div>
        <div class="todo-container">
            <div class="todo-wrap">
                <Header ref="header"></Header>
                <List :todos='todos' :delTodo='delTodo'></List>
                <Footer>
                       <input slot="isCheck" type="checkbox" v-model="isCheck">
                        <span slot="finish">已经完成{{finishedCount}}件/总计{{todos.length}}件</span>
                        <button slot="delete" class="btn btn-warning" @click="delFinishedTodos">清除已经完成的任务</button>
                </Footer>
            </div>
        </div>
    </div>   
</template>
<script>
//引入

//工具类
import localStorageUtil from '../util/localStorageUtil'
import PubSub from 'pubsub-js'

import '../assets/index.css';
import Header from '../components/toDoList/CustomEventsHeader'
import List from '../components/toDoList/CustomEventsList'
import Footer from '../components/toDoList/CustomEventsFooter'
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

        //订阅消息(delTodo)msg 方法  token 参数
        PubSub.subscribe('delTodo',(msg,token)=>{
            console.log(msg,token)
            this.delTodo(token)
        })
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
    },
    computed:{  //插槽
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
        