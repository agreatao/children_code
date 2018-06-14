import Vue from 'vue';
import App from './App';

import VueResource from 'vue-resource';
import VueLazyload from 'vue-lazyload';
Vue.use(VueResource);
Vue.use(VueLazyload);

import router from '@/router';

import '@/assets/css/default.css';

// import { Notification } from 'element-ui';

// import api from '../../static/api/api';
//
//
// Vue.prototype.$api = api
// Vue.prototype.$notify = Notification;
// Vue.component('right-navbar', RightNavbar)

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
