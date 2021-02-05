import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../components/Inicio.vue'
import InicioUsuario from '../components/InicioUsuario.vue'
import Cadastro from '../components/Cadastro.vue'
import Login from '../components/Login.vue'
import Adicionar from '../components/Adicionar.vue'
import MenuSuperior from '../components/MenuSuperior.vue'




const routes = [

  { path: '/',    name: 'Inicio',    component: Inicio},
  { path: '/InicioUsuario',    name: 'InicioUsuario',    component: InicioUsuario},
  { path: '/Login', name:'Login', component: Login},
  { path: '/Cadastro',    name: 'Cadastro',    component: Cadastro},
  { path: '/Adicionar',    name: 'Adicionar',    component: Adicionar},
  { path: '/MenuSuperior',    name: 'MenuSuperior',    component: MenuSuperior},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
