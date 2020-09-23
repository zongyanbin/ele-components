const LK_TODO ='lk_todo'
export default{
    readTodos(){ //读
        return JSON.parse(localStorage.getItem(LK_TODO) || '[]');
    },
    saveTodos(todos){ //写
        console.log(todos);
        localStorage.setItem(LK_TODO,JSON.stringify(todos));
    }
}