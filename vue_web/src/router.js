import Vue from 'vue'
import Router from 'vue-router'
// 为Exam01.vue组件指定访问路径
// 1.引入组件
// import index from "./components/stamp_station/index.vue" // 首页
import Header from "./components/momoda/Header.vue" // 首页


Vue.use(Router)

// 2.为组件执行访问路径 /Exam01 
export default new Router({
  routes: [
    {path:'/Header',component:Header} // 首页
  ]
})
// 