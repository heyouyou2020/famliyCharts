const newRoutes = [
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '首页',
            key: 'home',
        },
        component: () => import('@/views/page/home/home.vue')
    },
    {
        path: '/dateReport',
        name: 'dateReport',
        meta: {
            title: '报告管理',
            key: 'dateReport',
        },
        component: () => import('@/views/page/report/dateReport.vue')
    },
    {
        path: '/syetermSeting',
        name: 'syetermSeting',
        meta: {
            title: '情绪管理',
            key: 'syetermSeting',
        },
        component: () => import('@/views/page/report/syetermSeting.vue')
    },
    {
        path: '/weekReport',
        name: 'weekReport',
        meta: {
            key: 'weekReport',
            title: '工资管理',
        },
        component: () => import('@/views/page/report/weekReport.vue')
    },
    {
        path: '/monthReport',
        name: 'monthReport',
        meta: {
            key: 'monthReport',
            title: '宠物管理',
        },
        component: () => import('@/views/page/report/monthReport.vue')
    },
    {
        path: '/jiReport',
        name: 'jiReport',
        meta: {
            key: 'jiReport',
            title: '存货管理',
        },
        component: () => import('@/views/page/report/jiReport.vue')
    },
    {
        path: '/yearReport',
        name: 'yearReport',
        meta: {
            key: 'yearReport',
            title: '账户管理',
        },
        component: () => import('@/views/page/report/yearReport.vue')
    }
]
export default newRoutes