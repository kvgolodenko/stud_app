import Vue from 'vue'
import Router from 'vue-router'
import AddsList from '@/components/AddsList'
import Login from '@/components/Login'
import Product from '@/components/Product'
import Register from '@/components/Register'
import SingleAdd from '@/components/SingleAdd'
import AddForm from '@/components/AddForm'
import Page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddsList',
      component: AddsList
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: Product
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/add:id(\\d+)',
      name: 'SingleAdd',
      component: SingleAdd
    },
    {
      path: '/:id(\\d+)',
      name: 'AddForm',
      component: AddForm
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ],
  mode: 'history'
})
