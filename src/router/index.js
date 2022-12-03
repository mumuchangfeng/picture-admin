import Vue from 'vue'
import Router from 'vue-router'
import PictureManager from '@/components/PictureManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PictureManager',
      component: PictureManager
    }
  ]
})
