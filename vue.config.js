/*
 * @Author: v_hezhlun v_hezhlun@digitalgd.com.cn
 * @Date: 2023-05-30 09:12:41
 * @LastEditors: v_hezhlun v_hezhlun@digitalgd.com.cn
 * @LastEditTime: 2023-05-30 09:18:37
 * @FilePath: \demo\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 部署应用包时的基础URL
  publicPath: process.env.VUE_APP_PATHNAME,
  // 本地代理
  devServer: {
    port: 8999,
  },
})
