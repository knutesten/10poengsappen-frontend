import Vue from 'vue'
import Vuex from 'vuex'
import {fetchGet} from './utils/fetchBuilder'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		users: [
			{name: 'Geir', points: 132},
			{name: 'Johanne', points: 176},
			{name: 'Knut', points: 12},
			{name: 'Torkjel', points: 34},
			{name: 'Aleksi', points: 345},
			{name: 'Vegard', points: 98},
		]
	},
	mutations: {
		rewardPoints(state, userName) {
			console.log(userName)
			const user = state.users.find(user => user.name === userName)
			user.points += 10
		},
		setUsers(state, users) {
			state.users = users
		}
	},
	actions: {
		rewardPoints(context, userName) {
			context.commit('rewardPoints', userName)
		},
		getUsers(context) {
			// fetchGet('/api/auth/login').then((users) => {
			// 	                  context.commit('setUsers', [{name: 'Knut', points: 1337}])
			//                   }
			// )
		}
	}
})