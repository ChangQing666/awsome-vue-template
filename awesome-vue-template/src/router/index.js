import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/common/Index'
import HelloWorld from '@/components/page/HelloWorld'
import DatePage from '@/components/page/DatePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
        {
          path: '/helloworld',
          name: 'HelloWorld',
          component: HelloWorld
        },{
          path: '/datePage',
          name: 'DatePage',
          component: DatePage
        }
      ]
    }
  ]
})
