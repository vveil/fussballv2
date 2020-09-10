import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: {
        isPublic: true
      }
    },
    {
      path: '/datenschutz',
      name: 'Datenschutz',
      component: () => import('../components/datenschutz.vue'),
      meta: {
        isPublic: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/AdminLogin.vue'),
      meta: {
        isPublic: true
      }
    },
    {
      path: '/formular',
      name: 'Formular',
      component: () => import('../views/Formular.vue'),
      meta: {
        isPublic: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
      meta: {
        isPublic: true
      }
    },
    {
      path: '/adminview',
      name: 'Admin',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
      meta: {
        isPublic: true
      }
    },
  ]
})

// router.beforeEach(vuexOidcCreateRouterMiddleware(store, 'oidcStore'))

export default router
