<template>
    <div>
    <H3>主面板</H3>
    <!--设置路由导航-->
    <div id="nav">
        <router-link to="home">首页</router-link>|
        <router-link to="about">关于</router-link>|
        <router-link to="mine">我的</router-link>
    </div>
    <!--设置路由出口-->
    <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'DashBoard'
}
</script>>
