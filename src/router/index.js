import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import ProductList from '../components/productList'
import Manage from '../components/manage'
import ManageUsers from '../components/manage/manageUsers'
import ManageProducts from '../components/manage/manageProducts'
import MyProfile from '../components/myProfile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home, name: 'home' },
    { path: '/list', component: ProductList, name: 'productList' },
    { path: '/manage', component: Manage, name: 'manage' },
    { path: '/manage/users', component: ManageUsers, name: 'manageUsers' },
    { path: '/manage/products', component: ManageProducts, name: 'manageProducts' },
    { path: '/profile', component: MyProfile, name: 'myProfile' },
    { path: '*', redirect: '/' }
  ]
})
