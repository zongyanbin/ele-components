//注册全局组件
import Vue from 'vue'
import BackTop from "../components/backTop/BackTop"
Vue.component('backTop',BackTop)

import AccountLogin from "../components/accountLogin/AccountLogin"
Vue.component('accountLogin',AccountLogin)

import PhoneLogin from "../components/phoneLogin/PhoneLogin"
Vue.component('phoneLogin',PhoneLogin)
//vue基础
import ComputedAndWatch from "../components/vueBasis/ComputedAndWatch"
Vue.component('computedAndWatch',ComputedAndWatch)