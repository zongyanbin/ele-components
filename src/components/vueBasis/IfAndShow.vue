<template>
    <div id="app">
        <div v-if="flag">今晚要上课！</div>
        <div v-else>今晚不上课！</div>
        <p></p>
        <button v-on:click="flag=!flag">切换</button>
        <p>----------------</p>
        <div v-show="flag">今晚讲v-show</div>
        <div v-show="!flag">今晚不讲v-show</div>
        <p></p>
        <button v-on:click="flag=!flag">切换</button>
    </div>
</template>

<script>
export default {
    name:'IfAndShow',
    componenets:{
    },
    data(){
        return{
            flag:true,//上课 不上课
        }
    }

}
</script>