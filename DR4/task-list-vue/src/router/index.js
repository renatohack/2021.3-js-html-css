import { createRouter, createWebHashHistory } from 'vue-router'
import Cadastro from '../views/Cadastro.vue'
import Listagem from '../views/Listagem.vue'
import Sobre from '../views/Sobre.vue'

const routes = [
  {
    path: '/',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/listagem',
    name: 'Listagem',
    component: Listagem
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
