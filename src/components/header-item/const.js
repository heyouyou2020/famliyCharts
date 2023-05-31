/*
 * @Author: v_hezhlun v_hezhlun@digitalgd.com.cn
 * @Date: 2023-05-30 20:13:03
 * @LastEditors: v_hezhlun v_hezhlun@digitalgd.com.cn
 * @LastEditTime: 2023-05-31 11:47:33
 * @FilePath: \demo\src\components\header-item\const.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const routerList = [
    {
        key: 'home',
        title: '首页',
        disabled: false,
    },
    {
        key: 'report',
        title: '报告管理',
        disabled: false,
        children: [
            {
                key: 'dateReport',
                title: '每日报告',
            },
            {
                key: 'weekReport',
                title: '每周报告',
            },
            {
                key: 'monthReport',
                title: '月度报告',
            },
            {
                key: 'jiReport',
                title: '季度报告',
            },
            {
                key: 'yearReport',
                title: '年度报告',
            },
        ],
    }, {
        key: 'process',
        title: '进度管理',
        disabled: false,
        children: [
            {
                key: 'dateProcess',
                title: '今日进度',
            },
            {
                key: 'weekProcess',
                title: '每周进度',
            },
            {
                key: 'monthProcess',
                title: '月度进度',
            },
            {
                key: 'jiProcess',
                title: '季度进度',
            },
            {
                key: 'yearProcess',
                title: '年度进度',
            },
        ],
    },{
        key: 'account',
        title: '账号管理',
        disabled: false,
    },
]
export default routerList

