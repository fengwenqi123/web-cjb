import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = [{
  // 默认跳转到 recommend
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/index')
},
{
  path: '/404',
  component: () => import('@/views/404')
},
{
  path: '*',
  redirect: '/404'
}
]

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: router
})
