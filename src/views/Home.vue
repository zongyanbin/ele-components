<template>
  <div class="home">
      <el-button type="primary"
      v-on:click="goTo('/backTopOne')">去网页1</el-button>

      <el-button type="primary"
      v-on:click="goTo('/backTopTwo')">去网页2</el-button>

      <el-button type="primary"
      v-on:click="goTo('/login')">去往登录页面</el-button>
  </div>
  
</template>
<script>
export default {
  name:'home',
  data(){
    return{}
  },
  methods:{
    goTo(path){
      this.$router.push(path) //跳转
    },
    logPerson(name,age){
      alert(`姓名： ${name},年龄:${age}`)
    },
    deleteP(args){
      console.log(args)
      this.$refs.word.remove()
    }
  }

}
</script>


<style>
.word{
   margin: auto;
  width: 300px;
  height: 200px;
  background-color: red;
  color: #fff;
  display: flex;
  justify-items: center;
  align-items: center;
}
</style>