<template>
  <div id="app">
      <!--第一部分-->
      <fieldset>
          <legend>指令综合小练习</legend>
          <div class="wd">
              <span>姓名:</span>
              <input type="text" placeholder="请输入姓名" v-model="newPerson.name">
          </div>
            <div class="wd">
              <span>年龄:</span>
              <input type="text" placeholder="请输入年龄" v-model="newPerson.age">
          </div> 
          <div class="wd">
              <span>性别:</span>
               <select v-model="newPerson.sex">
                   <option value="男">男</option>
                   <option value="女">女</option>
               </select>        
          </div>  
          <div class="wd">
              <span>手机:</span>
              <input type="text" placeholder="请输入手机" v-model="newPerson.phone">
          </div>
          <button @click="createNewPerson()">创建新用户</button>    
      </fieldset>
      <!--第二部分-->
      <table>
        <thead>
            <tr>
                    <td>姓名</td>
                    <td>性别</td>
                    <td>年龄</td>
                    <td>手机</td>
                    <td>删除</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(p,index) in persons" :key="index">
                    <td v-text="p.name"></td>
                    <td v-text="p.sex"></td>
                    <td v-text="p.age"></td>
                    <td v-text="p.phone"></td>
                    <td>
                        <button @click="delPerson(index)">删除</button>
                    </td>
            </tr>
        </tbody>        
      </table>       
  </div>
</template>

<script>
export default {  
  name:'Demo',
  data(){
      return{
          persons:[
              {name:'张三',age:13,sex:'男',phone:'13800138000'},
              {name:'小美',age:15,sex:'女',phone:'13800138000'},
              {name:'三啊',age:18,sex:'男',phone:'13800138000'},
              {name:'四妹',age:19,sex:'女',phone:'13800138000'},
              {name:'张三',age:23,sex:'男',phone:'13800138000'},
              {name:'礼拜天',age:33,sex:'女',phone:'13800138000'},
              {name:'星期一',age:43,sex:'男',phone:'13800138000'},
              {name:'周一',age:53,sex:'女',phone:'13800138000'},
              {name:'周五',age:43,sex:'男',phone:'13800138000'},
              {name:'小三',age:53,sex:'男',phone:'13800138000'},
              {name:'李三',age:31,sex:'女',phone:'13800138000'},
              {name:'张三',age:35,sex:'男',phone:'13800138000'},
              {name:'赵三',age:36,sex:'女',phone:'13800138000'},
              {name:'王三',age:43,sex:'男',phone:'13800138000'},
              {name:'周三',age:35,sex:'男',phone:'13800138000'},
              {name:'徐三',age:42,sex:'女',phone:'13800138000'},
              {name:'马三',age:27,sex:'男',phone:'13800138000'},
              {name:'羊三',age:37,sex:'女',phone:'13800138000'},
              {name:'猪三',age:93,sex:'男',phone:'13800138000'},
          ],
          newPerson: {name:'',age:0,sex:'男',phone:''},
      }
  },
  components: {
  
  },
  methods:{
      //一.添加
      createNewPerson(){
          //1.验证
          let {name,age,sex,phone} =this.newPerson
          console.log(name,age,sex,phone)
          if(name==''){
              alert('姓名不能为空')
              return false
          }
          if(age<0){
              alert('年龄不正确')
              return false
          }
          if(phone==''){
              alert('手机号码不正确')
              return false
          }
        //2.插入数组
        this.persons.unshift(this.newPerson);

        //3.清空数据
        this.newPerson={name:'',age:0,sex:'男',phone:''}
      },

      //二.删除
    delPerson(index){
        this.persons.splice(index,1);
    }
  }
}
</script>
<style scoped>
#app{margin: 50px auto; width: 600px; }
fieldset{border:1px solid orangered; margin-bottom:20px; }
fieldset input{width: 200px; height: 30px; margin: 10px 0; }
table{width: 600px; border: 2px solid orangered; text-align: center;}
thead{background-color: orangered;}
</style>