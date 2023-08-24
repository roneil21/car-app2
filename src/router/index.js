import Vue from 'vue'
import VueRouter from 'vue-router'
import Manufacturer from '@/components/Manufacturer.vue'
import CarColor from '@/components/CarColor.vue'
import CarPage from '@/components/CarPage.vue'
import NavBar from '@/components/NavBar.vue'
import Login from '@/components/Login.vue'

Vue.use(VueRouter)
history: createWebHistory(import.meta.env.BASE_URL);
const routes = [
 
  {
    path: "/",
    redirect: {
      name: "login",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: NavBar
  },
  {
    path: '/manufacturer',
    name: 'manufacturer',
    component: Manufacturer
  },
  {
    path: '/color',
    name: 'color',
    component: CarColor
  },
  {
    path: '/carpage',
    name: 'carpage',
    component: CarPage
  },
]

const router = new VueRouter({
  routes,
 
})

export default router
