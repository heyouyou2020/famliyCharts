/*
 * @Author: v_hezhlun v_hezhlun@digitalgd.com.cn
 * @Date: 2023-05-30 09:12:41
 * @LastEditors: v_hezhlun v_hezhlun@digitalgd.com.cn
 * @LastEditTime: 2023-05-31 15:35:41
 * @FilePath: \demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import newRoutes from './routes'
// 解决VueRouter3.0以上同页面跳转报错
// 获取原型对象push函数
const originalPush = VueRouter.prototype.push

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location){
return originalPush.call(this , location).catch(err=>err)
}

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location){
return originalReplace.call(this , location).catch(err=>err)
}


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'routerLayout',
    redirect: 'home',
    component: () => import('@/views/router-layout.vue'),
    children: newRoutes
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
