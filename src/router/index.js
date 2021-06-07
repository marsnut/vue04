import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import English from '@/pages/english.vue'
import Finance from '@/pages/finance.vue'
import Social from '@/pages/social.vue'
import Login from '@/components/Login.vue'
import Secure from '@/components/Secure.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            alias: '/home', 
            component: Home,
            meta: { title: 'technology' }
        },
        {
            path: '/english',
            name: 'english',
            component: English,
            meta: { title: 'english' }
        },
        {
            path: '/socail',
            name: 'socail',
            component: Social,
            meta: { title: 'social' }
        },
        {
            path: '/finance',
            name: 'finanace',
            component: Finance,
            meta: { title: 'Finance' }
        },
        {
            path: '/mine',
            name: 'mine',
            component: (resolve) => require(['@/pages/mine'], resolve),
            meta: { title: 'mine' }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/secure',
            name: 'secure',
            component: Secure,
            meta: {
              title: 'secure',
              requiresAuth: true
            }
        },
    ]
});
