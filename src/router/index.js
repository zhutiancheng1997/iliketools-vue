import {createRouter,createWebHistory} from "vue-router";


import http_proxy from '@/components/http_proxy.vue'
import Home from '@/components/Home.vue'


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/http_proxy',
            component:http_proxy,
        },
        {
            path:'/',
            component:Home,
        },
        {
            path:'/home',
            component:Home,
        }
    ]
})

export default router;