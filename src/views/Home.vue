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
      
  </div>
  
</template>

<script>
import classAndStyle  from '../components/vueBasis/ClassAndStyle'
import ifAndShow  from '../components/vueBasis/IfAndShow'
import ListRender from '../components/vueBasis/ListRender'
import ListRenderTwo from '../components/vueBasis/ListRenderTwo'
export default {
  name: 'Home',
  components: {
    classAndStyle,
    ifAndShow,
    ListRender,
    ListRenderTwo
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
