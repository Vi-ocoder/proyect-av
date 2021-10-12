import Vue from 'vue'
import VueRouter from 'vue-router'
import InfoPaq from "../components/infoPaq.vue";
import VerDetalles from "../components/VerDetalles.vue";
import ReservarPaq from "../components/ReservarPaq.vue";

//Archivos vue para la pagina web informatica de la agencia de viajes
import HomeP from '../views/webPage/Home.vue'
import Travels from '../views/webPage/Travels.vue'
import Contactus from '../views/webPage/Contactus.vue'

Vue.use(VueRouter)


//Constante con funcion para validar si el usuario en uso esta logeado en la pagina.
//Si esta logeado permite el ingreso a la vista de la ruta, caso contrario redirige al inicio.
const routeGuard = (to, from, next) => {
    let isAuthenticated = false;
    if (sessionStorage.getItem("email")) {
      isAuthenticated = true;
    }
  
    if (isAuthenticated) {
      next();
    } else {
      next("/");
    }
};

const routes = [{
        path: '/crear-paquete',
        name: "Crear Paquete",
        component: () =>
            import ("../views/webPage/createPaq.vue")
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
        path: '/ReservarPaq/:id',
        name: 'ReservarPaq',
        component: ReservarPaq,
        props: true,                //esta ruta queda habilitada para recibir props
        beforeEnter: routeGuard,    //Ejecuta este codigo antes de mostrar el Componente ligado a esta ruta.
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
    {
        path: '/user-register',
        name: 'user-register',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/webPage/UserRegister.vue')
    },
    {
        path: '/user-forgot-password',
        name: 'user-forgot-password',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/webPage/ForgotPassword.vue')
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
    {
        path: '/infoUsers',
        name: 'Info Users',
        component: () =>
            import ( /*  */ '../components/InfoUsers.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ( /*  */ '../views/users/profile.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router