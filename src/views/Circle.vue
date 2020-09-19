<template>
    <div>
        生命周期
    </div>
</template>

<script>
export default {
    name:'LifeCircle',
    beforeCreate(){
        console.log('1:beforeCreate()')
    },
    data(){
        return {}
    },
    methods:{

    },
    created(){
        console.log('2:created()')
    },
    beforeMount(){
        console.log('3:beforeMount()')
    },
    mounted(){
        console.log('4:mounted()')
    },
    beforeUpdate(){
        console.log('5:beforeUpdate()')
    },
    updated(){
        console.log('6:updated()')
    },
    beforeDestroy(){
         console.log('7:beforeDestroy()')
    },
    destroyed(){
         console.log('8:destroyed()')
    }

}
</script>

<style>
</style>