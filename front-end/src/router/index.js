import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/formular',
    name: 'Formular',
    component: () => import(/* webpackChunkName: "formular" */ '../views/formular.vue')
  },
  {
    path: '/impressum',
    name: 'Impressum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Vereinslogin',
    component: () => import(/* webpackChunkName: "adminlogin" */ '../views/adminlogin.vue')
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
