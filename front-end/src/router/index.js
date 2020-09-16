import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import OidcCallback from '@/views/OidcCallback.vue'
import OidcCallbackError from '@/views/OidcCallbackError.vue'
import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'

Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
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
      path: '/formular/:clubid',
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
    {
      path: '/auth/callback', // Needs to match redirectUri in you oidcSettings
      name: 'oidcCallback',
      component: OidcCallback,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/auth/callback-error', // Needs to match redirect_uri in you oidcSettings
      name: 'oidcCallbackError',
      component: OidcCallbackError,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/*',
      name: '404',
      component: () => import('../views/404.vue'),
      meta: {
        isPublic: true
      }
    }
  ]
})

router.beforeEach(vuexOidcCreateRouterMiddleware(store, 'oidcStore'))

export default router
