import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CentersView from '../views/CentersView.vue'
import ResearchView from '../views/ResearchView.vue'
import AcademyView from '../views/AcademyView.vue'
import CollaborationView from '../views/CollaborationView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/centers', name: 'centers', component: CentersView },
  { path: '/research', name: 'research', component: ResearchView },
  { path: '/academy', name: 'academy', component: AcademyView },
  { path: '/collaboration', name: 'collaboration', component: CollaborationView },
  // unknown paths fall back to home
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
