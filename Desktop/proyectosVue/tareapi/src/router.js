import { createRouter, createWebHistory } from 'vue-router';

import MiIp from './Pages/MiIp';
import DoxxeoInfo from './Pages/DoxxeoInfo';
import RickRoll from './Pages/RickHome'

const routes = [
  {
    name: 'MiIp',
    path: '/ip',
    component: MiIp,
    props: true,
  },
  {
    name: 'DoxxeoInfo',
    path: '/DoxxeoInfo/:ip',
    component: DoxxeoInfo,
    props:true
  },
  {
    name: 'Home',
    path: '/',
    component: RickRoll,
    props:true
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;