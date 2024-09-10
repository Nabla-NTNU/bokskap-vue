import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router';

import MainContent from './views/MainContent.vue';
import Skapregler from '@/markdown/skapregler.md'
import Glemt from './views/Glemt.vue'

const routes = [
  {path: '/', component: MainContent},
  {path: '/skapregler', component: Skapregler},
  {path: '/glemt', component: Glemt}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router)

app.mount("#app")
