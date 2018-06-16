import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@/views/Home';
import Lesson from '@/views/Lesson';
import Circle from '@/views/Circle';

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/lesson',
            component: Lesson
        },
        {
            path: '/circle',
            component: Circle
        }
    ]
})
