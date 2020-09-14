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
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
