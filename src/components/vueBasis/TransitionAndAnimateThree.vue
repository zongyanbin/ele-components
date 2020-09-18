<template>
    <div id="app">
        <H3>动画</H3>
        <button @click="flag=!flag">切换</button>
    <transition
    
        enter-active-class="animated rollIn"
        leave-active-class="animated bounceOutRight"
    >
           <img :src="pic" alt="" width="200px;" v-if="flag">
    </transition>      
    </div>
</template>
<script>
import pic from '@/assets/1.jpg'
import animate from 'animate.css'
console.log(animate)
export default {
    name:'TransitionAndAnimate',
    data(){
        return {
            pic:pic,
            flag:false
        }
    }
}
</script>

<style>
/*第三方动画 npm install animate.css --save*/
#app{
   width:500px;
   height: 500px;
    margin: auto;
}
</style>