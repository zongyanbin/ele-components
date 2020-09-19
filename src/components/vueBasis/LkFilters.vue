<!--全局过滤器-->   
<template>
    <div>
        <p>------------------------局部滤器-----------------------------</p>
        <h3>格式化人民币</h3>
        <p>{{money|moneyFormat}}</p>
        <p>{{page|moneyFormat}}</p>
        <p>------------------------全局过滤器-----------------------------</p>
        <p>{{money|wholeMoneyFormat}}</p>
        <p>{{page|wholeMoneyFormat}}</p>

        <h3>格式化日期</h3>
        <p>{{time | timeFormt}}</p>
           <h3>年月日</h3>
        <p>{{time | timeFormt('YYYY-MM-DD')}}</p>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name:'LkFilters',
    data(){
        return{
            money:22345,
            page:189.43456,
            time: new Date()
        }
    },
    mounted(){ //当一个组件渲染完成时就来到这里
        setInterval(()=>{
            this.time=new Date()
        },1000)
    },
    //局部过滤器
    filters:{
        moneyFormat(value){
            return '￥'+ Number(value).toFixed(2); //过滤器
        },
        timeFormt(value,format = 'YYYY-MM-DD HH:mm:s'){
            return moment(value).format(format)
        }
    }
}
</script>