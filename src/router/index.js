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
import store from '@/store'
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
    path: '/login',
    name: 'login',
    meta: {
        title: '登录页',
        key: 'login',
    },
    component: () => import('@/views/page/login/index.vue')
  },
  {
    path: '/',
    name: 'routerLayout',
    redirect: 'home',
    component: () => import('@/views/router-layout.vue'),
    children: newRoutes
  }
]
// 设置免登录白名单
const wihteLIst = ['/login']
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const token = store.state.token;
  const cook = localStorage.getItem('token')
  if (token) {
    next();
  } else {
    if (wihteLIst.includes(to.path)) {
      next();
    } else {
      if (cook) {
        store.commit('setToken', {token: '19950313'});
        store.commit('setInfo', {
          userName: '小没没',
          lever: '管理员',
          phone: '18351887995',
        });
        next({path: to.fullPath});
      } else {
        if (to.query.token === '19950313') {
          store.commit('setToken', {token: '19950313'});
          store.commit('setInfo', {
            userName: '小没没',
            lever: '管理员',
            phone: '18351887995',
          });
          next({path: to.fullPath});
        } else {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            },
          })
        }
      }
    }
  }
}) 
  




export default router
