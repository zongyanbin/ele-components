<template>
<div>
    <button @click="btnClick">删除父组件p标签</button>
</div>
</template>
<script>
export default {
    name:'nameCustomEvents',
    methods:{
        btnClick(){
            //告诉父组件，我点击了按钮
            let strs = {
                name:'哈哈哈',
                sex:'男'
            }
            this.$emit('btnClick',strs)
        }
       
    }


}
</script>