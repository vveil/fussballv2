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
  }
]

const router = new VueRouter({
  routes
})

export default router
