import Vue from 'vue'
import Vuex from 'vuex'
import {fetchGet, fetchPost} from 'fetchBuilder'
import team from './modules/team/teamModule.js'
import home from './modules/home/homeModule.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules: {
		team,
		home
	},
	state: {
		loggedInUser: {}
	},
	mutations: {
		setUser(state, user) {
			state.loggedInUser = user
		}
	}
})