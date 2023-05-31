<!--
 * @Author: v_hezhlun v_hezhlun@digitalgd.com.cn
 * @Date: 2023-05-30 19:12:58
 * @LastEditors: v_hezhlun v_hezhlun@digitalgd.com.cn
 * @LastEditTime: 2023-05-31 15:36:57
 * @FilePath: \demo\src\components\header.vue
 * @Description: 头部路由模块
-->
<template>
  <div class="header">
    <div class="heat-left"></div>
    <div class="heat-center">
      <ul class="heat-center-ul">
        <li v-for="item, index in routerList" class="heat-center-ul-li" :class="item.key === activeKey ? 'active' : ''" :key="index" @click="changeKey(item)">
          <div class="heat-center-ul-li-div">{{ item.title }}</div>
        </li>
      </ul>
      <ul v-if="routerListChild" class="heat-center-child">
        <li v-for="item in routerListChild" :key="item.key" :class="item.key === activeChildKey ? 'activeChildKey' : ''" @click="changeitemKey(item)">{{ item.title }}</li>
      </ul>
    </div>
    <div class="heat-right"></div>
  </div>
</template>
<script>
// import routerList from './const'
import routerList from '@/router/routes.js'
export default {
  name: 'header-item',
  data() {
    return {
      routerList,
      activeKey: 'home',
      activeChildKey: '',
    }
  },
  computed: {
    routerListChild() {
      return routerList.filter(item => item.key === this.activeKey)[0].children;
    },
  },
  watch: {
    activeKey(value) {
      this.getActiveChildKey(value)
    },
  },
  methods: {
    // 更新activeChildKey值
    getActiveChildKey(value) {
      this.activeChildKey = routerList.filter(item => item.key === value)[0].children[0].key || '';
    },
    changeKey(item) {
      this.activeKey = item.key;
      this.getActiveChildKey(this.activeKey)
      this.$router.push({
        name: item.key,
      })
    },
    changeitemKey(item) {
      this.activeChildKey = item.key;
      this.$router.push({
        name: item.key,
      })
    },
  },
}
</script>
<style lang="scss">
.header{
  // background: linear-gradient(91.71deg, #00AAEB 0%, #00C2CE 51.04%, #12C299 100%);
  display: flex;
  .heat-left{
    width: 200px;
    height: 80px;
    background:#00AAEB;
  }
  .heat-right{
    width: 200px;
    height: 80px;
    background: #12C299;
  }
  .heat-center{
    flex: 1;
  }
  .heat-center-ul{
    list-style: none;
    display: flex;
    justify-content: center;
    color: #ffffff;
    background: linear-gradient(91.71deg, #00AAEB 0%, #00C2CE 51.04%, #12C299 100%);
    .heat-center-ul-li{
      width: 120px;
      .heat-center-ul-li-div{
        width: 120px;
        text-align: center;
        line-height: 80px;
        font-size: 20px;
        font-weight: 400;
        height: 80px;
        cursor: pointer;
        &:hover{
          background: #ffffff;
          color: #8bb0da;
        }
      }
    }
    .active{
      background: #ffffff;
      color: #8bb0da;
    }
  }
  .heat-center-child{
      display: flex;
      background: #ffffff;
      height: 60px;
      justify-content: center;
      li{
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        color: #8bb0da;
        list-style: none;
        flex-direction: row;
        padding: 0px 20px;
        cursor: pointer;
        box-sizing: border-box;
      }
      .activeChildKey{
        border-bottom: 2px solid #8bb0da;
      }
  }
}
</style>