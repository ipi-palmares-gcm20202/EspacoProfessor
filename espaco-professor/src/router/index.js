import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../components/Inicio.vue'
import Cadastro from '../components/Cadastro.vue'
import Login from '../components/Login.vue'


const routes = [
  { path: '/Cadastro',    name: 'Cadastro',    component: Cadastro},
  { path: '/',    name: 'Inicio',    component: Inicio},
  { path: '/login',    name: 'Login',    component: Login},


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
