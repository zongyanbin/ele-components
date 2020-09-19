<template>
    <div class="pages-content-scroll">
        <el-backtop target=".pages-content-scroll">

        </el-backtop>
        <slot></slot> <!--插槽在使用中把内容给添加上去-->
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.pages-content-scroll{
    /**必须撑满整个屏幕 */
    position:absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
}

</style>