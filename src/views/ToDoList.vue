<template>
    <div>
        <div class="todo-container">
            <div class="todo-wrap">
                <Header></Header>
                <List :todos='todos'></List>
                <Footer></Footer>
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
                {title:'学习java',finished:false},
                {title:'学习ps',finished:false},
                {title:'学习to',finished:false},                
            ]
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