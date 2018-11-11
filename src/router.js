import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: () => import('./views/introduction.vue')
    },
    {
      path: '/chapter/1',
      name: 'chapter-1',
      component: () => import('./views/chapter-1.vue')
    },
    {
      path: '/chapter/2',
      name: 'chapter-2',
      component: () => import('./views/chapter-2.vue')
    },
    {
      path: '/chapter/3',
      name: 'chapter-3',
      component: () => import('./views/chapter-3.vue')
    },
    {
      path: '/chapter/4',
      name: 'chapter-4',
      component: () => import('./views/chapter-4.vue')
    },
    {
      path: '/chapter/5',
      name: 'chapter-5',
      component: () => import('./views/chapter-5.vue')
    },
    {
      path: '/chapter/6',
      name: 'chapter-6',
      component: () => import('./views/chapter-6.vue')
    },
    {
      path: '/chapter/7',
      name: 'chapter-7',
      component: () => import('./views/chapter-7.vue')
    },
    {
      path: '/chapter/8',
      name: 'chapter-8',
      component: () => import('./views/chapter-8.vue')
    },
    {
      path: '/chapter/9',
      name: 'chapter-9',
      component: () => import('./views/chapter-9.vue')
    },
    {
      path: '/chapter/10',
      name: 'chapter-10',
      component: () => import('./views/chapter-10.vue')
    },
    {
      path: '/chapter/11',
      name: 'chapter-11',
      component: () => import('./views/chapter-11.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about.vue')
    },
    {
      path: '/conclusion',
      name: 'conclusion',
      component: () => import('./views/conclusion.vue')
    },
  ]
})
