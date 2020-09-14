<template>
  <div>
    <h3>P16 17-Key的唯一性处理(掌握) 遍历数组</h3>
    <ul>
        <li v-for="(person,index) in persons" :key="personKeys[index]">
           ID:{{personKeys[index]}} ---{{index}}姓名：{{person.name}},年龄{{person.agx}},,年龄{{person.sex}}
        </li>
    </ul>
    <p>-------------------------------------------------</p>  
     <h3>P16 17-Key的唯一性处理(掌握) 遍历对象用key</h3>
    <ul>
        <li v-for="(item,key) in persons[0]" :key="key">
           {{key}}--{{item}}
        </li>
    </ul>  
  </div>
</template>
<script>
import shortId from "shortid"
export default {
  name: "ListRender",
  data() {
    return {
      persons: [
        { name: "张三", age: 18, sex: "男" },
        { name: "李四", age: 18, sex: "女" },
        { name: "王五", age: 18, sex: "女" },
        { name: "张柳", age: 18, sex: "男" },
        { name: "张5", age: 18, sex: "女" },
        { name: "张6", age: 18, sex: "男" },
        { name: "张7", age: 18, sex: "女" },
        { name: "张8", age: 18, sex: "男" },
        { name: "张9", age: 18, sex: "女" },
      ],
      personKeys:[]
    };
  },
  mehtods: {},
  mounted(){
      this.personKeys = this.persons.map(value =>{
          console.log(value)
          return shortId.generate()
      })
  }
};
</script>