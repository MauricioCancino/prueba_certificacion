import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from '@/views/ErrorView.vue'
import MenProductsView from '@/views/MenProductsView.vue'
import WomenProductsView from '@/views/WomenProductsView.vue'
import ElectronicProductsView from '@/views/ElectronicProductsView.vue'
import PagarView from '@/views/PagarView.vue'
import Cart from '@/views/CartView.vue'
import ConfirmedView from '@/views/ConfirmedView.vue'
import CategoriesView from '@/views/CategoriesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '*',
    name: "error",
    component: ErrorView
  },
  {
    path: '/Menproducts',
    name: 'Menproducts',
    component: MenProductsView
  },
  {
    path: '/Womenproducts',
    name: 'Womenproducts',
    component: WomenProductsView
  },
  {
    path: '/Electronicproducts',
    name: 'Electronicproducts',
    component: ElectronicProductsView
  },
  {
    path:'/cart',
    name:'Cart',
    component:Cart
  },
  {
    path: "/pagar",
    name: "pagar",
    component: PagarView
  },
  {
    path: "/confirmed",
    name: "confirmed",
    component: ConfirmedView
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
