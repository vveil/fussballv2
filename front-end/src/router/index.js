import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/formular',
    name: 'Formular',
    component: () => import('../views/Formular.vue')
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: () => import('../components/datenschutz.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/formular',
    name: 'Formular',
    component: () => import('../views/Formular.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/adminview',
    name: 'Admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]


const router = new VueRouter({
  routes
})

export default router
