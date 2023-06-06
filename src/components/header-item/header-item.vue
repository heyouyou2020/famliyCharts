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
    <div class="heat-left">
      没没家庭一站式管理系统
    </div>
    <div class="heat-center">
      <ul class="heat-center-ul">
        <li v-for="item, index in routerList" class="heat-center-ul-li" :class="item.meta.key === activeKey ? 'active' : ''" :key="index" @click="changeKey(item)">
          <div class="heat-center-ul-li-div">{{ item.meta.title }}</div>
        </li>
      </ul>
    </div>
    <div class="heat-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar size="medium" :src="circleUrl"></el-avatar>
          <span class="el-dropdown-link-account">{{ $store.state.userInfo.userName }}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span>用户名</span>
              <span>{{ $store.state.userInfo.userName }}</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span>角色</span>
              <span>{{ $store.state.userInfo.lever }}</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span>手机</span>
              <span>{{ $store.state.userInfo.phone }}</span>
            </el-dropdown-item>
            <el-dropdown-item class="drop-title">
              <span>锁定账户</span>
              <span @click="loginOut">注销</span>
            </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import routerList from '@/router/routes.js'
export default {
  name: 'header-item',
  data() {
    return {
      routerList,
      circleUrl: require('../../assets/image/vatou.jpg'),
    }
  },
  computed: {
    activeKey() {
      return this.$route.meta.key
    },
  },
  watch: {},
  methods: {
    // 更新activeChildKey值
    changeKey(item) {
      this.$router.push({
        name: item.meta.key,
      })
    },
    loginOut() {
      this.$store.commit('loginOut');
      this.$router.replace('/login');
    },
  },
}
</script>
<style lang="scss">
.header{
  // background: linear-gradient(91.71deg, #00AAEB 0%, #00C2CE 51.04%, #12C299 100%);
  display: flex;
  .heat-left{
    height: 5rem;
    background:#00AAEB;
    line-height: 5rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: #ffffff;
    padding-left: 1rem;
  }
  .heat-right{
    height: 5rem;
    background: #12C299;
    display: flex;
    align-items: center;
    padding-right: 2rem;
    .el-dropdown-link {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #ffffff;
      font-size: 1rem;
      font-weight: 500;
      &-account{
        margin-left: 4px;
      }
    }
    .el-icon-arrow-down {
      font-size: 0.75rem;
    }
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
      .heat-center-ul-li-div{
        text-align: center;
        line-height: 5rem;
        font-size: 1.25rem;
        font-weight: 400;
        height: 5rem;
        width: 8rem;
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
}
</style>