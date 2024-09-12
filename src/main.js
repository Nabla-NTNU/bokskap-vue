import './assets/main.css';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import ToastService from 'primevue/toastservice';
import App from './App.vue';

import { createWebHistory, createRouter } from 'vue-router';

import MainContent from './views/MainContent.vue';
import Skapregler from '@/markdown/skapregler.md';
import Glemt from './views/Glemt.vue';
import Admin from './views/Admin.vue';


const routes = [
  {path: '/', component: MainContent},
  {path: '/skapregler', component: Skapregler},
  {path: '/glemt', component: Glemt},
  {path: '/admin', component: Admin},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router);
app.use(ToastService);

app.mount("#app");
