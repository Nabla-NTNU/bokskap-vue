import { createWebHistory, createRouter } from 'vue-router';

import HjemView from '../views/Hjem.vue';
import SkapreglerView from '../views/Skapregler.vue'
import SkaplisterView from '../views/Skaplister.vue'
import AvregistreringView from '../views/Avregistrering.vue'
import GlemtView from '../views/Glemt.vue'
import AdminView from '../views/Admin.vue'

const routes = [
  { path: '/', component: HjemView, name: 'Hjem' },
  { path: '/skapregler', component: SkapreglerView, name: 'Skapregler' },
  { path: '/skaplister', component: SkaplisterView, name: 'Skaplister' },
  { path: '/avregistrering', component: AvregistreringView, name: 'Avregistrering' },
  { path: '/glemt', component: GlemtView, name: 'Glemt' },
  { path: '/admin', component: AdminView, name: 'Admin' },
];

const router = createRouter({
  history: createWebHistory(), // Uses HTML5 History API
  routes
})

export default router;