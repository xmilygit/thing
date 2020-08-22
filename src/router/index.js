import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import home from '../views/home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
    meta:{mainNav:false}
  },
  {
    path:'/home',
    name:'home',
    component:home,
    meta:{mainNav:true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if(to.name=="login"){
    if(localStorage.getItem('token')){
      next('home')
    }
  }
  next()
  
})

export default router
