import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    path: '/iniciarSesion',
    name: 'inicioSesion',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
    meta: {
      hideNavbar: true,
    }
  },
  {
    path: '/agregarPelicula',
    name: 'agregarPelicula',
    component: () => import(/* webpackChunkName: "about" */ '../views/AgregarPeliculaView.vue'),

  },
  {
    path: '/eliminarPelicula',
    name: 'eliminarPelicula',
    component: () => import(/* webpackChunkName: "about" */ '../views/EliminarPeliculaView.vue'),
    props: true,
  },
  {
    path: '/infoPelicula',
    name: 'infoPelicula',
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoPeliculaView.vue'),
    props: true,

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
