<template>
    <div>
        <h3>搜索列表</h3>
        <input type="text" placeholder="请输入要搜索的内容" v-model="searchName">
        <ul>
            <li v-for="(p,index) in filterPersons" :key="personsKeys[index]">
                {{index+1}}姓名： {{p.name}} --性别：{{p.sex}}--年龄： {{p.age}} 
            </li>
        </ul> 
        <p>------------------------------------------------------------------------------</p>
        <div>
        <h3>排序</h3>
        <button v-on:click="orderByAge(0)">默认</button>
        <button v-on:click="orderByAge(2)">年龄↑</button>
        <button v-on:click="orderByAge(1)">年龄↓</button>
        </div>   
    </div>
</template>
<script>
import shortId from "shortid"
export default {
    name:'ListRenderTwo',
    data(){
        return{
            searchName:'',
            persons:[   
                { name: "张三", age: 18, sex: "男" },
                { name: "李四", age: 28, sex: "女" },
                { name: "王五", age: 13, sex: "女" },
                { name: "张柳", age: 12, sex: "男" },
                { name: "张5", age: 33, sex: "女" },
                { name: "张6", age: 98, sex: "男" },
                { name: "张7", age: 23, sex: "女" },
                { name: "张8", age: 45, sex: "男" },
                { name: "张9", age: 10, sex: "女" },
            ],
            personsKeys:[

            ],
            orderType:0 //排序
        }
    },
    mounted(){
        this.personsKeys = this.persons.map(value=>{
                  console.log(value)
            return shortId.generate()
        })  
    },
    computed:{ //计算属性
        filterPersons(){   //调用属性get方法
            //1.获取数据
            let {searchName,persons,orderType} = this //Es6语法 相当于 this.searchName this.persons
            //2.取出数组中的数据
            let arr = [...persons]; //延展操作符号展开...
            //3.过滤数组
            if(searchName.trim()){
                arr = persons.filter(p=>p.name.indexOf(searchName) !==-1)
            }

            //4.排序
            if(orderType){
                console.log(orderType)
                arr.sort((p1,p2)=>{
                    if(this.orderType ===1){ //降序
                         return p2.age-p1.age
                    }else{//升序
                       return p1.age-p2.age 
                    }

                })
            }

            return arr
        }
    },
    methods:{
        orderByAge(orderType){
            this.orderType = orderType
        }
    }
}
</script>