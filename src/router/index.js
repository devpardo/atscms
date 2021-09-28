import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import store from '../store'
import Management from '../views/Management'
import Logout from '../components/Logout'
import News from '../views/News'
import Announcements from '../views/Announcements'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta : {
      requiresVisitor : true
    }
  },
  {
    path: '/management',
    name: 'Management',
    component: Management,
    meta : {
      requiresAuth : true
    }
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta : {
      requiresAuth : true
    }
  },
  {
    path: '/announcements',
    name: 'Announcements',
    component: Announcements,
    meta : {
      requiresAuth : true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta : {
      requiresAuth : true
    }
  },
  {
    path : '/logout',
    name : 'Logout',
    component : Logout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        path: '/management'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
