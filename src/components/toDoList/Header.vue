<template>
    <div>
        <div class="todo-header">
            <input type="text" placeholder="请输入今天得任务清单，按回车确认">
        </div>
    </div>      
</template>
<script>
export default {
    name:''
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