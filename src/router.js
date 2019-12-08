import Vue from 'vue';
import Router from 'vue-router';
import home from './components/Home.vue'
import Member from './components/Member.vue'
import Self from './components/Self.vue'
import Setting from './components/Setting.vue'
Vue.use(Router);

import buypro from './newlist/buypro.vue'
import contactus from './newlist/contactus.vue'
import discus from './newlist/discus.vue'
import mv from './newlist/mv.vue'
import newslist from './newlist/newslist.vue'
import picshare from './newlist/picshare.vue'
import newsinfo from './newlist/newsinfo'
import testDemo from './components/testDemo/testDemo.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  { path:'/',redirect:'/home'},
  { path:'/home',component:home},
  { path:'/Member',component:Member},
  { path:'/Self',component:Self},
  { path:'/Setting',component:Setting},
  { path:'/home/buypro',component:buypro},
  { path:'/home/contactus',component:contactus},
  { path:'/home/discus',component:discus},
  { path:'/home/mv',component:mv},
  { path:'/home/newslist',component:newslist},
  { path:'/home/picshare',component:picshare},
  { path:'/home/newsinfo/:id',component:newsinfo},
  { path:'/testDemo',component:testDemo}
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类，默认的类叫做router-link-active

});
