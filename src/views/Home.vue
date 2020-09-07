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
  name: 'Home',
  components: {
    
  },
  methods:{
    goTo(path){
      this.$router.push(path) //跳转
    }
  }
}
</script>
