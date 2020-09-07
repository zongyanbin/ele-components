import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'     //bring in
import 'element-ui/lib/theme-chalk/index.css' //bring in 
Vue.use(ElementUI) //bring in


import './globalComponents' //bring in
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
