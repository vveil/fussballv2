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
    path: '/attendeeData',
    name: 'Teilnehmer',
    component: () => import('../components/attendeeData.vue')
  },
  {
    path: '/vereinsadmin',
    name: 'Vereinsadmin',
    component: () => import('../views/Vereinsadmin.vue'),
  }
]


const router = new VueRouter({
  routes
})

export default router
