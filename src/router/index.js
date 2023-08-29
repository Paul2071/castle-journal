import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreateCastle from '../components/CreateCastle.vue'
import CastleDetails from '../components/CastleDetails.vue'

//route guards to make sure user is logged import 

import { projectAuth } from '@/firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
      next({ name: 'login'})
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/castle/create',
    name: 'createcastle',
    component: CreateCastle,
    beforeEnter: requireAuth
  },
  {
    path: '/castle/:id',
    name: 'castledetails',
    component: CastleDetails,
    beforeEnter: requireAuth,
    props: true
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
