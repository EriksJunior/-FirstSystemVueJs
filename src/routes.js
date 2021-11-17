import Vue from 'vue'
import Router from 'vue-router'
import Cliente from './components/cliente/index-cliente'
import Produto from './components/produto/index-produto'
import Home from './components/home/index_home'
Vue.use(Router)

const routes = [
    {
        path: '/cliente',
        component: Cliente
    },
    {
        path: '/produto',
        component: Produto
    },
    {
        path: '/home',
        component: Home
    }
]


const router = new Router({
    mode: 'history',
    routes
})

export default router;