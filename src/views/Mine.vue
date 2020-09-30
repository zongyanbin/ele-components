<template>
    <div>
    Mine
    </div>
</template>
<script>
export default {
    name:'Mine',
    beoforeRouteEnter(to,from,next){
        console.log(to,from,next)
        console.log('进入之前调用')
    },
    beforeUpdate(to,from,next){
        console.log(to,from,next)
        console.log('进入之前调用')
    }
}
</script>
