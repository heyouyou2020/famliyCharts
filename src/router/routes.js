const newRoutes = [
    {
        path: '/home',
        name: 'home',
        title: '首页',
        key: 'home',
        component: () => import('@/views/page/home/home.vue')
    },{
        path: '/report',
        name: 'report',
        title: '报告管理',
        key: 'report',
        component: () => import('@/views/page/report/indexReport.vue'),
        redirect: 'dateReport',
        children: [
            {
                path: '/dateReport',
                name: 'dateReport',
                key: 'dateReport',
                title: '日报管理',
                component: () => import('@/views/page/report/dateReport.vue')
            },
            {
                path: '/weekReport',
                name: 'weekReport',
                key: 'weekReport',
                title: '周报管理',
                component: () => import('@/views/page/report/weekReport.vue')
            },
            {
                path: '/monthReport',
                name: 'monthReport',
                key: 'monthReport',
                title: '月报管理',
                component: () => import('@/views/page/report/monthReport.vue')
            },
            {
                path: '/jiReport',
                name: 'jiReport',
                key: 'jiReport',
                title: '季报管理',
                component: () => import('@/views/page/report/jiReport.vue')
            },
            {
                path: '/yearReport',
                name: 'yearReport',
                key: 'yearReport',
                title: '年报管理',
                component: () => import('@/views/page/report/yearReport.vue')
            }
        ],
    }
]
export default newRoutes