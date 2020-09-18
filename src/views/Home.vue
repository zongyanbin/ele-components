<template>
  <div class="home">
      <el-button type="primary"
      v-on:click="goTo('/backTopOne')">去网页1</el-button>

      <el-button type="primary"
      v-on:click="goTo('/backTopTwo')">去网页2</el-button>

      <el-button type="primary"
      v-on:click="goTo('/login')">去往登录页面</el-button>
      
      <a v-bind:href="url">百度</a>
      <div class="bg" v-bind:id="bg1">bg</div>
      <classAndStyle></classAndStyle>
      <p>------------IfAndShow----------</p>
          <ifAndShow></ifAndShow>
      <p>------------P15 16-数据动态遍历和展示(掌握) ListRender----------</p>
      <ListRender></ListRender>
      <p>------------P17 18-列表搜索过滤-上(掌握) ListRenderTwo----------</p>
      <ListRenderTwo></ListRenderTwo>
       <p>------------P20 21-Vue中其它的指令-上(掌握) OtherInstruct----------</p>
      <OtherInstruct></OtherInstruct>

      <p>-----------技术总结合成demo person add delete-----------</p>
      <PersonAddDell></PersonAddDell>

      <p>-----------@click.prevent="aClick" 禁止跳转 href  阻止默认事件  @click.stop="btnClick   防止冒泡 .stop----------</p>
      <DealEvents></DealEvents>
      
      <p>-----------全局过滤器和局部过滤器----------</p>
      <LkFilters></LkFilters>
      <p>-----------过渡----------</p>
      <TransitionAndAnimate></TransitionAndAnimate>
       <p>-----------过渡与动画----------</p>
      <TransitionAndAnimateTwo></TransitionAndAnimateTwo>
          <p>-----------第三方动画 npm install animate.css --save----------</p>
      <TransitionAndAnimateThree></TransitionAndAnimateThree>
  </div>
  
</template>

<script>
import classAndStyle  from '../components/vueBasis/ClassAndStyle'
import ifAndShow  from '../components/vueBasis/IfAndShow'
import ListRender from '../components/vueBasis/ListRender'
import ListRenderTwo from '../components/vueBasis/ListRenderTwo'
import OtherInstruct from '../components/vueBasis/OtherInstruct' //指令
import PersonAddDell from '../components/vueBasis/PersonAddDell'//添加用户 删除用户
import DealEvents from '../components/vueBasis/DealEvents'//事件
import LkFilters from '../components/vueBasis/LkFilters'//过滤
import TransitionAndAnimate from '../components/vueBasis/TransitionAndAnimate'//过渡与动画
import TransitionAndAnimateTwo from '../components/vueBasis/TransitionAndAnimateTwo'//动画
import TransitionAndAnimateThree from '../components/vueBasis/TransitionAndAnimateThree'//第三方类库动画
export default {
  name: 'Home',
  components: {
    classAndStyle,
    ifAndShow,
    ListRender,
    ListRenderTwo,
    OtherInstruct,//指令
    PersonAddDell,//添加用户删除用户
    DealEvents,
    LkFilters,
    TransitionAndAnimate,//过渡
    TransitionAndAnimateTwo,
    TransitionAndAnimateThree// 第三方动画
  },
  data(){
    return {
      url:'http://www.baidu.com',
      bg1:'app-bind',
    }
  },
  methods:{
    goTo(path){
      this.$router.push(path) //跳转
    }
  }
}
</script>
