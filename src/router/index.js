import { createWebHistory, createRouter } from 'vue-router';

import HjemView from '../views/Hjem.vue';
import SkapreglerView from '../views/Skapregler.vue'
import SkaplisterView from '../views/Skaplister.vue'
import AvregistreringView from '../views/Avregistrering.vue'
import GlemtView from '../views/Glemt.vue'
import AdminView from '../views/Admin.vue'


const routes = [
  {path: '/', component: HjemView},
  {path: '/skapregler', component: SkapreglerView},
  {path: '/skaplister', component: SkaplisterView},
  {path: '/avregistrering', component: AvregistreringView},
  {path: '/glemt', component: GlemtView},
  {path: '/admin', component: AdminView},

]

const router = createRouter({
  history: createWebHistory(), // Uses HTML5 History API
  routes
})

export default router;