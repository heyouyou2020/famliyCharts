/*
 * @Author: v_hezhlun v_hezhlun@digitalgd.com.cn
 * @Date: 2023-05-30 09:12:41
 * @LastEditors: v_hezhlun v_hezhlun@digitalgd.com.cn
 * @LastEditTime: 2023-05-30 19:27:32
 * @FilePath: \demo\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import  component  from '@/common/utils/compoment.js';
import dataV from '@jiaminghi/data-view';
import * as echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css';
import '@/common/index.scss';
import '@/common/utils/rem'
component();
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(dataV)
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
