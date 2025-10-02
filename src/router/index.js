import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../Home/HomeView.vue')
    },
    
    {
      path: '/component-diagram',
      name: 'componentDiagram',
      component: () => import('../Home/ComponentDiagView.vue')
    }
  ],
})

export default router
