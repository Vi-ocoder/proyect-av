import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pruebas from "../views/pruebas.vue";
import Paquetes from "../views/Paquetes.vue";
import InfoPaq from "../components/infoPaq.vue";
import VerDetalles from "../components/VerDetalles.vue";
import ReservarPaq from "../components/ReservarPaq.vue";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/IniciarSesion',
        name: 'IniciarSesion',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/IniciarSesion.vue')
    },
    {
        path: '/crear-paquete',
        name: "Crear Paquete",
        component: () =>
            import ("../views/CrearPaquete.vue")
    },
    {
        path: '/pruebas',
        name: "Pruebas",
        component: Pruebas
    },
    {
        path: '/paqs',
        name: 'Paquetes',
        component: Paquetes
    },
    {
        path: '/infoPaq',
        name: 'InfoPaq',
        component: InfoPaq
    },
    {
        path: '/VerDetalles',
        name: 'VerDetalles',
        component: VerDetalles
    },
    {
        path: '/ReservarPaq',
        name: 'ReservarPaq',
        component: ReservarPaq
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router