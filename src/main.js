import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'     //bring in
import 'element-ui/lib/theme-chalk/index.css' //bring in 
Vue.use(ElementUI) //bring in


import './globalComponents' //bring in

//main.js 全部配置
//阻止启动生产消息
Vue.config.productionTip = false

//$mount 手动挂载

/**
 * es5
 * render:function(createElement){
 *    return createElement(App)
 * } 
 * 
 *  es6
 *  render(createElement){
 *    return createElement(App)
 * }
 * 
 * 简化
 * render(h){
 *    return h(App)
 * }
 * 
 * 简化
 * reder:h=>h(App)
 * 
 * 
 * 
 * 
 * 
 */

 /**
  *注册全局过滤器 
  */
 Vue.filter('wholeMoneyFormat',(value)=>{
    return '￥'+ Number(value).toFixed(4); //过滤器
 })

 //npm i moment --save 格式化日期
 /**
  * 注册全局指令
  */
 Vue.directive('upper-word',(el,binding)=>{
   console.log(el,binding);
   el.textContent = binding.value.toUpperCase();
 })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

