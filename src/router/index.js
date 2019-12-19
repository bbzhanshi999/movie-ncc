import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'movieList',
        component: () => import('../views/MovieList.vue')
    }, {
        path: '/top',
        name: 'top',
        component: () => import('../views/Top.vue')
    }, {
        path: '/movie',
        name:'movie',
        component: ()=>import('../views/detail.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
