<template>
    <div>
        <div class="todo-header">
            <input type="text" placeholder="请输入今天得任务清单，按回车确认"
             v-model="title"
             @keyup.enter="addItem"
             >
        </div>
    </div>      
</template>
<script>
export default {
    name:'Header',
    props:{
       // addTodo:Function
    },
    data(){
        return {
            title:'',
        }
    },
    methods:{
        addItem(){
            //1.判断是否为空
            const title = this. title.trim()
            if(!title){
                alert('输出的任务不能为空！')
                return false
            }else{
            //2.生成一个todo对象
            let todo = {title,finished:false};
            //3.调用 父组件的插入方法
            //this.addTodo(todo)

            //自定义事件 让父组件进行监听
            this.$emit('addTodo',todo)  //子组件传递数据给父组件 自己来发布自定义事件
            //3.清空输入框
            this.title=''
            }
        }
    }
}
</script>
<style scoped>
.todo-header input{
    width: 560px;
    height: 28;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    outline: none;
}

.todo-header input:focus{
    outline: none;
    border-color: rgba(255, 0,0, 0.8);
    box-shadow: inset 0 1px 1px rgba(255,0,0, 0.075), 0 0  8px rgba(255, 0,0, 0.6);
}
</style>