import Vue from 'vue'
import 'whatwg-fetch'
import {fetchGet} from 'fetchBuilder'
import App from './App.vue'
import Home from './components/Home.vue'
import Team from './components/Team.vue'
import {store} from './store.js'
import VueRouter from 'vue-router'
import './styles/main.scss'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Home, props: true },
	{ path: '/team/:teamId', component: Team, props: true }
]

const router = new VueRouter({
	routes
})

fetchGet('/api/auth/session')
	.then((user) => {
	if (user) {
		store.commit('setUser', user)
		new Vue({
			el: '#app',
			store,
			router,
			beforeMount () {
				this.$store.dispatch('getTeams')
			},
			render: h => h(App)
		})
	} else {
		window.location = 'api/auth/login'
	}
})
