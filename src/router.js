import Vue from 'vue'
import Router from 'vue-router'

import Introduction from './views/Introduction.vue';
import Chapter1 from './views/Chapter-1.vue';
import Chapter2 from './views/Chapter-2.vue';
import Chapter3 from './views/Chapter-3.vue';
import Chapter4 from './views/Chapter-4.vue';
import Chapter5 from './views/Chapter-5.vue';
import Chapter6 from './views/Chapter-6.vue';
import Chapter7 from './views/Chapter-7.vue';
import Chapter8 from './views/Chapter-8.vue';
import Chapter9 from './views/Chapter-9.vue';
import Chapter10 from './views/Chapter-10.vue';
import Chapter11 from './views/Chapter-11.vue';
import Conclusion from './views/Conclusion.vue';
import About from './views/About.vue';

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'introduction',
      meta: {
        title: 'Introduction',
        description: '',
        keywords: ''
      },
      component: Introduction
      //component: () => import('./views/Introduction.vue')
    },
    {
      path: '/chapter/1',
      name: 'chapter-1',
      meta: {
        title: 'Restaurant Budgeting:',
        description: 'Getting Your Numbers Right',
        keywords: ''
      },
      component: Chapter1
      //component: () => import('./views/Chapter-1.vue')
    },
    {
      path: '/chapter/2',
      name: 'chapter-2',
      meta: {
        title: 'Location, Space, & Personality:',
        description: 'Setting the Scene for a Winning Restaurant',
        keywords: ''
      },
      component: Chapter2
      //component: () => import('./views/Chapter-2.vue')
    },
    {
      path: '/chapter/3',
      name: 'chapter-3',
      meta: {
        title: 'Restaurant Branding:',
        description: 'Concept, Brand Identity, Naming, and Logos',
        keywords: ''
      },
      component: Chapter3
      //component: () => import('./views/Chapter-3.vue')
    },
    {
      path: '/chapter/4',
      name: 'chapter-4',
      meta: {
        title: '5 Steps to Kickstart',
        description: 'Your New Restaurant Business',
        keywords: ''
      },
      component: Chapter4
      //component: () => import('./views/Chapter-4.vue')
    },
    {
      path: '/chapter/5',
      name: 'chapter-5',
      meta: {
        title: 'Build the Best Team:',
        description: 'Finding and Managing Your Restaurant’s A-Team',
        keywords: ''
      },
      component: Chapter5
      //component: () => import('./views/Chapter-5.vue')
    },
    {
      path: '/chapter/6',
      name: 'chapter-6',
      meta: {
        title: 'Taking Restaurant Customer Service to the Next Level:',
        description: 'Strategies and Results',
        keywords: ''
      },
      component: Chapter6
      //component: () => import('./views/Chapter-6.vue')
    },
    {
      path: '/chapter/7',
      name: 'chapter-7',
      meta: {
        title: 'Menu Hacking:',
        description: 'Cost Per Meal & Smart Design to Maximize Profits',
        keywords: ''
      },
      component: Chapter7
      //component: () => import('./views/Chapter-7.vue')
    },
    {
      path: '/chapter/8',
      name: 'chapter-8',
      meta: {
        title: '14 Essential Restaurant Metrics Every Owner',
        description: 'Should Measure and Track',
        keywords: ''
      },
      component: Chapter8
      //component: () => import('./views/Chapter-8.vue')
    },
    {
      path: '/chapter/9',
      name: 'chapter-9',
      meta: {
        title: 'The 19 Tech Tools You Need to Run',
        description: 'a Successful Restaurant',
        keywords: ''
      },
      component: Chapter9
      //component: () => import('./views/Chapter-9.vue')
    },
    {
      path: '/chapter/10',
      name: 'chapter-10',
      meta: {
        title: 'Greener Tomorrow:',
        description: 'A Step-By-Step Guide to Running an Eco-Conscious Restaurant',
        keywords: ''
      },
      component: Chapter10
      //component: () => import('./views/Chapter-10.vue')
    },
    {
      path: '/chapter/11',
      name: 'chapter-11',
      meta: {
        title: 'A Starter Guide to Instagram',
        description: 'Marketing for Restaurateurs',
        keywords: ''
      },
      component: Chapter11
      //component: () => import('./views/Chapter-11.vue')
    },
    {
      path: '/conclusion',
      name: 'conclusion',
      meta: {
        title: 'Conclusion',
        description: '',
        keywords: ''
      },
      component: Conclusion
      //component: () => import('./views/Conclusion.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About ChefHero',
        description: '',
        keywords: ''
      },
      component: About
      //component: () => import('./views/About.vue')
    }
  ]
})