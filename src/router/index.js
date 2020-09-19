import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BackTopOne.vue')
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
    path:'/login',
    name:'login',
    component:()=>import('../views/login')

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
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
