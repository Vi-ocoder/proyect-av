import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Paquetes from "../views/Paquetes.vue";
import InfoPaq from "../components/infoPaq.vue";
import VerDetalles from "../components/VerDetalles.vue";
import ReservarPaq from "../components/ReservarPaq.vue";

//Archivos vue para la pagina web informatica de la agencia de viajes
import HomeP from '../views/webPage/Home.vue'
import Travels from '../views/webPage/Travels.vue'
import Contactus from '../views/webPage/Contactus.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/admin',
        name: 'Adm',
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
            import ("../views/webPage/createPaq.vue")
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
    {
        path: '/tabPaqs',
        name: 'Tabla Paquetes',
        component: () =>
            import ('../components/TabPaqs.vue')
    },
    {
        path: '/editPaq',
        name: 'Editar Paquete',
        component: () =>
            import ('../components/EditPaq.vue')
    },
    {
        path: '/carrHome',
        name: 'Carrusel Home',
        component: () =>
            import ('../components/carruselHome.vue')
    },
    {
        path: '/registro',
        name: 'Registro',
        component: () =>
            import ('../components/CompRegistrarse.vue')
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //Rutas para pagina web informativa agencia viajes
    {
        path: '/',
        name: 'Home',
        component: HomeP
    },
    {
        path: '/travels',
        name: 'Travels',
        component: Travels
    },
    {
        path: '/contact-us',
        name: 'Contactus',
        component: Contactus
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/webPage/Login.vue')
    },
    {
        path: '/TravelDetail',
        name: 'Travel Detail',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/webPage/TravelDetail.vue')
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////
    //RUTAS PARA USUARIOS
    {
        path: '/allUsers',
        name: 'all Users',
        component: () =>
            import ( /*  */ '../views/users/allUsers.vue')
    },
    {
        path: '/createUser',
        name: 'create User',
        component: () =>
            import ( /*  */ '../views/users/createUser.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router