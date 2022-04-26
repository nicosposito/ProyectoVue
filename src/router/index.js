import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//Archivo de configuracion de Router

const routes = [
  {
    path: '/', 
    name: 'home', 
    component: HomeView
  },
  {
    path: '/iniciarSesion',
    name: 'inicioSesion',
    component: () => import('../views/LoginView.vue'),
    meta: {
      hideNavbar: true,
    }
  },
  {
    path: '/agregarPelicula',
    name: 'agregarPelicula',
    component: () => import('../views/AgregarPeliculaView.vue'),

  },
  {
    path: '/eliminarPelicula',
    name: 'eliminarPelicula',
    component: () => import('../views/EliminarPeliculaView.vue'),
    props: true,
  },
  {
    path: '/infoPelicula',
    name: 'infoPelicula',
    component: () => import('../views/InfoPeliculaView.vue'),
    props: true,

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
