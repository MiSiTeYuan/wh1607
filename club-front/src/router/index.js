import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '../views/home/Home.vue'
import Layout from '../views/layout/Index.vue'
//

import TopicList from '../views/topic/TopicList.vue'
import TopicDetail from '../views/topic/TopicDetail.vue'
import TopicCreate from '../views/topic/TopicCreate.vue'


const router = createRouter({
  history: createWebHashHistory(), //createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    //
    {
      path: '/topic',
      name: 'layout',
      component: Layout,
      redirect: '/topic/list',
      children: [
        {
          path: 'list',
          name: 'topicList',
          component: TopicList
        },
        {
          path: 'detail',
          name: 'topicDetail',
          component: TopicDetail
        },
        {
          path: 'create',
          name: 'topicCreate',
          component: TopicCreate
        },
      ]
    },
  ]
})

export default router
