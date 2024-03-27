import {createRouter, createWebHistory} from 'vue-router'
import Discover from '../views/discover/discover.vue'
import Subscribe from '../views/subscribe/subscribe.vue'
import History from '../views/history/history.vue'
import Search from '../views/search/search.vue'
import PlayList from '../views/play-list/play-list.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
	{
	    path: '/',
	    name: 'discover',
	    component: Discover
	},
	{
	    path: '/subscribe',
	    name: 'subscribe',
	    component: Subscribe
	},
	{
	    path: '/history',
	    name: 'history',
	    component: History
	},
	{
	    path: '/search',
	    name: 'search',
	    component: Search
	},
	{
	    path: '/list',
	    name: 'list',
	    component: PlayList
	},
    ]
})

export default router
