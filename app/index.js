import Vue from 'vue'
import 'whatwg-fetch'
import {fetchGet} from 'fetchBuilder'
import App from './App.vue'
import {store} from './store.js'

fetchGet('/api/auth/session')
	.then((user) => {
	console.log('user', user)
	if (user) {
		store.commit('setUser', user)
		new Vue({
			el: '#app',
			store,
			beforeMount () {
				this.$store.dispatch('getTeams')
			},
			render: h => h(App)
		})
	} else {
		window.location = 'api/auth/login'
	}
})
