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
      path: '/sequence',
      name: 'sequence',
      component: () => import('../Sequence/SequenceView.vue')
    }
  ],
})

export default router
