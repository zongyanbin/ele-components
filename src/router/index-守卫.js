import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


//一级页面
import Login from '../views/Login.vue'
import DashBoard from '../views/DashBoard.vue'  //主面板

//二级页面
import Mine from '../views/Mine.vue'
Vue.use(VueRouter)

  const routes = [
  {path:'/',redirect:'/dashboard'},

  //主面板内容需要登录
  { path:'/dashboard', 
    name:'dashboard',
    component:DashBoard,
    children:[
        {path:'/dashboard',redirect:'/dashboard/home'},
        {path:'home',name:'home',component:Home},
        {path:'about',name: 'About',component: () => import('../views/BackTopOne.vue')},
        {path:'mine',name:'mine',component:Mine}   
    ]
  },
  {path:'/login',name:'login',component:Login},






















  {
    path: '/demo',
    name: 'demo',
    component:()=>import('../views/Demo.vue')
  },

  {  //bring in 路由
    path:'/backTopOne',
    name:'backTopOne',
    component:()=>import('../views/BackTopOne.vue')

  },
  {
    path:'/backTopTwo',
    name:'backTopTwo',
    component:()=>import('../views/BackTopTwo.vue')
  },

  {
    path:'/Aloss',
    name:'aloss',
    component:()=>import('../views/AlOss.vue')
  },
  {
    path:'/download',
    name:'Download',
    component:()=>import('../views/Download.vue')
  },
  {
    path:'/vs',
    name:'vs',
    component:()=>import('../views/Vs.vue')
  },
  {
    path:'/circle',
    name:'circle',
    component:()=>import('../views/Circle.vue')
  },
  {
    path:'/todolist',
    name:'todolist',
    component:()=>import('../views/ToDoList.vue')
  },
  {
    path:'/customeventstodolist',
    name:'customeventstodolist',
    component:()=>import('../views/CustomEventsToDoList.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局路由前置守卫
router.beforeEach((to,from,next)=>{
  console.log(to,from,next)
 if(to.path !=='/login'){ //验证是否登录
    if(window.isLogin){//已经登录
        next()
    }else{
      next('/login?redirect='+to.path)
      //next('/login?redirect=/dashboard/mine')
      //next('/login')
    }
 }else{ //不需要验证
  next()
 }
  //放行
  next()
})

//全部路由后置守卫
router.afterEach((to,from)=>{
  console.log(to,from)
  console.log('来了')
})
export default router
