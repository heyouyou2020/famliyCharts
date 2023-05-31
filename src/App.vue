<!--
 * @Author: v_hezhlun v_hezhlun@digitalgd.com.cn
 * @Date: 2023-05-30 09:12:41
 * @LastEditors: v_hezhlun v_hezhlun@digitalgd.com.cn
 * @LastEditTime: 2023-05-30 19:49:01
 * @FilePath: \demo\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: process.env.VUE_APP_PATHNAME,
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
