<template>
    <div id="app">
        <H3>过渡</H3>
        <button @click="show=!show">切换</button>
    <transition name="fade">
            <div class="box" v-if="show">新闻标题</div>
    </transition>   
    </div>
</template>
<script>
export default {
    name:'TransitionAndAnimate',
    data(){
        return {
            show:true
        }
    }
}
</script>
<style>
#app{
   width:500px;
        height: 500px;
    margin: auto;
}
    .box{
        width:200px;
        height: 200px;
        background-color:red;
        color: #fff;
        font-size: 20px;
        justify-content: center;
        align-items: center;
    }

    .fade-enter, .fade-leave-to{
    transform: translateX(200px) scale(3); /*进来时候过渡效果*/
    opacity:0;
    }

    .fade-enter-active, .fade-leave-active{
        transition:  all 2s ease-in-out; /*总体过渡控制*/
    }
</style>