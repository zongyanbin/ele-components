<template>
    <div id="app">
        <H3>动画</H3>
        <button @click="flag=!flag">切换</button>
    <transition name="bounce">
           <img :src="pic" alt="" width="200px;" v-if="flag">
    </transition>      
    </div>
</template>
<script>
import pic from '@/assets/1.jpg'
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
#app{
   width:500px;
   height: 500px;
    margin: auto;
}
.bounce-enter-active{
    animation:bounce.5s;
}
.bounce-leave-active{

}
@keyframes bounce {
    0% {
        transform:scale(0);
    }
      10% {
        transform:scale(0.2);
    }
     20% {
        transform:scale(0.4);
    }
     30% {
        transform:scale(0.6);
    }
     50% {
         transform:scale(2.5);
    }
     100% {
        transform:scale(1);
    }
}
</style>