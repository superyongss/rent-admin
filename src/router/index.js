import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

const homePage = () => import("@/components/homePage")
const tenantPage = () => import("@/components/rentAdmin/tenant/tenantPage")

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: homePage,
    },
    {
        path: '/rent/tenant',
        component: tenantPage
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
