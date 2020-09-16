<template>
<div id="app">
    <button  data-get="数据按钮" dt="dtdt"  @click="clickBtn('廖科',$event)">点我</button>
    <h3>事件修饰符</h3>
    <a href="http://www.itlike.com" @click.prevent="aClick">撩课</a> 
    <div style="width:100px; height:100px; background-color:red; margin: auto;" @click="divClick">
            <button  data-get="数据按钮" dt="dtdt"  @click.stop="btnClick('廖科',$event)">点我</button>
    </div>

        <h3>按钮修饰符</h3>
        <input type="text" @keyup.enter="dealKey">
</div>
</template>
<script>
export default {
    name:'EealEvents',
    components:{

    },
    methods:{
        clickBtn(args,event){
            console.log(args)
              console.log(event)

            //其中srcElement就是当前这个标签元素，
            // 可以根据此属性来获取当前点击事件的标签元素。
            // 比如我们可以对获取的元素进行操作，就像原生js那样
              event.srcElement.style.background="red"; //修改按钮背景颜色

              event.innerHTML ='修改文字点我'
              event.textContent ='修改文字点我'
              event.target.innerHTML = '123'  //修改按钮
              let res =  event.target.getAttribute('dt') //获取自定义属性值
              console.log(res)
              
        },
        aClick(){
            //@click.prevent="aClick" 禁止跳转 href  阻止默认事件 
            alert(1)
        },
        btnClick(){
            // @click.stop="btnClick   防止冒泡 .stop
            alert('点击里面的按钮')
        },
        divClick(){
            alert('点击了父标签')
        },
        dealKey(event){
            console.log(event['keyCode'])
        }
        
    },
}
</script>