import { createRouter, createWebHistory } from 'vue-router'
// import PictureManager from '@/views/PictureManager'
// import PictureDetail from '@/views/PictureDetail'

// import ImageView from '@/views/ImageView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/PictureManager.vue')
  },
  {
    path: '/PictureDetail',
    name: 'PictureDetail',
    component: () => import('../views/PictureDetail.vue'),
    meta: {
      requireAuth: true
    }
  }
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
