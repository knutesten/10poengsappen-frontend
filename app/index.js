import Vue from 'vue'
import 'whatwg-fetch'
import {fetchGet} from 'fetchBuilder'
import App from './App.vue'
import {store} from './store.js'

new Vue({
	el: '#app',
	store,
	beforeMount () {
		this.$store.dispatch('getUsers')
	},
	render: h => h(App)
})
