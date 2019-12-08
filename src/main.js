import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import moment from 'moment'//导入moment
//axios
import axios from 'axios'
import qs from 'qs'
Vue.prototype.axios = axios
Vue.prototype.qs = qs
//定义全局过滤器
Vue.filter('dataFormat',function(datastr,pattern="YYYY-MM-DD HH-mm-ss"){
  //moment.js 过滤时间
  return moment(datastr).format(pattern)
})
//mui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.config.productionTip = false;

//导入 MUI 样式
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui.ttf'
import { Swipe, SwipeItem,Header,Button,CellSwipe,Badge,Switch,Navbar,TabItem,Search,IndexList,MessageBox} from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(CellSwipe.name, CellSwipe);
Vue.component(Badge.name, Badge);
Vue.component(Switch.name, Switch);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Search.name, Search);
Vue.component(IndexList.name, IndexList);
Vue.component(MessageBox.name, MessageBox);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
