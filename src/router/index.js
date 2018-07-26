import vue from 'vue';
import Router from 'vue-router';
import Vue from 'vue';

import Posts from '../components/Posts';
import Red from '../components/Red';

Vue.use(Router);

const routes = [
    { path: '/', redirect: '/posts'},
    { path: '/posts', component: Posts },
    { path: '/red', component: Red }
];

export default new Router({
    routes,
    mode: 'history',
});