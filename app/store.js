import Vue from 'vue'
import Vuex from 'vuex'
import {fetchGet, fetchPost} from 'fetchBuilder'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		user: {},
		users: [],
		teams: []
	},
	mutations: {
		rewardPoints(state, userId) {
			const user = state.users.find(user => user.id === userId)
			user.points += 10
		},
		setAllowUndo(state, userId) {
			const user = state.users.find(user => user.id === userId)
			user.allowUndo = true
		},
		setDisallowUndo(state, userId) {
			const user = state.users.find(user => user.id === userId)
			user.allowUndo = false
		},
		setUsers(state, users) {
			state.users = users
		},
		setUser(state, user) {
			state.user = user
		}
	},
	actions: {
		rewardPoints({commit, state, dispatch}, user) {
			fetchPost('api/points', {
				giverId: state.user.id,
				receiverId: user.id,
				teamId: 1,
				amount: 10
			})
				.then(() => {
					commit('rewardPoints', user.id)
					// commit('setAllowUndo', user.id)
					// dispatch('setDisallowUndo', user.id)
				})
		},
		setDisallowUndo({commit}, userId) {
			setTimeout(() => {
				commit('setDisallowUndo', userId)
				Vue.set()
			}, 2000)
		},
		getTeams(context) {
			fetchGet('/api/teams/1').then((prmsUsers) => {
				                              console.log(prmsUsers)
				                              console.log(prmsUsers[0])
				                              context.commit('setUsers', prmsUsers)
			                              }
			)
		}
	}
})